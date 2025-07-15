import React from 'react'

function Card({img, meal, price, details, }) {
  return (
    <div className='card'>
      <div className='cardImg-bx'>
        <img className='cardImg' alt="meal (change to name of food)" src={img} />
      </div>
      <div className='card-details'>
        <div className='card-heading'>
          <h4 className='meal'>{meal}</h4>
          <h4 className='price'>{price}</h4>
        </div>
        <div className='card-body'>
          <p>{details}</p>
        </div>
        <div className='meal-order'>
          <p>Order a delivery</p>
        </div>
      </div>
    </div>
  )
}

export default Card