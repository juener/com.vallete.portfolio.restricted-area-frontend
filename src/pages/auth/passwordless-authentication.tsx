import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'

const passwordAuthenticationForm = z.object({
  email: z.string().email(),
})

type PasswordAuthenticationForm = z.infer<typeof passwordAuthenticationForm>

export function PasswordlessAuthentication() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<PasswordAuthenticationForm>()

  const { toast } = useToast()

  async function handlePasswordlessAuthentication(
    data: PasswordAuthenticationForm,
  ) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: `We've sent an email to you!`,
      description: `Please check your mailbox (and spam) to continue.`,
      variant: 'destructive',
      className: 'bg-green-900 border-black',
    })
  }

  return (
    <>
      <Helmet title="Sign-In" />

      <form
        onSubmit={handleSubmit(handlePasswordlessAuthentication)}
        className="flex w-9/12 flex-col gap-4"
      >
        <Input
          disabled={isSubmitting}
          placeholder="Enter your email"
          {...register('email')}
        />
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? <span>Loading...</span> : <span>Continue</span>}
        </Button>
      </form>

      <Toaster />
    </>
  )
}
