<template>
  <div>
    <h1>Login</h1>
    <button @click="signInWithGoogle">Sign in with Google</button>
  </div>
</template>

<script setup>
const { $supabase } = useNuxtApp();

async function signInWithGoogle() {
  const { error } = await $supabase.auth.signIn({
    provider: 'google'
  });

  if (error) {
    console.error('Error signing in:', error);
  }
}
</script>

