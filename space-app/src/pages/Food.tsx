import * as React from "react"
import {useState,useEffect} from 'react';
import axios from 'axios'
import '../App.css';
// import ShowFood from './ShowFood'
import {Link, Routes, Route, useNavigate,} from "react-router-dom";
import ShowFood from './ShowFood'
import Nav from './Nav'

const FoodPage: React.FC = (props:any) => {
    const [food, setFood] = useState<[]>([])
    let navigate = useNavigate()

    const getFood = () => {
        axios
        .get('https://space-meteor.herokuapp.com/food')
        .then(
          (response) => setFood(response.data),
          (err) => console.error(err)
        )
        .catch((error) => console.error(error))
    }

    const handleDelete = (foodData:any)=>{
        axios
        .delete(`https://space-meteor.herokuapp.com/food/${foodData._id}`)
          .then(()=>{
            axios
            .get('https://space-meteor.herokuapp.com/food/')
            .then((response)=>{
              setFood(response.data)
            })
          })
        }

        const handleUpdate = (editFood:any) => {
          console.log(editFood)
          axios
            .put('https://space-meteor.herokuapp.com/planets/' + editFood.id, editFood)
            .then((response) => {
              getFood()
            })
        }



        useEffect(() => {
          getFood()
         }, [])




  return (
    <>
    <Nav />
    <img className = 'wallpaper' src = 'https://i.imgur.com/ywwncu9.jpg'></img>
       <nav className = 'shopNavBar'>
            <Link to = '/food'>FOOD</Link>
            <Link to = '/gear'>GEAR</Link>
        </nav>

    <h1 className= 'shopHeader'>FEATURED PRODUCTS</h1>

    <div className = 'foodContainer'>
    {food?.map((fod:any, index)=>{
      return (
        <>
        <div>
          <Routes>
            <Route path = '/food/:id' element = {<ShowFood fod = {fod} food = {food}/>}/>
          </Routes>
        </div>
      <div className = 'foodCard' key = {fod._id + index}>
      <div onClick = {() => {navigate('/food/' + fod._id)} } className = 'offBlack'>
      <img src = {fod.image}></img></div>
      <h3 className = 'foodName'>{fod.name}</h3>
      <h4 className = 'foodPrice'>${fod.price}</h4>

      {/* <button onClick = {(event) => {handleDelete(fod)}} >delete</button> */}
      </div>
      </>
       )
    })
  }
  </div>

    </>
  )
}

export default FoodPage;
