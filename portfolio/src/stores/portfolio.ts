import type { Portforlio } from '@/domains/portfolio/dto/Portforlio'

const portifolioFabio: Portforlio = {
  name: 'Fabio De Souza Miranda',
  email: 'fabiosouza21777@gmail.com',
  github: 'https://github.com/fabio21777',
  linkedin: 'https://linkedin.com/in/fabio-miranda-501937215',
  firstName: 'Fabio',
  local: 'Belém - PA',
  fotoPerfil: '/assets/foto-fabio.jpg',
  curriculo: '/assets/Curriculo-Fabio.pdf'
}

const portifolioFabricio: Portforlio = {
  name: 'Fabricio De Souza Miranda',
  email: 'fabriciosouza21777@gmail.com',
  github: 'https://github.com/fabriciosouza21',
  linkedin: 'https://www.linkedin.com/in/fabricio-souza-771b321bb/',
  firstName: 'Fabricio',
  local: 'Belém - PA',
  fotoPerfil: '/assets/foto-fabricio.jpg',
  curriculo: '/assets/Curriculo-Fabricio.pdf'
}

// Mapeamento userName -> perfil. Fonte única de verdade pra resolução.
const PROFILES: Record<string, Portforlio> = {
  fabriciosouza21: portifolioFabricio,
  fabio21777: portifolioFabio
}

// Fallback quando param informado não bate com nenhum perfil conhecido.
const FALLBACK_PROFILE = portifolioFabio

// Limiar do sorteio 50/50 quando nenhum perfil é escolhido explicitamente.
const RANDOM_PROFILE_THRESHOLD = 0.5
const PROFILE_KEYS = Object.keys(PROFILES)

const normalizeUserName = (userName?: string | string[]): string | undefined => {
  if (Array.isArray(userName)) return userName[0]
  return userName
}

/**
 * Resolve qual perfil mostrar.
 * Ordem: param explícito > localStorage > sorteio 50/50.
 *
 * Side effect: persiste userName em localStorage quando fornecido,
 * pra deep-links sobreviverem a refresh.
 */
export const getInfoPortifolio = (userName?: string | string[]): Portforlio => {
  const resolved = normalizeUserName(userName)

  if (resolved) {
    localStorage.setItem('userName', resolved)
    return PROFILES[resolved] ?? FALLBACK_PROFILE
  }

  const stored = localStorage.getItem('userName')
  if (stored && PROFILES[stored]) {
    return PROFILES[stored]
  }

  // Sem param e sem localStorage: sorteia entre os perfis disponíveis.
  const randomKey = Math.random() < RANDOM_PROFILE_THRESHOLD
    ? PROFILE_KEYS[0]
    : PROFILE_KEYS[1]
  return PROFILES[randomKey]
}
