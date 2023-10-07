export const parseError = (error: unknown) =>
  typeof error === 'string' ? error : undefined
