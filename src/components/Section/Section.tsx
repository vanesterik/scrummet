import { cva, cx, type VariantProps } from 'class-variance-authority'
import { PropsWithChildren } from 'react'

const section = cva(cx('flex'), {
  variants: {
    alignment: {
      left: [],
      right: [],
    },
    orientation: {
      vertical: ['flex-col', 'gap-y-2'],
      horizontal: ['flex-row', 'gap-x-2'],
    },
  },
  compoundVariants: [
    {
      alignment: 'left',
      orientation: 'vertical',
      className: 'items-start',
    },
    {
      alignment: 'left',
      orientation: 'horizontal',
      className: 'justify-start',
    },
    {
      alignment: 'right',
      orientation: 'vertical',
      className: 'items-end',
    },
    {
      alignment: 'right',
      orientation: 'horizontal',
      className: 'justify-end',
    },
  ],
  defaultVariants: {
    alignment: 'left',
    orientation: 'vertical',
  },
})

type SectionProps = PropsWithChildren<VariantProps<typeof section>>

export const Section = ({ children, alignment, orientation }: SectionProps) => (
  <section className={section({ alignment, orientation })}>{children}</section>
)
