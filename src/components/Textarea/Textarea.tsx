import { cva, cx, VariantProps } from 'class-variance-authority'
import { forwardRef, TextareaHTMLAttributes } from 'react'

const textarea = cva(
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
      size: {
        small: ['h-18'],
        medium: ['h-40'],
        large: ['h-80'],
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
)

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textarea>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ hasError, size, ...rest }, ref) => (
    <textarea className={textarea({ hasError, size })} {...rest} ref={ref} />
  ),
)
Textarea.displayName = 'Textarea'
