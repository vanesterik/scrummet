import { Select } from './Select'

const values = [
  'Foo',
  'Bar',
  'Baz',
  'Qux',
  'Quux',
  'Corge',
  'Grault',
  'Garply',
  'Waldo',
  'Fred',
  'Plugh',
  'Xyzzy',
  'Thud',
]

const Template = ({ hasError = false }: { hasError?: boolean }) => (
  <Select hasError={hasError}>
    {values.map((value) => (
      <option key={value} value={value}>
        {value}
      </option>
    ))}
  </Select>
)

export const Idle = () => <Template />
export const WithError = () => <Template hasError />
