import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

import { getLabel } from '../../utils'
import { Section } from '../Section'
import { Separator } from '../Separator'

type LayoutProps = {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <main
    className={cx(
      'flex',
      'flex-col',
      'gap-y-6',
      'max-w-2xl',
      'mx-auto',
      'my-10',
      'px-4',
      'sm:px-6',
      'md:px-8',
    )}
  >
    <Section>
      <h2 className="font-semibold text-2xl">
        {getLabel('instruction.title')}
      </h2>
      <p className="prose-sm text-gray-400">
        {getLabel('instruction.description')}
      </p>
    </Section>
    <Separator />
    {children}
  </main>
)
