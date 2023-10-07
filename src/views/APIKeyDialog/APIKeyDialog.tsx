import { useForm } from 'react-hook-form'

import {
  Button,
  Dialog,
  FormField,
  Input,
  Markdown,
  Stack,
} from '../../components'
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
          <Markdown
            content="## Requirements for usage
In order to use this app, you will need an OpenAI API key, which you can obtain by visiting the [OpenAI](https://openai.com/) website and registering for an account."
          />
          <FormField name="apiKey" error={parseError(errors.apiKey?.message)}>
            <Input
              id="apiKey"
              hasError={!!errors.apiKey}
              placeholder="OpenAI API key"
              {...register('apiKey', {
                required: 'OpenAI API key is required',
              })}
            />
          </FormField>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Stack>
      </form>
    </Dialog>
  )
}
