import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import sleep from "sleep-promise";


function Cardsbook({data:{image,name , description}}) {
  
  return (
    <div  className="rounded mb-3 " style={{ width:"18rem" , marginRight:"0.5rem ", border:"1px solid black"}}>
        <img style={{ width:"18rem" }} src={image} alt={name}/>
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Cardsbook