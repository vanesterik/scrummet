import { cx } from 'class-variance-authority'

export const Separator = () => (
  <hr className={cx('border-base-300', 'my-12', 'dark:border-dark-base-300')} />
)
