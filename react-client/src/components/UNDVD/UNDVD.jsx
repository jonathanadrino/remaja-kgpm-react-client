import React from "react";

const UNDVD = () => {
  return (
    <div className="my-5">
      <div className='d-flex justify-content-center align-items-center bg-dark ' >
        <div style={{width: '50%', height: '100%'}} className='px-3 bg-dark'>
            <div className="d-flex justify-content-end">
            <h1 style={{color:'white', fontFamily: 'Lato', fontWeight: 'bold'}}> <span style={{fontStyle: 'italic'}}>UNDVD</span> | UNDIVIDED WORSHIP</h1>
            </div>
            <div className="d-flex justify-content-end">
            <h1 style={{color:'white', fontFamily: 'Lato'}}>NATAL REMAJA KGPM</h1>
            </div>
            <div className="d-flex justify-content-end">
            <h1 style={{color:'white', fontFamily: 'Lato'}}>04 DESEMBER 2022</h1>
            </div>
        </div>
        <div style={{backgroundColor: '#d2bda8'}} className=''>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Undivided_worship_wikipedia.jpg/1024px-Undivided_worship_wikipedia.jpg" alt="" style={{width: '50vw', objectFit: 'contain'}} /> 
        </div>
      </div>
    </div>
  );
};

export default UNDVD;
