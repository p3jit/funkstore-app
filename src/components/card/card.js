import React from 'react'
import "./card.css"

function Card(props) {

  console.log(props);
  return (
    <>
        <div className="card text-center fs-4 text-white d-flex">
          <img src={`/assets/productImages/${props.imgName}.jpg`} className="card-img" alt="..."/>
          <div className="card-body">
            <p className="card-text t">{props.title}</p>
          </div>
        </div>
    </> 
  )
}

export default Card