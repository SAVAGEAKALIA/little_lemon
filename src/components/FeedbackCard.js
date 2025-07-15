import React from 'react'
import star from '../assets/img/5-Star.png'

const FeedbackCard = ({img, date, review, name, bio, title, style}) => {
  return (
    <div title={title} className='fb-card'>
        <div className='fb-header'>
            <div className='star-imgbx'>
                <img src={star} className='star' width={"100"}/>
            </div>
            <div className='fb-date'>{date}</div>
        </div>
        <div className='fb-text'>{review}</div>
        <div className='fb-persona'>
            <div className='fb-imgbx'>
                <img alt='user' src={img} />
            </div>
            <div className='user-details'>
                <div className='fbname'>{name}</div>
                <div className={`fbabout ${style}`}>{bio}</div>
            </div>
        </div>
    </div>
  )
}

export default FeedbackCard