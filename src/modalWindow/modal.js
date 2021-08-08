import React from 'react';
import ReactDOM from 'react-dom';
import "./modal.css";

export default function Modal({active, setActive}, props) {
    return( 
    <div className={active ? "modalWindow active" : "modalWindow"} onClick={() => {setActive(false)}}>       
        <div className="obratnuj-zvonok" autocomplete="off" onClick = {e => e.stopPropagation()}>
        <div className="card" key = {props.id}>       
          <div className="card-image">
              {/* {img[item.id-1]} */}
          </div>
          <div className="card-title">
            {props.title}
          </div>
          <div className="card-description">
            {props.description} 
          </div>
          </div>
        </div> 
    </div>   
    )
}