import axios from 'axios'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import {
  Button,
  FormField,
  Markdown,
  Select,
  Spinner,
  Stack,
  Textarea,
  Tooltip,
} from '../../components'
import { useGlobalState } from '../../containers'
import prompts from '../../data/prompts.json'
import { copyToClipboard, parseError } from '../../utils'

type PromptFormInputs = {
  type: string
  content: string
}

export const PromptView = () => {
  const { getApiKey } = useGlobalState()
  const [isLoading, setIsLoading] = useState(false)
  const [hasCopied, setHasCopied] = useState(false)
  const [result, setResult] = useState('')

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    watch,
  } = useForm<PromptFormInputs>()

  const onSubmit: SubmitHandler<PromptFormInputs> = ({ type, content }) => {
    setIsLoading(true)

    const messages = prompts.find((data) => data.type === type)?.messages || []

    axios
      .post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [...messages, { content, role: 'user' }],
        },
        {
          headers: {
            Authorization: `Bearer ${getApiKey()}`,
            'Content-Type': 'application/json',
          },
        },
      )
      .then(({ data }) => {
        setIsLoading(false)
        setResult(data.choices[0].message.content)
      })
  }

  useEffect(() => {
    if (!hasCopied) return

    const timer = setTimeout(() => {
      setHasCopied(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [hasCopied])

  if (result)
    return (
      <Stack alignment="right" size="medium">
        <Markdown content={result} />
        <Stack orientation="horizontal">
          <Tooltip label="Copied!" variant={hasCopied ? 'force' : undefined}>
            <Button
              onClick={() =>
                copyToClipboard(result).then(() => setHasCopied(true))
              }
              variant="secondary"
            >
              {'Copy'}
            </Button>
          </Tooltip>
          <Button
            onClick={() => {
              reset()
              setResult('')
            }}
            variant="primary"
          >
            {'Reset'}
          </Button>
        </Stack>
      </Stack>
    )

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack alignment="right" size="medium">
        <FormField name="type" error={parseError(errors.type?.message)}>
          <Select
            id="type"
            hasError={!!errors.type}
            {...register('type', {
              required: 'Selecting prompt type is required',
            })}
          >
            <option value="">{'Select prompt type ...'}</option>
            {prompts.map(({ label, type }) => (
              <option key={type} value={type}>
                {label}
              </option>
            ))}
          </Select>
        </FormField>
        <PromptInstructions type={watch('type')} />
        <FormField name="content" error={parseError(errors.content?.message)}>
          <Textarea
            id="content"
            hasError={!!errors.content}
            placeholder="Write your statement ..."
            {...register('content', {
              required: 'Submitting statement is required',
            })}
          />
        </FormField>
        <Button disabled={isLoading} variant="primary">
          {isLoading && <Spinner />}
          {'Submit'}
        </Button>
      </Stack>
    </form>
  )
}

type PromptInstructionsProps = {
  type: string
}

const PromptInstructions = ({ type }: PromptInstructionsProps) => {
  const messages = prompts.find((prompt) => prompt.type === type)?.messages
  const instructions = messages
    ?.map((message) => `- ${message.content}`)
    .join('\n')

  if (!instructions) return null

  return <Markdown content={instructions} />
}
