import {
  Card,
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
} from '@nextui-org/react'
import PostAuthor from './PostAuthor'
import { ReactionButtons } from './ReactionButtons'
import { TimeAgo } from './TimeAgo'
import { Link } from 'react-router-dom'

export const PostExcerpt = ({ post }) => {
  return (
    <Row align="center" justify="center" css={{ marginTop: '$10' }}>
      <Card
        variant="flat"
        isHoverable
        key={post.id}
        css={{ p: '$6', mw: '450px' }}
      >
        <Card.Header>
          <Link to={`post/${post.id}`}>
            <Text h3>{post.title}</Text>
          </Link>
        </Card.Header>
        <Card.Body>
          <Text>{post.body.substring(0, 75)}</Text>
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
  )
}
