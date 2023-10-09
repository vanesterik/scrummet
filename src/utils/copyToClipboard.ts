export const copyToClipboard = async (value: string) => {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(value)
    } else {
      // eslint-disable-next-line fp/no-throw
      throw new Error('writeText not supported')
    }
  } catch (e) {
    const tempTextArea = document.createElement('textarea')
    tempTextArea.setAttribute('value', value)
    document.body.appendChild(tempTextArea)
    tempTextArea.select()
    document.execCommand('copy')
    document.body.removeChild(tempTextArea)
  }
}
