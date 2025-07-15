import React from 'react'
import FeedbackCard from './FeedbackCard'
import { userReview } from '../constants'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function Testimonials() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1440, min: 920 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 920, min: 0 },
      items: 1,
    }
  }

  return (
    <section className='testimonials-section'>
      <h2>Testimonials</h2>
      <div className='testimonials'>
        <Carousel responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        containerClass="fbcards-carousel"
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        >
        {
          userReview.map((user, index) => {
            return(
            <FeedbackCard title="review-cards" key={index} img={user.img} date={user.date}
            review={user.review} name={user.name} bio={user.bio} style={user.name === 'Precious Ndukwu' ? 'smalltext' : ''} />
          )})
        }
        </Carousel>
      </div>
      {/* <div className='fbcards-container'>
      {
        userReview.map((user, index) => {
          return(
          <FeedbackCard title="review-cards" key={index} img={user.img} date={user.date}
          review={user.review} name={user.name} bio={user.bio} />
        )})
      }
      </div> */}
    </section>
  )
}

export default Testimonials