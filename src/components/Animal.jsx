


import { courses } from '../constants/Data';

import AnimalCard from './AnimalCard';
import 'bootstrap/dist/css/bootstrap.css';

function Animal() {

   
  return (
    <div >
        <ul className='d-md-flex'>
            {courses.map((course) =>(
              <AnimalCard  key={course.id} data={course}/>
            ))}
        </ul>
       
    </div>
  )
}

export default Animal
