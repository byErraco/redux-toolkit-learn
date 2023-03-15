import { Button, Row } from '@nextui-org/react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😲',
  heart: '❤️',
  rocket: '🚀',
  coffe: '☕',
}

export const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <Button
        key={name}
        type="button"
        size={'xs'}
        onPress={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </Button>
    )
  })

  return <Row>{reactionButtons}</Row>
}
