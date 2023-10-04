import { useState } from 'react'

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from './Listbox'

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

export const Component = () => {
  const [selectedValue, setSelectedValue] = useState(values[0])

  return (
    <Listbox value={selectedValue} onChange={setSelectedValue}>
      <ListboxButton>{selectedValue}</ListboxButton>
      <ListboxOptions>
        {values.map((value) => (
          <ListboxOption key={value} value={value}>
            {value}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
