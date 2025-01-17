import * as React from 'react'
import {useState} from 'react';
import axios from 'axios'

const Edit = (props:any) => {

let emptyPlanet = { id:props.id, name:'', image:'', description:'', price: '', activity:'', date_found:''}

const [planet, setPlanet] = useState(emptyPlanet)

// const [newName, setNewName] = useState<string>('')
// const [newImage, setNewImage] = useState<string>('')
// const [newDescription, setNewDescription] = useState<string>('')
// const [newPrice, setNewPrice] = useState<string>('')
// const [newDateFound, setNewDateFound] = useState<string>('')
// const [newActivity, setNewActivity] = useState<string>('')

// const handleNewName = (event:any)=>{
// setNewName(event.target.value);
// }

// const handleNewImage = (event:any)=>{
// setNewImage(event.target.value);
// }

// const handleNewDescription = (event:any)=>{
// setNewDescription(event.target.value);
// }

// const handleNewPrice = (event:any)=>{
// setNewPrice(event.target.value);
// }

// const handleNewActivity = (event:any)=>{
// setNewActivity(event.target.value);
// }

// const handleNewDateFound = (event:any)=>{
// setNewDateFound(event.target.value);
// }

// const handleEdit = (planetData:any)=>{
//     axios
//         .put(
//             `https://space-meteor.herokuapp.com/planets/${planetData?._id}`,
//             {
//                 name: newName,
//                 image: newImage,
//                 description: newDescription,
//                 ticket_price: newPrice,
//                 activity: newActivity,
//                 date_found: newDateFound
//             }
//         )
//         .then(()=>{
//             axios
//                 .get('https://space-meteor.herokuapp.com/planets')
//                 .then((response)=>{
//                 props.setPlanets(response.data)
//                 })
//         })
// }
const handleChange = (event:any) => {
    setPlanet({ ...planet, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event:any) => {
    event.preventDefault()
    props.handleUpdate(planet)
  }


return (
    <>

    <>
      <details>
        <summary>EDIT PLANET</summary>
        <form id = 'edit' onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <input className = 'addInput'
            placeholder='NAME...'
            type="text"
            name="name"
            value={planet.name}
            onChange={handleChange}
          />
          <label htmlFor="image"></label>
          <input className = 'addInput'
            placeholder='IMAGE...'
            type="text"
            name="image"
            value={planet.image}
            onChange={handleChange}
          />
             <label htmlFor="description"> </label>
          <input className = 'addInput'
            placeholder='DESCRIPTION...'
            type="text"
            name="description"
            value={planet.description}
            onChange={handleChange}
          />
             <label htmlFor="price"></label>
          <input className = 'addInput'
            placeholder='TICKET PRICE...'
            type="text"
            name="price"
            value={planet.price}
            onChange={handleChange}
          />
           <label htmlFor="date_found"></label>
          <input className = 'addInput'
            placeholder='YEAR...'
            type="text"
            name="date_found"
            value={planet.date_found}
            onChange={handleChange}
          />
           <label htmlFor="activity"></label>
          <input className = 'addInput'
            placeholder='ACTIVITY...'
            type="text"
            name="activity"
            value={planet.activity}
            onChange={handleChange}
          />
          <input className = 'addInput' type = 'text' placeholder = 'WEATHER...' onChange={handleChange}/><br/>
          <input className = 'addInput' type = 'text' placeholder = 'DISTANCE FROM SUN...' onChange={handleChange}/><br/>
          <input className = 'addInput' type = 'text' placeholder = 'DAY LENGTH IN HOURS...' onChange={handleChange}/><br/>
          <input className = 'submitButton' type="submit" value = 'SUBMIT CHANGES'/>
        </form>
      </details>
    </>
            {/* <h2>Edit Item</h2>
                <form className = 'addForm' onSubmit={(e) => {e.preventDefault();handleEdit(props.planets)}}>
                <input type = 'text' className = 'addInput' placeholder = 'Planet Name...' onChange={handleNewName}/><br/>
                <input className = 'addInput' type = 'text' placeholder = 'Image URL...' onChange={handleNewImage}/><br/>
                <input className = 'addInput' type = 'text' placeholder = 'Item Description...' onChange={handleNewDescription}/><br/>
                <input className = 'addInput' type = 'text' placeholder = 'Ticket Price...' onChange={handleNewPrice}/><br/>
                <input className = 'addInput' type = 'text' placeholder = 'Year discovered...' onChange={handleNewDateFound}/><br/>
                <input className = 'addInput' type = 'text' placeholder = 'Activity...' onChange={handleNewActivity}/><br/>
                <input className = 'submitButton' type = 'submit' value = 'Edit Item' />
                </form>  */}
            </>
)

}

export default Edit
