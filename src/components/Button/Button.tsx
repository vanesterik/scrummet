import { cva, cx, type VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'

const button = cva(
  cx(
    'cursor-pointer',
    'flex-row',
    'flex',
    'font-semibold',
    'gap-x-2',
    'rounded-md',
    'select-none',
    'focus:outline',
    'focus:outline-1',
    'focus:outline-base-300',
    'focus:outline-offset-2',
    'dark:focus:outline-dark-base-300',
  ),
  {
    variants: {
      variant: {
        primary: [
          'bg-primary',
          'text-primary-content',
          'hover:bg-primary-focus',
          'dark:bg-dark-primary',
          'dark:text-dark-primary-content',
          'dark:hover:bg-dark-primary-focus',
        ],
        secondary: [
          'bg-secondary',
          'text-secondary-content',
          'hover:bg-secondary-focus',
          'dark:bg-dark-secondary',
          'dark:text-dark-secondary-content',
          'dark:hover:bg-dark-secondary-focus',
          'dark:hover:border-dark-secondary-focus',
        ],
        ghost: [
          'bg-transparent',
          'text-secondary-content',
          'hover:bg-secondary-focus',
          'dark:bg-transparent',
          'dark:text-dark-secondary-content',
          'dark:hover:bg-dark-secondary-focus',
        ],
        link: [
          'bg-transparent',
          'text-base-content',
          'hover:opacity-80',
          'dark:bg-transparent',
          'dark:text-dark-base-content',
        ],
      },
      size: {
        small: ['px-3', 'py-2', 'text-xs'],
        medium: ['px-4', 'py-3', 'text-sm'],
        large: ['px-6', 'py-4', 'text-md'],
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'medium',
    },
  },
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>

export const Button = ({
  size,
  variant,
  // eslint-disable-next-line fp/no-rest-parameters
  ...rest
}: ButtonProps) => <button className={button({ size, variant })} {...rest} />
