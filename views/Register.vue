<template>
  <main>
    <header>
      <h1 class="logo">FORM FULLSTACK</h1>
      <h2>Cadastrar-se</h2>
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
      <label>
        <span>Confirme sua senha</span>
        <input type="password" v-model="confPassword" placeholder="Digite uma senha">
      </label>
      <input type="submit" value='Cadastrar'>
    </form>

    <footer>
      <p>
        Já tem uma conta? 
        <router-link to="/login">Login</router-link>
      </p>
    </footer>
  </main>
</template>
  
<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const confPassword = ref('')

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
  color: var(--dark);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

input:not([type="submit"]) {
  display: block;
  width: 100%;
  border-radius: 0.5rem;
  padding: 1.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--gray);
  background-color: var(--light);
  margin-bottom: 1.5rem;
}

input:not([type="submit"])::placeholder {
  color: var(--gray);
  font-style: italic;
}

input[type="submit"] {
  display: block;
  width: fit-content;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  background-color: var(--primary);
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease;
}

input[type="submit"]:hover {
  background-color: var(--primary-dark);
}
</style>