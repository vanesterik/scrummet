import { cva, cx, VariantProps } from 'class-variance-authority'
import { TextareaHTMLAttributes, useEffect, useState } from 'react'

import { getLabel } from '../../utils'
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

    'focus:outline',
    'focus:outline-1',
    'focus:outline-base-300',
    'focus:outline-offset-2',

    'dark:bg-dark-base-100',
    'dark:border-dark-base-300',
    'dark:focus:outline-dark-base-300',
  ),
  {
    variants: {
      isInvalid: {
        true: ['border-error'],
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

export const Textarea = ({
  isInvalid,
  onChange,
  placeholder,
  size,
  value,
}: TextareaProps) => (
  <textarea
    className={textarea({ isInvalid, size })}
    onChange={onChange}
    placeholder={placeholder}
    value={value}
  />
)

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
                navigator.clipboard
                  .writeText(`${value}`)
                  .then(() => setIsCopied(true))
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
