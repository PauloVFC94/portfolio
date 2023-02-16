import React from 'react';
import './card.css';

function Card(props) {
const { title, image, link } = props;  
  return(
    <div className="card-div">
        <div className="card-img-div">
            <img src={ image } alt={ title } className="card-img"/>
        </div>
        <div className="card-text-div">
            <a href={ link }>
                <p className="card-text">
                    { title }
                </p>
            </a>
        </div>
    </div>
  );
}

export default Card;