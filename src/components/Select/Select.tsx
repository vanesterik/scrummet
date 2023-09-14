import { cx } from 'class-variance-authority'
import { SelectHTMLAttributes } from 'react'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  hint?: string
  title?: string
}

export const Select = ({
  hint,
  onChange,
  children,
  title,
  value,
}: SelectProps) => (
  <div className={cx('flex', 'flex-col', 'gap-y-2', 'w-full')}>
    {title && <h3 className="font-semibold">{title}</h3>}
    <select
      className={cx(
        'bg-gray-50',
        'rounded-md',
        'w-full',
        'focus:bg-transparent',
      )}
      onChange={onChange}
      value={value}
    >
      {children}
    </select>
    {hint && <span className={cx('text-xs', 'text-gray-400')}>{hint}</span>}
  </div>
)
