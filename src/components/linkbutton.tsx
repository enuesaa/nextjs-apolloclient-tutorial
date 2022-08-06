import Link from 'next/link'
import style from './linkbutton.module.scss'

export default function LinkButton<T extends { pathname: string; name: string }>({ pathname, name }: T) {
  return (
    <Link href={{ pathname: pathname }}>
      <a className={style.button}>{name}</a>
    </Link>
  )
}
