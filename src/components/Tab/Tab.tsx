import { Tab as BaseTab } from '@headlessui/react'
import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

// eslint-disable-next-line fp/no-mutating-assign
export const Tab = Object.assign(
  ({ children }: { children?: ReactNode }) => (
    <BaseTab
      className={cx(
        'border-transparent',
        'border',
        'px-4',
        'py-2',
        'rounded-t-md',
        'text-gray-400',
        'translate-y-[1px]',
        'focus-visible:outline-none',
        'hover:text-black',
        'ui-selected:border-b-white',
        'ui-selected:border-gray-300',
        'ui-selected:text-black',
      )}
    >
      {children}
    </BaseTab>
  ),
  {
    Group: BaseTab.Group,
    List: ({ children }: { children?: ReactNode }) => (
      <BaseTab.List className={cx('border-b', 'border-gray-300', 'w-full')}>
        {children}
      </BaseTab.List>
    ),
    Panel: BaseTab.Panel,
    Panels: ({ children }: { children?: ReactNode }) => (
      <BaseTab.Panels className={cx('pt-2', 'w-full')}>
        {children}
      </BaseTab.Panels>
    ),
  },
)
