import type { NextPage } from 'next'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'

const Home: NextPage = () => {
  const client = new ApolloClient({
    uri: 'https://flyby-gateway.herokuapp.com/',
    cache: new InMemoryCache(),
  })

  client
    .query({
      query: gql`
        query GetLocations {
          locations {
            id
            name
            description
            photo
          }
        }
      `,
    })
    .then((result) => console.log(result))

  return <div></div>
}

export default Home
