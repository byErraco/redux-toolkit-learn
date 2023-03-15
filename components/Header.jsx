import { Link as LinkR } from 'react-router-dom'
import { Navbar, Button, Link, Text, useTheme } from '@nextui-org/react'
import { AddPostForm } from '../src/features/post/AddPostForm'

export default function Header() {
  const { isDark } = useTheme()

  return (
    <Navbar shouldHideOnScroll isBordered={isDark} variant="sticky">
      {/* <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          ACME
        </Text>
      </Navbar.Brand> */}
      <Navbar.Content hideIn="xs" variant="underline">
        {/* <Navbar.Link href="#">Features</Navbar.Link> */}
        <Navbar.Link isActive as={LinkR} to={'/'}>
          Home
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        {/* <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link> */}
        <Navbar.Item>
          <AddPostForm />
          {/* <Button auto flat as={Link} href="#">
            Sign Up
          </Button> */}
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  )
}
