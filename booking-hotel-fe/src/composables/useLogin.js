// src/composables/useLogin.js
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default function useLogin() {
  const router = useRouter()
  const form = reactive({
    email: '',
    password: ''
  })

  const error = ref('')

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', form)
      const { token, role } = response.data.data

      localStorage.setItem('token', token)
      localStorage.setItem('role', role)

      router.push('/')
    } catch (err) {
      error.value = err.response?.data?.message || 'Đăng nhập thất bại'
    }
  }

  return {
    form,
    error,
    handleLogin
  }
}
