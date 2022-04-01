import * as React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios'
import '../App.css';
import {Link, Routes, Route, useNavigate,} from "react-router-dom";
import Tickets from './Tickets'
import Nav from './Nav'

const Cart:React.FC = (props:any) => {
    const [cartItems, setCartItems] = useState<any['']>([])
    const getCartItems = () => {
        axios
        .get('https://space-meteor.herokuapp.com/cart')
        .then(
          (response:any) => setCartItems(response.data),
          (err:any) => console.error(err)
        )
        .catch((err:any) => console.error(err))
    }

    const handleDelete = (cartData:any)=>{
        axios
        .delete(`https://space-meteor.herokuapp.com/cart/${cartData._id}`)
          .then(()=>{
            axios
            .get('https://space-meteor.herokuapp.com/cart/')
            .then((response:any)=>{
              setCartItems(response.data)
            })
          })
       }

    useEffect(() => {
        getCartItems()
       }, [])


    return (
        <>
        <Nav />
        <img className = 'wallpaper' src = 'https://i.imgur.com/ywwncu9.jpg'></img>
        <h1 className = 'planetHeader'>CART</h1>
        <ul className = 'cartCat'>
        <li>PRODUCT</li>
        <li>TOTAL</li>
        </ul>
        <div className = 'divideDiv'>
        <div className = 'cartDivider'></div>
        </div>

      <div className = 'cartContainer'>
      {cartItems?.map((cart:any)=>{
        return (
        <div className = {cart.name}  key = {cart._id}>
        <div className = 'cartCard'>
        <div className = 'offBlackCart'>
        <img src = {cart.image}></img></div>
        <div className = 'cartStuff'>
        <h3>{cart.name}</h3>

        <h3>{cart.destination}</h3>
        <h4>{cart.date}</h4>
        <h4>${cart.price}.00</h4>
        </div>
        </div>
        <button onClick = {(event) => {handleDelete(cart)}} >delete</button>
        </div>
         )
      })
    }
    </div>

        </>
    )
}

export default Cart;
