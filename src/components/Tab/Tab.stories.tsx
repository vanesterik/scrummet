import { Tab, TabGroup, TabList } from './Tab'

const values = ['Foo', 'Bar', 'Baz', 'Qux', 'Quux']

export const Component = () => (
  <TabGroup>
    <TabList>
      {values.map((value) => (
        <Tab key={value}>{value}</Tab>
      ))}
    </TabList>
  </TabGroup>
)
