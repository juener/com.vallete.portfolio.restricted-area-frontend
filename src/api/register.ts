import { api } from '@/lib/axios'

interface RegisterBody {
  name: string
  email: string
  password: string
}

export async function register({ name, email, password }: RegisterBody) {
  const response = await api.post('/users', {
    name,
    email,
    password,
  })

  if (response.status === 401) {
    throw new Error('Invalid credentials.')
  }
}
