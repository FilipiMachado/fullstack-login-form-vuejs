<template>
  <main>
    <header>
      <h1 class="logo">FORM FULLSTACK</h1>
      <h2>Login</h2>
      <p>Faça o login ou crie uma nova conta.</p>
    </header>

    <form @submit.prevent="">
      <label>
        <span>Seu Email</span>
        <input type="email" v-model="email" placeholder="Digite o email">
      </label>
    </form>
  </main>
</template>
  
<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

</script>
  
<style scoped>
  
</style>