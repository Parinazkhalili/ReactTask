import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


function AnimalCard({data:{name , job}}) {
  return (
    <div  className="rounded mb-3 py-3 " style={{ width:"18rem" , marginRight:"0.5rem ", border:"4px solid rgb(211 213 215)", backgroundColor:"rgb(211 213 215)"}}>
        
        <h3>{name}</h3>
        <h6>my name is{name}</h6>
        <p>{job}</p>
    </div>
  )
}

export default AnimalCard