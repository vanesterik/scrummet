import { cx } from 'class-variance-authority'

import { FormField } from './FormField'

const Template = ({ error }: { error?: string }) => (
  <FormField hint="Some type of hint" error={error} label="Label" name="foo">
    <div
      className={cx(
        'bg-base-200',
        'border',
        'h-12',
        'max-w-md',
        'rounded-md',
        'dark:bg-dark-base-200',
        {
          ['border-error']: !!error,
          ['border-transparent']: !error,
        },
      )}
    />
  </FormField>
)

export const Idle = () => <Template />
export const WithError = () => <Template error="Some type of error" />
