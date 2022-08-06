import { useQuery } from '@apollo/client'
import { GET_LOCATIONS } from '@/graph/query'

export default function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  // @ts-ignore
  return data.locations.map(({ id, name, description, overallRating }) => (
    <div key={id}>
      <h3>{name}</h3>
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <p>rating: {overallRating}</p>
      <br />
    </div>
  ))
}
