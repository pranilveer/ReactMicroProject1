import React from "react";
import './App.css'

const Card1= ({cardHolderName, cardNumber, expMonth, expYear }) =>{
    return (
        <div className="card1-div">
        <div className="card-number">{cardNumber}</div>
        <div className="name-date-div">
        <div className="cardholder-name">{cardHolderName}</div>
        <div className="expiry-date">{expMonth}/{expYear}</div>
        </div>
      </div>
    );
}

export default Card1;