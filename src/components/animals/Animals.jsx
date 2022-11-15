import React, { useEffect, useState} from 'react'
import Card from '../animal-card/AnimalCard'
import styles from './animals.module.scss'

function Animals(props) {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch('http://localhost:8000/api/v1/animals')
      const data = await res.json()

      setAnimals(data)
    }

    fetchApi()
  }, [])

  const animalCards = animals.map((animal) => (<Card key={animal._id} data={animal} showViewButton={true} />))

  return (
    <div className={styles['animals-container']}>
      <h1>Animals</h1>
      <div className='d-flex flex-row justify-content-center'>
        { animalCards }
      </div>
    </div>
  )
}

export default Animals
