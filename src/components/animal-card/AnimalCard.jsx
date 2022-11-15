import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './animal-card.module.scss'

function AnimalCard(props) {
  const { _id, name, adopted, sex, image } = props.data
  const displayView = props.showViewButton ? true : false

  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img className={styles['img']} variant="top" src={image} />
        <Card.Body>
          <Card.Title>{ name }</Card.Title>
          <Card.Text>{ String(adopted) }</Card.Text>
          <Card.Text>{ sex }</Card.Text>          
        </Card.Body>
        <Card.Body>
          {displayView ? (
            <>
              <Link to={`/animals/${_id}`} className="card-link">View Animal</Link>
              <br/>
            </>
          ) : ""}
          <Link to={`/animals/${_id}/edit`} className='card-link'>EDIT</Link>
          <Card.Link>DELETE</Card.Link>
          <Card.Link>ADOPT</Card.Link>
        </Card.Body>
      </Card>
  )
}

export default AnimalCard
