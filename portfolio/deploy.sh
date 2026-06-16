#!/usr/bin/env bash
#
# deploy.sh — build + deploy do portfólio para S3 + CloudFront
#
# Uso:
#   ./deploy.sh
#
# Pré-requisitos:
#   - AWS CLI autenticada (aws sts get-caller-identity tem que funcionar)
#   - Node/npm instalados
#
set -euo pipefail

# ============================================================
# CONFIGURAÇÃO — lida do ambiente (.env). Os valores após ':-'
# são apenas fallback caso a variável não esteja definida.
# ============================================================
BUCKET="${DEPLOY_BUCKET:-}"                              # nome do bucket S3 (sem s3://)
DISTRIBUTION_ID="${DEPLOY_DISTRIBUTION_ID:-E3TMW7YFL6V0PF}"  # distribuição CloudFront
BUILD_CMD="${DEPLOY_BUILD_CMD:-npm run build}"          # comando de build da stack
BUILD_DIR="${DEPLOY_BUILD_DIR:-dist}"                   # pasta gerada pelo build
#   Vue/Vite ........ DEPLOY_BUILD_DIR=dist
#   React (Vite) .... DEPLOY_BUILD_DIR=dist
#   React (CRA) ..... DEPLOY_BUILD_DIR=build
#   Angular ......... DEPLOY_BUILD_DIR=dist/NOME-DO-APP
DOMAIN="${DEPLOY_DOMAIN:-https://fsmdevs.com}"          # usado só no teste final
# ============================================================

# Cores pra log
green() { printf "\033[32m%s\033[0m\n" "$1"; }
yellow() { printf "\033[33m%s\033[0m\n" "$1"; }
red() { printf "\033[31m%s\033[0m\n" "$1"; }

# Caminho do .env (mesma pasta do script, independente de onde você rodar)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.env"

# 0. Carrega o .env automaticamente, se as credenciais ainda não estiverem na sessão
if [[ -z "${AWS_ACCESS_KEY_ID:-}" || -z "${AWS_SECRET_ACCESS_KEY:-}" ]]; then
  if [[ -f "$ENV_FILE" ]]; then
    yellow "→ Carregando credenciais de $ENV_FILE"
    set -a
    # shellcheck disable=SC1090
    source "$ENV_FILE"
    set +a
  else
    red "✗ Sem credenciais na sessão e .env não encontrado em $ENV_FILE"
    red "  Rode 'aws configure' ou crie um .env com AWS_ACCESS_KEY_ID e AWS_SECRET_ACCESS_KEY."
    exit 1
  fi
else
  yellow "→ Credenciais já presentes na sessão"
fi

# 1. Validações rápidas
if [[ "$BUCKET" == "SEU-BUCKET" ]]; then
  red "✗ Edite a variável BUCKET no topo do script antes de rodar."
  exit 1
fi

yellow "→ Verificando credenciais AWS..."
aws sts get-caller-identity >/dev/null || {
  red "✗ Credenciais inválidas ou expiradas. Confira o .env ou rode 'aws configure'."
  exit 1
}

# 2. Build
yellow "→ Rodando build: $BUILD_CMD"
eval "$BUILD_CMD"

if [[ ! -d "$BUILD_DIR" ]]; then
  red "✗ Pasta de build '$BUILD_DIR' não encontrada. Confira BUILD_DIR."
  exit 1
fi

# 3. Sync para o S3 em duas etapas (cache correto para SPA)
#    2a. Assets com hash no nome → cache longo (1 ano, imutável)
yellow "→ Subindo assets (cache longo)..."
aws s3 sync "$BUILD_DIR" "s3://$BUCKET" \
  --delete \
  --exclude "index.html" \
  --exclude "*.html" \
  --cache-control "public,max-age=31536000,immutable"

#    2b. HTML → sem cache (sempre revalida, pega versão nova na hora)
yellow "→ Subindo HTML (sem cache)..."
aws s3 sync "$BUILD_DIR" "s3://$BUCKET" \
  --exclude "*" \
  --include "*.html" \
  --cache-control "no-cache,no-store,must-revalidate" \
  --content-type "text/html"

# 4. Invalida o cache do CloudFront
yellow "→ Invalidando cache do CloudFront..."
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text)
green "  Invalidação criada: $INVALIDATION_ID"

# 5. (opcional) espera a invalidação concluir
yellow "→ Aguardando invalidação concluir (pode levar ~1-3 min)..."
aws cloudfront wait invalidation-completed \
  --distribution-id "$DISTRIBUTION_ID" \
  --id "$INVALIDATION_ID"

# 6. Teste final
yellow "→ Testando $DOMAIN ..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$DOMAIN")
if [[ "$HTTP_CODE" == "200" ]]; then
  green "✓ Deploy concluído! $DOMAIN respondeu $HTTP_CODE"
else
  red "✗ $DOMAIN respondeu $HTTP_CODE — verifique manualmente."
  exit 1
fi
