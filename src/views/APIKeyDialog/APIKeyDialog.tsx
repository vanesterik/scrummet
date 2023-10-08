import { cx } from 'class-variance-authority'
import { useForm } from 'react-hook-form'

import { Button, Dialog, FormField, Input, Stack } from '../../components'
import { useGlobalState } from '../../containers'
import { parseError } from '../../utils'

export const APIKeyDialog = () => {
  const { getApiKey, setApiKey } = useGlobalState()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <Dialog isOpen={!getApiKey()}>
      <form onSubmit={handleSubmit(({ apiKey }) => setApiKey(apiKey))}>
        <Stack alignment="right" size="large">
          <Stack size="medium">
            <div className={cx('font-semibold', 'text-lg')}>
              {'Requirements For Usage'}
            </div>
            <div className={cx('text-sm')}>
              {
                'In order to use this app, you will need an OpenAI API key, which you can obtain by visiting the '
              }
              <a
                className={cx('text-primary', 'hover:underline')}
                href="https://openai.com/"
                rel="nofollow noreferrer"
                target="_blank"
              >
                {'OpenAI'}
              </a>
              {' website and registering for an account.'}
            </div>
          </Stack>
          <FormField name="apiKey" error={parseError(errors.apiKey?.message)}>
            <Input
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              id="apiKey"
              hasError={!!errors.apiKey}
              placeholder="OpenAI API key"
              {...register('apiKey', {
                required: 'OpenAI API key is required',
              })}
            />
          </FormField>
          <Button type="submit" variant="primary">
            {'Submit'}
          </Button>
        </Stack>
      </form>
    </Dialog>
  )
}
