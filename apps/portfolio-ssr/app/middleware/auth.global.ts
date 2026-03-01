export default defineNuxtRouteMiddleware((to, from) => {
    // Check auth in the client side because we're relying on localStorage
    if (import.meta.client) {
        const isAuthenticated = !!localStorage.getItem('myToken')

        const requiresAuth = ['/login', '/animation'].includes(to.path)

        // To prevent infinite loop on /login redirecting to /login
        if (requiresAuth && !isAuthenticated && to.path !== '/login') {
            return navigateTo('/login')
        }
    }
})
