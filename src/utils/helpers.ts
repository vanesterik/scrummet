export const every = (
  ...inputs: Array<boolean | number | string | undefined>
) => inputs.every((input) => input)

export const some = (...inputs: Array<boolean | number | string | undefined>) =>
  inputs.some((input) => input)

export const noop = () => undefined
