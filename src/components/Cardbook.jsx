


import { courses } from '../constants/mockData';

import React, { useState, useEffect } from 'react';
import Loading from './Loading';


import Cardsbook from './Cardsbook';
import 'bootstrap/dist/css/bootstrap.css';


function Cardbook() {

  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  
  if (isLoading) {
    return <Loading />;
  }
 
 
  return (
    <div >
       <ul className='d-md-flex'>
   
        
            {courses.map((course) =>(
           
            <Cardsbook  key={course.id} data={course}/>
              
            ))}
        </ul>
       
    </div>
  )
}

export default Cardbook
