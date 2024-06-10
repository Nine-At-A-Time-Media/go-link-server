// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
  const { $supabase } = useNuxtApp();
  const user = $supabase.auth.user();

  if (!user) {
    return navigateTo('/login');
  }
})
