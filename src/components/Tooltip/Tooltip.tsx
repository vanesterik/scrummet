import { cva, cx, VariantProps } from 'class-variance-authority'
import { PropsWithChildren } from 'react'

const tooltip = cva(
  cx(
    'inline-block',
    'relative',
    'text-center',

    'after:-translate-x-1/2',
    'after:absolute',
    'after:block',
    'after:border-4',
    'after:border-b-transparent',
    'after:border-t-dark-base-100',
    'after:border-x-transparent',
    'after:bottom-[calc(100%-0.25rem)]',
    'after:content-[""]',
    'after:left-1/2',
    'after:opacity-0',
    'after:right-auto',
    'after:top-auto',

    'before:-translate-x-1/2',
    'before:absolute',
    'before:bg-dark-base-100',
    'before:bottom-[calc(100%+0.25rem)]',
    'before:content-[attr(data-label)]',
    'before:inline-block',
    'before:left-1/2',
    'before:opacity-0',
    'before:p-2',
    'before:right-auto',
    'before:rounded-lg',
    'before:text-dark-base-content',
    'before:text-xs',
    'before:top-auto',

    'dark:after:border-t-base-100',
    'dark:before:bg-base-100',
    'dark:before:text-base-content',
  ),
  {
    variants: {
      variant: {
        hover: ['hover:after:opacity-100', 'hover:before:opacity-100'],
        force: ['after:opacity-100', 'before:opacity-100'],
      },
    },
  },
)

type TooltipProps = VariantProps<typeof tooltip> &
  PropsWithChildren<{
    label: string
  }>

export const Tooltip = ({ children, label, variant }: TooltipProps) => (
  <div className={tooltip({ variant })} data-label={label}>
    {children}
  </div>
)
