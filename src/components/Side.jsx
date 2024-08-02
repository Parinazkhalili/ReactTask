


import { courses } from '../constants/Data';

import SideCard from './SideCard';
import 'bootstrap/dist/css/bootstrap.css';

function Side() {

   
  return (
    <div >
        <ul className='d-md-flex'>
            {courses.map((course) =>(
              <SideCard  key={course.id} data={course}/>
            ))}
        </ul>
       
    </div>
  )
}

export default Side
