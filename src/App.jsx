import './App.css'
import Counter from './features/counter/Counter'
import { PostsList } from './features/post/PostsList'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import useDarkMode from 'use-dark-mode'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { AddPostForm } from './features/post/AddPostForm'
import { SinglePostPage } from './features/post/SinglePostPage'

function App() {
  const lightTheme = createTheme({
    type: 'light',
    theme: {
      colors: {},
    },
  })

  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: {},
    },
  })

  const darkMode = useDarkMode(true)
  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsList />} />
          <Route path="post">
            <Route index element={<AddPostForm />} />
            <Route path=":postId" element={<SinglePostPage />} />
          </Route>
        </Route>
      </Routes>
    </NextUIProvider>
  )
}

export default App
