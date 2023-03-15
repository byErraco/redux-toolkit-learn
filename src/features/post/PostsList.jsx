import {
  Card,
  Col,
  Container,
  Grid,
  Loading,
  Row,
  Spacer,
  Text,
} from '@nextui-org/react'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddPostForm } from './AddPostForm'
import { PostExcerpt } from './PostExcerpt'
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from './postsSlice'
export const PostsList = () => {
  const dispatch = useDispatch()

  const posts = useSelector(selectAllPosts)
  const postStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  let content
  if (postStatus === 'loading') {
    content = <p>"Loading..."</p>
  } else if (postStatus === 'succeeded') {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date))
    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ))
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>
  }

  return (
    <Container fluid css={{ p: '$10' }} alignContent="center" justify="center">
      <Row align="center" justify="center">
        <Text h1>Post List</Text>
        {/* <Spacer x={5} /> */}
        {/* <AddPostForm /> */}
      </Row>
      <Spacer y={1} />
      <Col>{content}</Col>
    </Container>
  )
}
