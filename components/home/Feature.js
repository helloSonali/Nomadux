import React from 'react'
import './Feature.css'
import Image from 'next/Image'
function Feature() {
  return (
    <React.Fragment>
    <div className="feature">
    <div className="card">
    <div className="imgbox">
      <img width={80} height={80} src="https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
    </div>
    <div className="content1">
      <h2>keep Smiling</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        doloribus vitae fugit enim repudiandae
      </p>
    </div>
  </div>
  <div className="card">
    <div className="imgbox">
      <img width={80} height={80} src="https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
    </div>
    <div className="content1">
      <h2>keep Smiling</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        doloribus vitae fugit enim repudiandae
      </p>
    </div>
  </div>
  <div className="card">
    <div className="imgbox">
      <img width={80} height={80} src="https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
    </div>
    <div className="content1">
      <h2>keep Smiling</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        doloribus vitae fugit enim repudiandae
      </p>
    </div>
  </div>
     
    </div>
    
    </React.Fragment>
  );
}

export default Feature