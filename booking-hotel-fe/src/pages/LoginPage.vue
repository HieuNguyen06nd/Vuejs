<template>
    <div class="login-container">
      <h2>Đăng nhập</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label>Email:</label>
          <input type="email" v-model="form.email" required />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input type="password" v-model="form.password" required />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
      <p v-if="error" style="color: red">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import useLogin from '../composables/useLogin'
  const { form, error, handleLogin } = useLogin()
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    margin-top: 100px;
  }
  </style>
  