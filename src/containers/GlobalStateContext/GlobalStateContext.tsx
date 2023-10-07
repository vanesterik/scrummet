import { createContext, ReactNode, useContext } from 'react'

import { useLocalStorageState } from '../../hooks'
import { noop } from '../../utils'

type GlobalStateContextProps = {
  getApiKey: () => string | undefined
  setApiKey: (apiKey: string) => void
}

const GlobalStateContext = createContext<GlobalStateContextProps>({
  getApiKey: noop,
  setApiKey: noop,
})

type GlobalStateProviderProps = {
  children?: ReactNode
}

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const [apiKey, setApiKey] = useLocalStorageState<string | undefined>(
    'apiKey',
    undefined,
  )

  return (
    <GlobalStateContext.Provider
      value={{
        getApiKey: () => apiKey,
        setApiKey,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}

export const useGlobalState = () => useContext(GlobalStateContext)
