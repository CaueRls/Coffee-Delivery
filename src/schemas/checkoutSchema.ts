import { z } from 'zod'

export const checkoutSchema = z.object({
  postalCode: z.string().min(8, 'Informe um CEP válido'),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  complement: z.string().optional(),
  district: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().length(2, 'Informe a UF (2 letras)').transform((v) => v.toUpperCase()),
  paymentMethod: z.enum(['credit-card', 'debit-card', 'cash'], {
    message: 'Selecione uma forma de pagamento',
  }),
})

export type CheckoutFormData = z.infer<typeof checkoutSchema>
