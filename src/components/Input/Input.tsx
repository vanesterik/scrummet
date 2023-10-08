import { cva, cx, VariantProps } from 'class-variance-authority'
import { forwardRef, InputHTMLAttributes } from 'react'

const input = cva(
  cx(
    'bg-base-100',
    'border-base-300',
    'border',
    'px-4',
    'py-2',
    'rounded-md',
    'text-sm',
    'w-full',

    'focus:border-primary',
    'focus:outline',
    'focus:outline-4',
    'focus:outline-primary/10',

    'dark:bg-dark-base-100',
    'dark:border-dark-base-300',

    'dark:focus:border-dark-primary',
    'dark:focus:outline-dark-primary/10',
  ),
  {
    variants: {
      hasError: {
        true: ['border-error', 'dark:border-dark-error'],
      },
    },
  },
)

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof input>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError, ...rest }, ref) => (
    <input className={input({ hasError })} {...rest} ref={ref} />
  ),
)
Input.displayName = 'Input'
