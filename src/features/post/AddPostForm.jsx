import React, { useState } from 'react'
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Textarea,
  Grid,
} from '@nextui-org/react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewPost } from './postsSlice'
// import { postAdded } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const users = useSelector(selectAllUsers)

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)
  const onAuthorChanged = (e) => setUserId(e.target.value)

  const [visible, setVisible] = React.useState(false)
  const handler = () => setVisible(true)

  const dispatch = useDispatch()

  const closeHandler = () => {
    setVisible(false)
    console.log('closed')
  }

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === 'idle'
  // const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  const handleSubmitPost = () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        dispatch(addNewPost({ title, body: content, userId })).unwrap()
        setTitle('')
        setContent('')
        setUserId('')
      } catch (error) {
        console.error('Failed to save the post', err)
      } finally {
        setAddRequestStatus('idle')
        setVisible(false)
      }
    }
    // if (title && content) {
    //   dispatch(addNewPost(title, content, userId))
    //   setTitle('')
    //   setContent('')
    // }
    // setVisible(false)
  }

  return (
    <div>
      <Button auto onPress={handler}>
        Create Post
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Add new{' '}
            <Text b size={18}>
              Post
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Title"
            onChange={onTitleChanged}
          />
          <Grid>
            <Text h5>Author:</Text>
            <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
              <option value=""></option>
              {usersOptions}
            </select>
          </Grid>
          <Textarea
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Content"
            onChange={onContentChanged}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={handleSubmitPost} disabled={!canSave}>
            Add Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
