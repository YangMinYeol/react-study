import type {FC} from 'react'

export type ArrowComponenetProps = {
  href: string
  text: string
}

const ArrowComponent: FC<ArrowComponenetProps> = props => {
  const{href, text} = props
  return (
    <li>
      <a href={href}>
        <p>{text}</p>
      </a>
    </li>
  )
}

export default ArrowComponent