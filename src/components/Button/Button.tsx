import { cva, cx, type VariantProps } from 'class-variance-authority'
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

const button = cva(
  cx(
    'border',
    'cursor-pointer',
    'flex-row',
    'flex',
    'font-semibold',
    'gap-x-2',
    'rounded-md',
    'select-none',

    'focus:border-primary',
    'focus:outline',
    'focus:outline-4',
    'focus:outline-primary/10',

    'dark:focus:border-dark-primary',
    'dark:focus:outline-dark-primary/10',
  ),
  {
    variants: {
      variant: {
        primary: [
          'bg-primary',
          'border-primary',
          'text-primary-content',
          'hover:bg-primary-focus',
          'dark:bg-dark-primary',
          'dark:border-dark-primary',
          'dark:text-dark-primary-content',
          'dark:hover:bg-dark-primary-focus',
        ],
        secondary: [
          'bg-secondary',
          'border-secondary',
          'text-secondary-content',
          'hover:bg-secondary-focus',
          'dark:bg-dark-secondary',
          'dark:border-dark-secondary',
          'dark:text-dark-secondary-content',
          'dark:hover:bg-dark-secondary-focus',
          'dark:hover:border-dark-secondary-focus',
        ],
        ghost: [
          'bg-transparent',
          'border-transparent',
          'text-secondary-content',
          'hover:bg-secondary-focus',
          'dark:text-dark-secondary-content',
          'dark:hover:bg-dark-secondary-focus',
        ],
        link: [
          'bg-transparent',
          'border-transparent',
          'text-base-content',
          'hover:opacity-80',
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

type ButtonProps = (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
) &
  VariantProps<typeof button>

export const Button = ({ size, variant, ...rest }: ButtonProps) => {
  if ('href' in rest)
    return (
      <a className={button({ size, variant })} {...rest}>
        {rest.children}
      </a>
    )

  return (
    <button
      className={button({ size, variant })}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  )
}
