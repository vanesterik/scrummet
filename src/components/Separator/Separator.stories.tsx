import { cx } from 'class-variance-authority'

import { Separator } from './Separator'

const Element = () => (
  <div
    className={cx(
      'bg-base-200',
      'h-40',
      'w-full',
      'rounded-md',
      'dark:bg-dark-base-200',
    )}
  />
)

export const Component = () => (
  <>
    <Element />
    <Separator />
    <Element />
  </>
)
