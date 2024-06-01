import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ToastAction } from '@/components/ui/toast'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'

const basicAuthenticationForm = z.object({
  email: z.string().email(),
  password: z.string(),
})

type BasicAuthenticationForm = z.infer<typeof basicAuthenticationForm>

export function BasicAuthentication() {
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<BasicAuthenticationForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const navigate = useNavigate()
  const { toast } = useToast()

  const { mutateAsync: basicAuthenticationFn } = useMutation({
    mutationFn: signIn,
  })

  async function handleBasicAuthentication(data: BasicAuthenticationForm) {
    try {
      await basicAuthenticationFn({
        email: data.email,
        password: data.password,
      })

      navigate('/')
    } catch (err) {
      toast({
        title: 'Error',
        description: `${err?.message}`,
        variant: 'destructive',
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

  return (
    <>
      <Helmet title="Log In" />
      <form
        onSubmit={handleSubmit(handleBasicAuthentication)}
        className="flex w-9/12 flex-col gap-4"
      >
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
        <Button disabled={isSubmitting}>
          {isSubmitting ? <span>Authenticating...</span> : <span>Log In</span>}
        </Button>
      </form>
      <Toaster />
    </>
  )
}
