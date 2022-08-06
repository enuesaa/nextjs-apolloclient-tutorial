import LinkButton from '@/components/linkbutton'

export default function TopPage() {
  return (
    <>
      <LinkButton pathname={'/locations'} name={'locations'} />
      <LinkButton pathname={'/lazylocations'} name={'lazylocations'} />
    </>
  )
}
