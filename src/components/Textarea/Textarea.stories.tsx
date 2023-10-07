import { useState } from 'react'

import { Textarea, TextareaWithCopyButton } from './Textarea'

const Template = ({
  hasError = false,
  size,
}: {
  hasError?: boolean
  size?: 'small' | 'medium' | 'large'
}) => {
  const [value, setValue] = useState('')

  return (
    <Textarea
      hasError={hasError}
      onChange={(event) => setValue(event.target.value)}
      placeholder="Placeholder"
      value={value}
      size={size}
    />
  )
}

export const Small = () => <Template size="small" />
export const Medium = () => <Template size="medium" />
export const Large = () => <Template size="large" />
export const WithError = () => <Template hasError />

export const WithCopyButton = () => {
  const [value, setValue] = useState('')

  return (
    <TextareaWithCopyButton
      onChange={(event) => setValue(event.target.value)}
      placeholder="Placeholder"
      value={value}
    />
  )
}
