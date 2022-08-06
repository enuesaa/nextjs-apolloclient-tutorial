import type { NextPage } from 'next'
import { useQuery, gql } from '@apollo/client';

const Home: NextPage = () => {
  const {loading, error, data} = useQuery(gql`
    query GetLocations {
      locations {
        id
        name
        description
        photo
      }
    }
  `)
  console.log(data)

  return <div></div>
}

export default Home
