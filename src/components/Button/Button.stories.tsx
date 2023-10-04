import { Button } from './Button'

const variants = ['primary', 'secondary', 'ghost', 'link'] as const

const Template = ({ size }: { size: 'small' | 'medium' | 'large' }) => (
  <div className="flex flex-row gap-x-4">
    {variants.map((variant) => (
      <Button key={variant} size={size} variant={variant}>
        {variant}
      </Button>
    ))}
  </div>
)

export const Small = () => <Template size="small" />
export const Medium = () => <Template size="medium" />
export const Large = () => <Template size="large" />
