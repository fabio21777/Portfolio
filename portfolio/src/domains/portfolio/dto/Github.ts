export interface GitHubUser {
  login: string
  name: string | null
  avatar_url: string
  html_url: string
  bio: string | null
  location: string | null
  public_repos: number
  followers: number
  following: number
}

/**
 * Extrai o username de uma URL de perfil do GitHub.
 * Aceita formas com/sem trailing slash, query string ou sufixo .git.
 */
export function extractGithubUsername(githubUrl: string): string {
  try {
    const pathname = new URL(githubUrl).pathname
    return pathname.split('/').filter(Boolean).pop() ?? ''
  } catch {
    // URL inválida: fallback pro split antigo
    return githubUrl.split('/').filter(Boolean).pop() ?? ''
  }
}
