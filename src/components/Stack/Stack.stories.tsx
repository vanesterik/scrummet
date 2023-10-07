import { cx } from 'class-variance-authority'

import { Stack } from './Stack'

const Element = () => (
  <div
    className={cx(
      'bg-base-200',
      'h-40',
      'w-40',
      'rounded-md',
      'dark:bg-dark-base-200',
    )}
  />
)

const Template = ({
  orientation,
  size,
}: {
  orientation: 'horizontal' | 'vertical'
  size: 'small' | 'medium' | 'large'
}) => (
  <Stack orientation={orientation} size={size}>
    <Element />
    <Element />
    <Element />
  </Stack>
)

export const HorizontalSmall = () => (
  <Template orientation="horizontal" size="small" />
)
export const HorizontalMedium = () => (
  <Template orientation="horizontal" size="medium" />
)
export const HorizontalLarge = () => (
  <Template orientation="horizontal" size="large" />
)
export const VerticalSmall = () => (
  <Template orientation="vertical" size="small" />
)
export const VerticalMedium = () => (
  <Template orientation="vertical" size="medium" />
)
export const VerticalLarge = () => (
  <Template orientation="vertical" size="large" />
)
