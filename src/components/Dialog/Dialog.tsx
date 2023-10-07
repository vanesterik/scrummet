import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

type DialogProps = {
  children?: ReactNode
  isOpen?: boolean
}

export const Dialog = ({ children, isOpen }: DialogProps) => {
  if (!isOpen) return null

  return (
    <dialog
      className={cx(
        'bg-black/30',
        'bottom-0',
        'fixed',
        'grid',
        'h-full',
        'inset-0',
        'items-center',
        'justify-items-center',
        'left-0',
        'm-0',
        'max-h-none',
        'max-w-none',
        'overflow-y-hidden',
        'overscroll-contain',
        'p-0',
        'right-0',
        'top-0',
        'w-full',
        'z-50',
      )}
    >
      <div
        className={cx(
          'bg-base-100',
          'rounded-lg',
          'col-start-1',
          'row-start-1',
          'w-11/12',
          'max-w-lg',
          'max-h-[calc(100vh-5rem)]',
          'overscroll-contain',
          'overflow-y-auto',
          'p-6',
        )}
      >
        {children}
      </div>
    </dialog>
  )
}
