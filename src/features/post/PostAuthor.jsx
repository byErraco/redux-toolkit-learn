import { Text } from '@nextui-org/react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers)
  const author = users.find((user) => user.id === userId)
  return <Text h5>By {author ? author.name : 'Unknown author'}</Text>
}

export default PostAuthor
