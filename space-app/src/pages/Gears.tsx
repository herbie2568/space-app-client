import * as React from "react"
import {useState,useEffect} from 'react';
import axios from 'axios'
import '../App.css';
import {Link, Routes, Route, Router, useNavigate } from 'react-router-dom'
import ShowGears from './ShowGears'
import Nav from './Nav'

const GearPage: React.FC = (props:any) => {
    const [gears, setGears] = useState<[]>([])
    let navigate = useNavigate()


    const getGears = () => {
        axios
        .get('https://space-meteor.herokuapp.com/gear')
        .then(
          (response) => setGears(response.data),
          (err) => console.error(err)
        )
        .catch((error) => console.error(error))
    }

    useEffect(() => {
        getGears()
       }, [])

    return (

        <>
        <Nav/>
        <img className = 'wallpaper' src = 'https://i.imgur.com/ywwncu9.jpg'></img>
        <nav className="shopNavBar">
            <Link className = 'shopLink' to = '/food'>FOOD</Link>
            <Link className = 'shopLink' to = '/gear'>GEAR</Link>
        </nav>

        <h1 className = 'shopHeader'>FEATURED PRODUCTS</h1>

          <div className = 'gearContainer'>
            {gears?.map((gear:any, index)=>{
            return (
                <>
                <div>
                  <Routes>
                    <Route path = '/gear/:id' element = {<ShowGears gear = {gear} gears = {gears}/>}/>
                  </Routes>
                </div>
            <div className = 'gearCard' key = {gear._id} >
            <div onClick = {() => {navigate('/gear/' + gear._id)} } className = 'offBlack'>
            <img  src = {gear.image}></img>
            </div>
            <h3 className = 'foodName'>{gear.name}</h3>

            <h4 className = 'foodPrice'>${gear.price}</h4>
            </div>
            </>
            )
            })
        }
        </div>
        </>
    )
}
export default GearPage
