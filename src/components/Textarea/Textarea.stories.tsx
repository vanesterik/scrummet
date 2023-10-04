import { useState } from 'react'

import { Textarea, TextareaWithCopyButton } from './Textarea'

const Template = ({
  isInvalid = false,
  size,
}: {
  isInvalid?: boolean
  size?: 'small' | 'medium' | 'large'
}) => {
  const [value, setValue] = useState('')

  return (
    <Textarea
      isInvalid={isInvalid}
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
export const WithInvalidation = () => <Template isInvalid />

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
