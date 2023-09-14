import { cx } from 'class-variance-authority'
import { useState } from 'react'

import { getLabel } from '../../utils'
import { Button } from '../Button'
import { Layout } from '../Layout'
import { Section } from '../Section'
import { Select } from '../Select'
// import { Spinner } from '../Spinner'
import { Tab } from '../Tab'
import { Textarea } from '../Textarea'

export const App = () => {
  const [isSuccess, setIsSuccess] = useState(false)

  if (isSuccess) {
    return (
      <Layout>
        <form
          onReset={(event) => {
            setIsSuccess((value) => !value)
            event.preventDefault()
          }}
          onSubmit={(event) => {
            event.preventDefault()
          }}
        >
          <Section alignment="right">
            <Tab.Group>
              <Tab.List>
                <Tab>{getLabel('tab.update')}</Tab>
                <Tab>{getLabel('tab.preview')}</Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <Textarea />
                </Tab.Panel>
                <Tab.Panel>
                  <article className="prose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </article>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
            <div className={cx('flex', 'flex-row', 'gap-x-2')}>
              <Button intent="secondary">
                {getLabel('form.button.update')}
              </Button>
              <Button type="reset">{getLabel('form.button.reset')}</Button>
            </div>
          </Section>
        </form>
      </Layout>
    )
  }

  return (
    <Layout>
      <form
        className={cx('flex', 'flex-col', 'gap-y-6')}
        onSubmit={(event) => {
          setIsSuccess((value) => !value)
          event.preventDefault()
        }}
      >
        <Section>
          <Select
            hint={getLabel('form.select.hint')}
            title={getLabel('form.select.title')}
          >
            <option value="foo">foo</option>
          </Select>
        </Section>
        <Section alignment="right">
          <Textarea placeholder={getLabel('form.textarea.placeholder')} />
          <Button type="submit">
            {/* <Spinner /> */}
            {/* {getLabel('form.button.loading')} */}
            {getLabel('form.button.submit')}
          </Button>
        </Section>
      </form>
    </Layout>
  )
}
