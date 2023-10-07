import { useState } from 'react'

import { Button } from '../Button'
import { Markdown } from '../Markdown'
import { Separator } from '../Separator'
import { Dialog } from './Dialog'

export const Component = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog isOpen={isOpen}>
        <Markdown
          content="# Dialog
Lorem markdownum Proetus Inachides formosa confessus manifesta dubia et
pulchros, unda fronde, cum. Cum armis volucrem putat, sit opem, si glandibus
herbae ut mihi dies."
        />
        <Separator size="medium" />
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Dialog>
    </>
  )
}
