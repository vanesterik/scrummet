import { cx } from 'class-variance-authority'
import ReactMarkdown from 'react-markdown'

type MarkdownProps = {
  content: string
}

export const Markdown = ({ content }: MarkdownProps) => (
  <ReactMarkdown className={cx('prose', 'prose-base', 'dark:prose-invert')}>
    {content}
  </ReactMarkdown>
)
