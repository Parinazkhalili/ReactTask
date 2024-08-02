import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
    
function Loading() {
  return (
    // <div className="loader-container">
    //   <div className="loader">Loading...</div>
    // </div>

    <div>
      <RotatingLines  width='100px' height="100px" strokeWidth='3' strokeColor='#959595'/>
    </div>
  );
}

export default Loading;