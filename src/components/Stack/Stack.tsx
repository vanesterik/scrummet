import { cva, cx, type VariantProps } from 'class-variance-authority'
import { PropsWithChildren } from 'react'

const stack = cva(cx('flex'), {
  variants: {
    alignment: {
      left: ['items-start'],
      center: ['items-center'],
      right: ['items-end'],
    },
    orientation: {
      vertical: ['flex-col'],
      horizontal: ['flex-row'],
    },
    size: {
      small: ['gap-2'],
      medium: ['gap-4'],
      large: ['gap-8'],
    },
  },
  defaultVariants: {
    alignment: 'left',
    orientation: 'vertical',
    size: 'small',
  },
})

type SectionProps = PropsWithChildren<VariantProps<typeof stack>>

export const Stack = ({
  alignment,
  children,
  orientation,
  size,
}: SectionProps) => (
  <div className={stack({ alignment, orientation, size })}>{children}</div>
)
