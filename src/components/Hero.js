import React from 'react'
import Button from './Button'

function Hero({toggleIconClose}) {
  return (
    <div className='hero-section' id='home'>
        <div className='hero-content'>
          <div className='headingbx'>
            <h1 className='heading'>Little Lemon</h1>
            <h3 className='sub-heading'>Chicago</h3>
          </div>
            <p className='heading-text'>
              Little Lemon restaurant has a rustic and relaxed atmosphere with
              moderate prices, making it a popular place for a meal any time of the day.
            </p>
            <a href='#reservations' className='hero-button'>
              <Button text="Reserve Table"/>
            </a>
        </div>
    </div>
  )
}

export default Hero