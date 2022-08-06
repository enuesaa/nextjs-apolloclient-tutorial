import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/graph/client'
import '@/styles/globals.scss'
import 'modern-css-reset/dist/reset.min.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
