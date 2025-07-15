import React from 'react'
import restaurant from '../assets/img/Mario and Adrian b.png'
import Button from './Button'

function About({toggleIconClose}) {
  return (
    <section className='about-section' id='about'>
      <div className='about-content'>
        <div className='about-text'>
          <h4 className='about-heading'>Welcome to Little Lemon Restaurant</h4>
          <h3 className='about-subhead'>Traditional Chicago Food  To Delight The Whole Family</h3>
          <p className='about-body'>
            Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
            Our chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu
            of 12–15 dishes rotated seasonally.
            <br /><br />
            Little Lemon is owned by two Italian brothers, Mario and Adrian,
            who moved to the United States to establish their unique restaurant.
            Mario strives on his experience as a lead chef in one of the biggest
            restaurants in Italy. Little Lemon goes beyond classic Italian and incorporates
            additional cuisines from the Mediterranean region.
          </p>
        </div>
        <div className='aboutimg-container autoshow'>
          <img className='restaurant-img' width={"100%"} height={"100%"} src={restaurant}></img>
        </div>
      </div>
      <div className='about-button'>
        <a href='#home'><Button text={"Learn More"} /></a>
      </div>
    </section>
  )
}

export default About