import { useLazyQuery } from '@apollo/client'
import { GET_LOCATIONS } from '@/graph/query'
import { Location } from '@/components/locations'

export default function LazyLocations() {
  const [getLocations, { loading, data, refetch }] = useLazyQuery(GET_LOCATIONS)

  if (data?.locations === undefined) return <button onClick={() => getLocations()}>load</button>
  if (loading) return <p>Loading...</p>

  return (
    <>
      <button onClick={() => refetch()}>refetch</button>
      <ul>
        {data.locations.map((location: any) => (
          <Location key={location.id} data={location} />
        ))}
      </ul>
    </>
  )
}
