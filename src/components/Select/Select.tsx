import { cva, cx, VariantProps } from 'class-variance-authority'
import { forwardRef, SelectHTMLAttributes } from 'react'

const select = cva(
  cx(
    'appearance-none',
    'bg-[length:9px_5px]',
    'bg-[right_1rem_center]',
    'bg-[url(/images/select-caret.svg)]',
    'bg-base-100',
    'bg-no-repeat',
    'border-base-300',
    'border',
    'cursor-pointer',
    'pl-4',
    'pr-10',
    'py-2',
    'rounded-md',
    'select-none',
    'text-left',
    'text-sm',
    'w-full',

    'focus:border-primary',
    'focus:outline',
    'focus:outline-4',
    'focus:outline-primary/10',

    'dark:bg-[url(/images/dark-select-caret.svg)]',
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

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> &
  VariantProps<typeof select>

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ hasError, ...rest }, ref) => (
    <select className={select({ hasError })} {...rest} ref={ref} />
  ),
)
Select.displayName = 'Select'
