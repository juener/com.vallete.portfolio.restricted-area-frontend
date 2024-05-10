import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'

const completeRegisterForm = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  person: z.string().min(3),
})

type CompleteRegisterForm = z.infer<typeof completeRegisterForm>

export function CompleteRegister() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CompleteRegisterForm>()

  const { toast } = useToast()

  async function handleCompleteRegister(data: CompleteRegisterForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: `Nice to have you, {name}`,
      description: `You're going to be redirected to the dashboard page.`,
    })
  }

  return (
    <>
      <Helmet title="Complete your own data" />
      <form onSubmit={handleSubmit(handleCompleteRegister)} className="">
        <Input {...register('email')} />
        <Button disabled={isSubmitting} type="submit">
          Complete
        </Button>

        <Toaster />
      </form>
    </>
  )
}
