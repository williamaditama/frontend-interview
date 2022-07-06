import React from 'react'
import { Card } from 'react-bootstrap'

export default function ListItem({title}: any) {
  return (
    <Card style={{margin: "8px"}}>
      <Card.Body>
        {title}
      </Card.Body>
    </Card>
  )
}
