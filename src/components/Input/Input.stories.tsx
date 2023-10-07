import { Input } from './Input'

const Template = ({ hasError = false }: { hasError?: boolean }) => (
  <Input hasError={hasError} placeholder="Placeholder" />
)

export const Idle = () => <Template />
export const WithError = () => <Template hasError />
