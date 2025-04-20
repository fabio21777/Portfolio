import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', () => {

  const  portfolioInfo =  reactive<Portforlio>({
    name: 'Fabio De Souza Miranda',
    email: 'fabiosouza21777@gmial.com',
    github: 'https://github.com/fabio21777',
    linkedin: 'https://linkedin.com/in/fabio-miranda-501937215',
    firstName: 'Fabio',
  })

  function setPortfolio(portfolioUpdate: Portforlio) {
    portfolioInfo.name = portfolioUpdate.name
    portfolioInfo.email = portfolioUpdate.email
    portfolioInfo.github = portfolioUpdate.github
    portfolioInfo.linkedin = portfolioUpdate.linkedin
  }

  return { portfolioIndo: portfolioInfo, setPortfolio }

})