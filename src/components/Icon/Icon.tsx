import { cva, VariantProps } from 'class-variance-authority'

const icon = cva(['font-icon', 'text-2xl'], {
  variants: {
    name: {
      copy: "before:content-['a']",
      github: "before:content-['f']",
      monitor: "before:content-['b']",
      moon: "before:content-['c']",
      sliders: "before:content-['d']",
      sun: "before:content-['e']",
    },
  },
})

type IconProps = VariantProps<typeof icon> & {
  className?: string
}

export const Icon = ({ className, name }: IconProps) => (
  <span className={icon({ className, name })} />
)
