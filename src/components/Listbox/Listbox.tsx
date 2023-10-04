import { Listbox as BaseListbox } from '@headlessui/react'
import { cx } from 'class-variance-authority'
import { ComponentProps } from 'react'

type ListBoxProps = Omit<
  ComponentProps<typeof BaseListbox>,
  'className' | 'Button' | 'Option' | 'Options'
>

export const Listbox = (props: ListBoxProps) => <BaseListbox {...props} />

export const ListboxButton = (
  props: ComponentProps<typeof BaseListbox.Button>,
) => (
  <BaseListbox.Button
    className={cx(
      'bg-base-100',
      'border-base-300',
      'border',
      'leading-loose',
      'pl-4',
      'pr-10',
      'py-2',
      'relative',
      'rounded-md',
      'text-left',
      'text-sm',

      'after:absolute',
      'after:block',
      'after:border-4',
      'after:border-b-transparent',
      'after:border-t-current',
      'after:border-x-transparent',
      'after:bottom-auto',
      'after:content-[""]',
      'after:left-auto',
      'after:right-4',
      'after:top-[calc(50%-0.15rem)]',

      'focus:outline',
      'focus:outline-1',
      'focus:outline-base-300',
      'focus:outline-offset-2',

      'dark:bg-dark-base-100',
      'dark:border-dark-base-300',
      'dark:focus:outline-dark-base-300',
    )}
    {...props}
  />
)

export const ListboxOption = (
  props: ComponentProps<typeof BaseListbox.Option>,
) => (
  <BaseListbox.Option
    className={cx(
      'px-4',
      'py-2',
      'ui-active:bg-base-200',
      'dark:ui-active:bg-dark-base-200',
    )}
    {...props}
  />
)

export const ListboxOptions = (
  props: ComponentProps<typeof BaseListbox.Options>,
) => (
  <BaseListbox.Options
    className={cx(
      'bg-base-100',
      'border-base-300',
      'border',
      'mt-2',
      'py-2',
      'rounded-md',
      'text-left',
      'text-sm',

      'focus:outline-none',

      'dark:bg-dark-base-100',
      'dark:border-dark-base-300',
    )}
    {...props}
  />
)
