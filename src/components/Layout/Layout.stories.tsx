import { cx } from 'class-variance-authority'

import { Layout } from './Layout'

export const Component = () => (
  <Layout>
    <div
      className={cx(
        'bg-base-200',
        'h-full',
        'w-full',
        'rounded-md',
        'dark:bg-dark-base-200',
      )}
    />
  </Layout>
)
