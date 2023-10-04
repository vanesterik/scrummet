import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

type LayoutProps = {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <div className={cx('flex', 'flex-col', 'h-screen')}>
    <header className={cx('px-4', 'sm:px-6', 'md:px-8')} />
    <main
      className={cx(
        'flex-auto',
        'max-w-2xl',
        'mx-auto',
        'my-10',
        'px-4',
        'w-full',
        'sm:px-6',
        'md:px-8',
      )}
    >
      {children}
    </main>
    <footer
      className={cx(
        'max-w-5xl',
        'mx-auto',
        'px-4',
        'w-full',
        'sm:px-6',
        'md:px-8',
      )}
    />
  </div>
)
