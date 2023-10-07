export const every = (
  // eslint-disable-next-line fp/no-rest-parameters
  ...inputs: Array<boolean | number | string | undefined>
) => inputs.every((input) => input)

export const some = (
  // eslint-disable-next-line fp/no-rest-parameters
  ...inputs: Array<boolean | number | string | undefined>
) => inputs.some((input) => input)

export const noop = () => undefined
