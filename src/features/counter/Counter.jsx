import {
  Card,
  Grid,
  Text,
  Button,
  Row,
  Input,
  Col,
  Spacer,
} from '@nextui-org/react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const [incrementAmount, setIncrementAmount] = useState(0)

  const addValue = Number(incrementAmount) || 0

  const handleReset = () => {
    setIncrementAmount(0)
    dispatch(reset())
  }

  return (
    <Grid.Container
      gap={2}
      css={{ minWidth: '100vw' }}
      alignContent="center"
      justify="center"
    >
      <Grid sm={12} md={12} xs={12} alignContent="center" justify="center">
        <Card css={{ mw: '500px' }} isHoverable variant="bordered">
          <Card.Header>
            <Text b>Count: {count} </Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: '$10' }}>
            <Text>Counter example</Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Col>
              <Row justify="space-between" align="center">
                <Button size="sm" onClick={() => dispatch(decrement())}>
                  -
                </Button>
                <Button size="sm" onClick={() => dispatch(increment())}>
                  +
                </Button>
                <Button size="sm" onClick={() => handleReset()}>
                  Reset
                </Button>
              </Row>
              <Spacer y={1} />
              <Row justify="center" align="center">
                <Input
                  onChange={(e) => setIncrementAmount(e.target.value)}
                  type="text"
                  contentRight={
                    <Button
                      size={'xs'}
                      onClick={() => dispatch(incrementByAmount(addValue))}
                    >
                      {' '}
                      Add Amount
                    </Button>
                  }
                />
              </Row>
            </Col>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  )
}
