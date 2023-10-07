import { cx } from 'class-variance-authority'
import ReactMarkdown from 'react-markdown'

type MarkdownProps = {
  content: string
}

export const Markdown = ({ content }: MarkdownProps) => (
  <ReactMarkdown
    className={cx(
      'max-w-none',
      'prose',
      'prose-base',
      'w-full',
      'dark:prose-invert',
    )}
  >
    {content}
  </ReactMarkdown>
)
