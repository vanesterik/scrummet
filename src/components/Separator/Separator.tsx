import { cva, cx, VariantProps } from 'class-variance-authority'

const separator = cva(cx('border-base-200', 'dark:border-dark-base-200'), {
  variants: {
    size: {
      small: ['my-3'],
      medium: ['my-6'],
      large: ['my-12'],
    },
  },
  defaultVariants: {
    size: 'large',
  },
})

type SeparatorProps = VariantProps<typeof separator>

export const Separator = ({ size }: SeparatorProps) => (
  <hr className={separator({ size })} />
)
