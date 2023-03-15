import {
  Button,
  Card,
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
} from '@nextui-org/react'
import { useSelector } from 'react-redux'
import PostAuthor from './PostAuthor'
import { selectPostById } from './postsSlice'
import { ReactionButtons } from './ReactionButtons'
import { TimeAgo } from './TimeAgo'
import { useParams } from 'react-router-dom'

export const SinglePostPage = () => {
  const { postId } = useParams()
  const post = useSelector((state) => selectPostById(state, Number(postId)))

  if (!post) {
    return (
      <Container fluid>
        <Card>
          <Card.Header>
            <Text h2>Post not Found!</Text>
          </Card.Header>
        </Card>
      </Container>
    )
  }

  return (
    <Container fluid>
      <Row align="center" justify="center" css={{ marginTop: '$10' }}>
        <Card
          variant="flat"
          isHoverable
          key={post.id}
          css={{ p: '$6', mw: '450px' }}
        >
          <Card.Header>
            <Row align="center" justify="space-between">
              <Text h3>{post.title}</Text>
              <Button flat size={'xs'}>
                Edit Post
              </Button>
            </Row>
          </Card.Header>
          <Card.Body>
            <Text>{post.body}</Text>
          </Card.Body>
          <Card.Footer>
            <Col>
              <Grid>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
              </Grid>
              <Spacer y={1} />
              <Row align="center" justify="center" wrap="wrap">
                <ReactionButtons post={post} />
              </Row>
            </Col>
          </Card.Footer>
        </Card>
      </Row>
    </Container>
  )
}
