import * as React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Route, Routes, Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ShowFood = (props:any, fod:any) => {
    const params = useParams()
    const [food, setFood] = useState<any['']>([])
   
    const getFood = () => {
        axios
          .get('https://space-meteor.herokuapp.com/food/')
          .then(
            (response) => setFood(response.data),
            (err) => console.error(err)
          )
          .catch((error) => console.error(error))
      }

      useEffect(() => {
        axios.get('https://space-meteor.herokuapp.com/food/' + params.id)
          .then((response) =>
            setFood(response.data))
      }, []);
    


console.log('suck it bitchass');
console.log(food.name);

    return (
        <>
        <h3>SUCK MY big COCK</h3>
        <img src = {food.image}></img>
        <h1>{food.name}</h1>
        <h2>{food.description}</h2>
        <h3>{food.price}</h3>
        </>
    )
}

export default ShowFood