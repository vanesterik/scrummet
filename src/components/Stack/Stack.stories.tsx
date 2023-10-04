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
  alignment,
  orientation,
}: {
  alignment: 'left' | 'right'
  orientation: 'horizontal' | 'vertical'
}) => (
  <Stack alignment={alignment} orientation={orientation}>
    <Element />
    <Element />
    <Element />
  </Stack>
)

export const HorizontalLeft = () => (
  <Template alignment="left" orientation="horizontal" />
)
export const HorizontalRight = () => (
  <Template alignment="right" orientation="horizontal" />
)
export const VerticalLeft = () => (
  <Template alignment="left" orientation="vertical" />
)
export const VerticalRight = () => (
  <Template alignment="right" orientation="vertical" />
)
