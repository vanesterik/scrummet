import { cva, cx, type VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'

const button = cva(
  cx(
    'border',
    'border-gray-500',
    'flex',
    'flex-row',
    'gap-x-2',
    'items-center',
    'justify-center',
    'min-w-[120px]',
    'px-4',
    'py-2',
    'rounded-md',
  ),
  {
    variants: {
      intent: {
        primary: ['bg-green-600', 'text-white', 'hover:bg-green-700'],
        secondary: ['bg-gray-50', 'hover:bg-gray-100'],
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  },
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>

export const Button = ({ children, intent, type }: ButtonProps) => (
  <button className={button({ intent })} type={type}>
    {children}
  </button>
)
