import {createContext, useContext, useEffect, useState} from 'react'

const ConvertKitContext = createContext({})

export const ConvertKitProvider: React.FC = ({children}) => {
  const [loadingSubscriber, setLoadingSubscriber] = useState(true)
  const [subscriber, setSubscriber] = useState()

  const state = {
    loadingSubscriber,
    subscriber,
  }

  useEffect(() => {
    async function run() {
      const subscriber = await fetch(
        '/.netlify/functions/subscriber',
      ).then((res) => res.json())

      console.log({subscriber})
    }

    run()
  }, [])

  return (
    <ConvertKitContext.Provider value={state}>
      {children}
    </ConvertKitContext.Provider>
  )
}

export default function useConvertKit() {
  return useContext(ConvertKitContext)
}
