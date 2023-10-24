import React from 'react'
import ThinkCraft from '../../Assets/projects/Screenshot 2023-10-24 130801.png'
import Egoft from '../../Assets/projects/Screenshot 2023-10-24 171002.png'

import { Card, Col, ListGroup, Row } from 'react-bootstrap'

function Project2() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        
    <Col xs={4} md={2} className='tech-icons' >

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ThinkCraft} />
      <Card.Body>
      <Card.Title style={{ color: 'black' }}>Think Craft</Card.Title>
      <Card.Text style={{ color: 'black' }}>
      An educational analysis website for self learners secured using JWT authentication. 
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Git Link</Card.Link>
        <Card.Link href="https://think-craft.vercel.app">Live Link</Card.Link>
      </Card.Body>
    </Card>
    
    </Col>


    <Col xs={4} md={2} className='tech-icons' >

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Egoft} />
  <Card.Body>
  <Card.Title style={{ color: 'black' }}>Ego.ft</Card.Title>
  <Card.Text style={{ color: 'black' }}>
  ego.ft is  a cloth selling platform with enhanced security with Session and cookie

    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="#">Git Link</Card.Link>
    <Card.Link href="https://ego-ft.onrender.com">Live Link</Card.Link>
  </Card.Body>
</Card>

</Col>


    
    
  </Row>
  )
}

export default Project2
