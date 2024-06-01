import { api } from '@/lib/axios'

interface GetProfileResponse {
  user: {
    id: string
    name: string
    email: string
    phone: string | null
    role: 'USER' | 'ADMIN'
    createdAt: Date | null
    updateAt: Date | null
  }
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  if (response.status === 400) {
    throw new Error('Invalid credentials.')
  }

  return response.data
}
