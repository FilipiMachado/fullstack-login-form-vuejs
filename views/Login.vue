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
      <label>
        <span>Senha</span>
        <input type="password" v-model="password" placeholder="Digite uma senha">
      </label>
      <input type="submit" value='Login'>
    </form>

    <footer>
      <p>
        Não tem uma conta? 
        <router-link to="/register">Cadastre-se</router-link>
      </p>
    </footer>
  </main>
</template>
  
<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

</script>
  
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: var(--primary);
  color: #fff;
}

header {
  padding: 1.5rem;
}

footer {
  background-color: #fff;
  width: 100%;
  color: var(--dark);
  text-align: center;
  padding: 1.5rem;
  padding-bottom: 3rem;
}

h2 {
  font-size: 2.125rem;
  margin-bottom: 1rem;
  text-align: center;
}

h2 ~ p {
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
}

form {
  flex: 1 1 0%;
  display: block;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: #fff;
  box-shadow: 0px -4px 12px 4px rgba(0, 0, 0, 0.16);
  color: var(--dark);
  padding: 4rem 1.5rem;
  width: 50vw;
}

label {
  display: block;
  margin-bottom: 1.5rem;
}

label span {
  display: block;
  color: var(--gray);
  font-size: 1rem;
}
</style>