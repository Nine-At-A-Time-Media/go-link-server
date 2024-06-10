<template>
  <div>
    <h1>Admin Page</h1>
    <p>Welcome, authenticated user!</p>
  </div>
</template>

<script setup>
const { $supabase } = useNuxtApp();
const user = $supabase.auth.user();

if (!user) {
  return navigateTo('/login');
}
</script>
