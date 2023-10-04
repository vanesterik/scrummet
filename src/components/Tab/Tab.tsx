import { Tab as BaseTab } from '@headlessui/react'
import { cx } from 'class-variance-authority'
import { ComponentProps } from 'react'

type TabProps = Omit<
  ComponentProps<typeof BaseTab>,
  'className' | 'Group' | 'List' | 'Panel' | 'Panels'
>

export const Tab = (props: TabProps) => (
  <BaseTab
    className={cx(
      'border-base-300',
      'border-t-transparent',
      'border-x-transparent',
      'border',
      'cursor-pointer',
      'flex-row',
      'flex',
      'h-8',
      'items-center',
      'outline-none',
      'px-4',
      'relative',
      'rounded-t-lg',
      'select-none',
      'text-base-content/50',
      'text-sm',

      'hover:text-base-content',

      'ui-selected:border-b-transparent',
      'ui-selected:border-t-base-300',
      'ui-selected:border-x-base-300',
      'ui-selected:text-base-content',

      'ui-selected:after:-bottom-px',
      'ui-selected:after:-right-4',
      'ui-selected:after:absolute',
      'ui-selected:after:bg-[url(/images/tab-rounded-br.svg)]',
      'ui-selected:after:content-[""]',
      'ui-selected:after:h-4',
      'ui-selected:after:w-4',
      'ui-selected:after:z-10',
      'ui-selected:after:fill-white',
      'ui-selected:after:text-base-300',

      'ui-selected:before:-bottom-px',
      'ui-selected:before:-left-4',
      'ui-selected:before:absolute',
      'ui-selected:before:bg-[url(/images/tab-rounded-bl.svg)]',
      'ui-selected:before:content-[""]',
      'ui-selected:before:h-4',
      'ui-selected:before:w-4',
      'ui-selected:before:z-10',
      'ui-selected:before:text-base-300',

      'ui-selected:first-of-type:before:hidden',

      'dark:border-dark-base-300',
      'dark:border-t-transparent',
      'dark:border-x-transparent',
      'dark:text-dark-base-content/50',

      'dark:hover:text-dark-base-content',

      'dark:ui-selected:border-b-transparent',
      'dark:ui-selected:border-t-dark-base-300',
      'dark:ui-selected:border-x-dark-base-300',
      'dark:ui-selected:text-dark-base-content',

      'dark:ui-selected:after:bg-[url(/images/dark-tab-rounded-br.svg)]',

      'dark:ui-selected:before:bg-[url(/images/dark-tab-rounded-bl.svg)]',
    )}
    {...props}
  />
)

export const TabGroup = (props: ComponentProps<typeof BaseTab.Group>) => (
  <BaseTab.Group {...props} />
)

export const TabList = (props: ComponentProps<typeof BaseTab.List>) => (
  <BaseTab.List className={cx('flex', 'flex-wrap', 'items-end')} {...props} />
)

export const TabPanel = (props: ComponentProps<typeof BaseTab.Panel>) => (
  <BaseTab.Panel {...props} />
)

export const TabPanels = (props: ComponentProps<typeof BaseTab.Panels>) => (
  <BaseTab.Panels {...props} />
)
