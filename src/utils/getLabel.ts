import labels from '../data/labels.json'

type Replacement = boolean | number | string

export const getLabel = (
  key: keyof typeof labels,
  replacements?: Record<string, Replacement>,
) => {
  const source = labels[key]

  if (replacements) {
    return Object.entries(replacements).reduce(
      (result, [key, value]) =>
        result.replace(new RegExp(`{${key}}`, 'g'), `${value}`),
      source,
    )
  }

  return source
}
