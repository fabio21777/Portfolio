import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('../domains/AboutView.vue'),
      meta: { requiresAuth: false } // se estiver autenticado, acessa a rotas protegidas
      
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../domains/auth/views/LoginViews.vue'),
      meta: { requiresAuth: true }
    }, // se o path não existir, redireciona para a rota de login
    {
      path: '/animation',
      name: 'animation',
      component: () => import('../domains/animacao/views/AnimacaoViews.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'portfolio' }
    },
    {
      path: '/portfolio/:userName',
      name: 'portfolioUser',
      component: () => import('../domains/portfolio/views/PortfolioViews.vue'),
    },
    {
      path: '/',
      name: 'portfolio',
      component: () => import('../domains/portfolio/views/PortfolioViews.vue'),
    }
  ]
})

// Definindo o método de verificação de autenticação
function isAuthenticated() {
  return !!localStorage.getItem('myToken'); // isso é um exemplo, você pode implementar a lógica que quiser
}

// Adicionando o global guard
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router
