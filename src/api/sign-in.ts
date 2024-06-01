import { api } from '@/lib/axios'

export interface SignInBody {
  email: string
  password: string
}

export async function signIn({ email, password }: SignInBody) {
  const response = await api.post('/authenticate', {
    email,
    password,
  })

  if (response.status === 401) {
    throw new Error('Invalid credentials.')
  }
  if (response.status !== 200) {
    throw new Error('Internal server error.')
  }
}
