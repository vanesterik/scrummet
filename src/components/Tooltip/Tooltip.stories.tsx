import { useState } from 'react'

import { Button } from '../Button'
import { Tooltip } from './Tooltip'

export const Hover = () => (
  <Tooltip label="Tooltip" variant="hover">
    <Button>Hover me</Button>
  </Tooltip>
)

export const Click = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Tooltip label="Tooltip" variant={isActive ? 'force' : undefined}>
      <Button onClick={() => setIsActive((value) => !value)}>Click me</Button>
    </Tooltip>
  )
}
