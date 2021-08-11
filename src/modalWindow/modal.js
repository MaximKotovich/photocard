import React from 'react';
import ReactDOM from 'react-dom';
import "./modal.css";

export default function Modal({active, setActive, card}) {
  if (card){
  return( 
    <div className={active ? "modalWindow active" : "modalWindow"} onClick={() => {setActive(false)}}>       
        <div className="obratnuj-zvonok" autocomplete="off">
        <div className="card-item" >       
          <div className="image">
           {card.imgUrl}            
          </div>
          <div className="title">
            {card.title}
          </div>
          <div className="description">
            {card.description}
          </div>
          </div>       
        </div> 
    </div>   
    )
  } else { return(null) }
}