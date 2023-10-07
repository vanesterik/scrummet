import { cx } from 'class-variance-authority'
import { PropsWithChildren } from 'react'

import { some } from '../../utils'

type FieldsetProps = PropsWithChildren<{
  error?: string
  hint?: string
  name: string
  label?: string
}>

export const FormField = ({
  children,
  error,
  hint,
  label,
  name,
}: FieldsetProps) => (
  <div className={cx('flex', 'flex-col', 'gap-y-2', 'w-full')}>
    {label && (
      <label
        className={cx('font-semibold', 'leading-none', {
          ['text-error']: !!error,
        })}
        htmlFor={name}
      >
        {label}
      </label>
    )}
    {some(error, hint) && (
      <span className={cx('text-xs', !!error && 'text-error')}>
        {error || hint}
      </span>
    )}
    {children}
  </div>
)
