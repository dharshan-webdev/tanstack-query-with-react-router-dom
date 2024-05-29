import { FC } from 'react'

type NotFoundProps = {
  message?: string
}
const NotFound: FC<NotFoundProps> = ({ message }) => {
  return <div>{message || 'Oops, page not found!'}</div>
}

export default NotFound
