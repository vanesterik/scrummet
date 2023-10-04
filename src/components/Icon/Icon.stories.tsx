import { cx } from 'class-variance-authority'

import { Icon } from './Icon'

const names = ['copy', 'github', 'monitor', 'moon', 'sliders', 'sun'] as const

export const Component = () => (
  <div className={cx('grid', 'grid-cols-4', 'gap-4')}>
    {names.map((name) => (
      <div className={cx('flex', 'flex-row', 'gap-x-2')} key={name}>
        <Icon name={name} />
        <span>{name}</span>
      </div>
    ))}
  </div>
)
