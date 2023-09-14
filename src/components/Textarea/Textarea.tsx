import { cx } from 'class-variance-authority'
import { TextareaHTMLAttributes, useEffect, useState } from 'react'

import { getLabel } from '../../utils'
import { Tooltip } from '../Tooltip'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = ({ onChange, placeholder, value }: TextareaProps) => {
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
      {isCopied && (
        <Tooltip
          className={cx('right-0', 'translate-x-3', '-translate-y-8', 'z-20')}
          label={getLabel('form.textarea.tooltip')}
        />
      )}
      <button
        className={cx(
          'absolute',
          'border',
          'bg-white',
          'border-gray-500',
          'p-2',
          'rounded-bl-md',
          'rounded-tr-md',
          'right-0',
          'text-gray-500',
          'top-0',
          'z-10',
          'hover:text-black',
        )}
        onClick={() => {
          if (value)
            navigator.clipboard
              .writeText(`${value}`)
              .then(() => setIsCopied(true))
        }}
        type="button"
      >
        <svg
          className="w-4 h-4"
          fill="currentColor"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="ContentCopyRoundedIcon"
        >
          <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />
        </svg>
      </button>
      <textarea
        className={cx(
          'bg-gray-50',
          'h-40',
          'font-mono',
          'pr-9',
          'rounded-md',
          'text-sm',
          'w-full',
          'focus:bg-transparent',
        )}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}
