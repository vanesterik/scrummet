import { cx } from 'class-variance-authority'

const Template = ({
  className,
  colors,
}: {
  className?: string
  colors: string[][]
}) => (
  <div className={className}>
    <div className={cx('flex', 'flex-col', 'gap-y-4')}>
      {colors.map((set, index) => (
        <div className={cx('flex', 'flex-row', 'gap-x-4')} key={index}>
          {set.map((color, index) => (
            <div className={cx('flex', 'flex-col', 'gap-y-1')} key={index}>
              <div
                className={cx(
                  color,
                  'border',
                  'border-base-300',
                  'rounded-md',
                  'w-60',
                  'h-16',
                  'dark:border-dark-base-300',
                )}
              />
              <span
                className={cx(
                  'text-base-content',
                  'dark:text-dark-base-content',
                )}
              >
                {color.substring(3)}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
)

export const Colors = () => (
  <>
    <Template
      className={cx('dark:hidden')}
      colors={[
        ['bg-base-100', 'bg-base-200', 'bg-base-300', 'bg-base-content'],
        ['bg-primary', 'bg-primary-focus', 'bg-primary-content'],
        ['bg-secondary', 'bg-secondary-focus', 'bg-secondary-content'],
      ]}
    />
    <Template
      className={cx('hidden', 'dark:block')}
      colors={[
        [
          'bg-dark-base-100',
          'bg-dark-base-200',
          'bg-dark-base-300',
          'bg-dark-base-content',
        ],
        ['bg-dark-primary', 'bg-dark-primary-focus', 'bg-dark-primary-content'],
        [
          'bg-dark-secondary',
          'bg-dark-secondary-focus',
          'bg-dark-secondary-content',
        ],
      ]}
    />
  </>
)
