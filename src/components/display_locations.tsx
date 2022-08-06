import { useQuery } from '@apollo/client'
import { GET_LOCATIONS } from '@/graph/query'

const Location = ({ data }: any) => {
  const {name, description, overallRating} = data

  return (
    <li>
      <h3>{name}</h3>
      <p>description: {description}</p>
      <p>rating: {overallRating}</p>
    </li>
  )
}

export default function DisplayLocations() {
  const { loading, data, refetch } = useQuery(GET_LOCATIONS)

  if (loading) return (<p>Loading...</p>)

  return (
    <>
      <button onClick={() => refetch()}>refetch</button>
      <ul>
        {data.locations.map((location: any) => <Location key={location.id} data={location} />)}
      </ul>
    </>
  )
}
