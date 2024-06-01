import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { register as registerUser } from '@/api/register'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'

const registerUserForm = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  password: z.string().min(3),
})

type RegisterUserForm = z.infer<typeof registerUserForm>

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterUserForm>()

  const navigate = useNavigate()

  const { toast } = useToast()

  const { mutateAsync: registerFn } = useMutation({
    mutationFn: registerUser,
  })

  async function handleRegisterUser(data: RegisterUserForm) {
    try {
      await registerFn({
        name: data.name,
        email: data.email,
        password: data.password,
      })

      navigate(`/auth/basic-authentication?email=${data.email}`)
    } catch (err) {
      toast({
        title: 'Error',
        description: `${err?.message}`,
        variant: 'destructive',
      })
    }
  }

  return (
    <>
      <Helmet title="Complete your own data" />
      <form
        onSubmit={handleSubmit(handleRegisterUser)}
        className="flex w-9/12 flex-col gap-4"
      >
        <Input
          disabled={isSubmitting}
          placeholder="Enter your name"
          {...register('name')}
        />
        <Input
          disabled={isSubmitting}
          placeholder="Enter your email"
          {...register('email')}
        />
        <Input
          disabled={isSubmitting}
          placeholder="Enter your password"
          type="password"
          {...register('password')}
        />
        <Button disabled={isSubmitting} type="submit">
          Register
        </Button>

        <Toaster />
      </form>
    </>
  )
}
