import { useEffect, useState } from 'react'

export const useLocalStorageState = <T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initialValue
  })

  useEffect(() => {
    if (value) localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
