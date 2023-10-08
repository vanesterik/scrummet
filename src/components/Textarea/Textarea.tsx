import { cva, cx, VariantProps } from 'class-variance-authority'
import { forwardRef, TextareaHTMLAttributes, useEffect, useState } from 'react'

import { copyToClipboard, getLabel } from '../../utils'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Tooltip } from '../Tooltip'

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

export const TextareaWithCopyButton = (props: TextareaProps) => {
  const { value } = props
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (!isCopied) return

    const timer = setTimeout(() => {
      setIsCopied(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [isCopied])

  return (
    <div className={cx('relative', 'w-full')}>
      <Textarea {...props} />
      <div className={cx('absolute', 'right-2', 'top-2', 'z-10')}>
        <Tooltip
          label={getLabel('form.textarea.tooltip')}
          variant={isCopied ? 'force' : undefined}
        >
          <Button
            onClick={() => {
              if (value)
                copyToClipboard(`${value}`).then(() => setIsCopied(true))
            }}
            size="small"
            type="button"
            variant="link"
          >
            <Icon name="copy" />
          </Button>
        </Tooltip>
      </div>
    </div>
  )
}
