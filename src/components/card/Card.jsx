import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './card.scss'
const Card = ({title,text,icon}) => {
  return (
    <div className="card">
      <div className="single-card-container">
       <div className="card-background" />
       <div className="card icon">
          <FontAwesomeIcon icon={icon} />
        </div>
       <div className="card-title">
        {title}
       </div>
       <div className="card-text" >
        {text}
       </div> 
      </div> 
    </div>                       

    )
}

export default Card