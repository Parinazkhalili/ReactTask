import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";


function SideCard({data:{name , job}}) {
  return (
    <div  className="rounded mb-3 py-3  text-left" style={{ width:"18rem" , marginRight:"0.5rem ", border:"3px solid #b3b8bf",backgroundColor:"rgb(211 213 215)"}}>
        
        <h3><i className="bi bi-person"></i>{name}</h3>
        <h6><i className="bi bi-1-circle fs-4 "></i>my name is{name}</h6>
        <p ><i className="bi bi-book fs-4"></i>{job}</p>
    </div>
  )
}

export default SideCard