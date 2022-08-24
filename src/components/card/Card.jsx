import React from "react";
import "./card.scss";
const Card = ({ title, text, className, iconClass }) => {
  return (
    <div className={className}>
      <div className='card-background'>
      <i className={iconClass} />
      </div>
      <div className="card-title gradient__text card-text-stile">
        {title}
      </div>
      <div className="card-text card-text-stile">{text}</div>
    </div>
  );
};

export default Card;
