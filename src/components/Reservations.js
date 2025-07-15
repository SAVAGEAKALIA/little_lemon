import React, { useEffect } from 'react'
import Button from './Button'
import { useState } from 'react'
import Alert from './Alert'
import { dialogBox } from '../constants'
import { fetchAPI, submitAPI } from '../constants/apiCalls'

const Reservations = ({toggleIconClose, handleAlert}) => {

    const [formData, setFormData] = useState({})
    const [showDialog, setShowDialog] = useState(false)
    const [availableTimes, setAvailableTimes] = useState([])

    const alertMessage = dialogBox.bookingSuccess.text
    const alertColor = dialogBox.bookingSuccess.color

    // useEffect(() => {
    //     if(window.submitAPI){
    //         console.log("API exists")
    //     }
    //     else{
    //         console.log("API was not fetched")
    //     }
    //   }, [])

    // SELECT STATE MANAGEMENT
    const selectedOccassion = [
        { value: 'birthday', label: 'Birthday' },
        { value: 'engagement', label: 'Engagement' },
        { value: 'anniversry', label: 'Anniversary' }
    ]
    const selectedNumber = [
        {value: "2",  label: "2 people"},
        {value: "4",  label: "4 people"},
        {value: "6",  label: "6 people"},
        {value: "8",  label: "8 people"}
    ]
    const selectedLocation = [
        {value: "indoor", label: "Indoor"},
        {value: "Outdoor", label: "Outdoor"}
    ]

    const handleSelectedDate = (e) => {
        const selectedDate = e.target.value
        submitAPI(selectedDate)
        setAvailableTimes(fetchAPI(selectedDate))
        handleChange(e)
    }

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData((prevData) => {
            return({
                ...prevData,
                [name] : value
            })
        } )
        console.log(formData)
    }

    const handleDialog = () => {
        !showDialog && setShowDialog((prev) => !prev) //displays Alert
        // show order summary
        // unmount order summary componnt on button click
        setTimeout(() => {
            setShowDialog((prev) => !prev)
        }, 1000);
    }

    const resetForm = () => {
        setFormData({
            occassion: "",
            time: "",
            number: "",
            location: ""
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        // handleDialog() //Handles Alert message locally
        if (submitAPI(formData)){
            handleAlert(alertMessage, alertColor) //successful
        }
        else{
            handleAlert("Error booking table", "red") //error
        }
         //Handles Alert Message from Parent
        // Submit form to API
    }

  return (
    <>
    {showDialog && <Alert text={alertMessage} color={alertColor}/>}
    <section className='reservations' id='reservations'>
        <h2>Book A Table</h2>
        <div className='rsrv-container'>
            <form className='rsrv-form' onSubmit={handleSubmit}>
                <div className='rsvform-container'>
                    <div className='rsv-input'>
                        <label htmlFor='occassion'>Select Occassion</label>
                        <select name='occassion' onChange={handleChange} id='occassion' required>
                            <option value="">Select Occassion</option>
                            {/* map selectedOccassion array */}
                            {
                                selectedOccassion.map((occassion) => {
                                    return(
                                        <option key={occassion.value} value={occassion.value}>
                                            {occassion.label}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='rsv-input'>
                        <label htmlFor='date'>Select Date</label>
                        <input type='date' id='date' name='date' required onChange={handleSelectedDate}/>
                    </div>
                    <div className='rsv-input'>
                        <label htmlFor='time'>Select Time</label>
                        <select name='time' onChange={handleChange} id='time' required>
                            <option value="">Select Time</option>
                            {
                                availableTimes.map((time) => {
                                    return(
                                        <option key={time} value={time}>
                                            {time}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='rsv-input'>
                        <label htmlFor='number'>Number of people</label>
                        <select name='number' onChange={handleChange} id='number' required>
                            <option value="">Select Number</option>
                            {
                                selectedNumber.map((occassion) => {
                                    return(
                                        <option key={occassion.value} value={occassion.value}>
                                            {occassion.label}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='rsv-input'>
                        <label htmlFor='location'>Select Table location</label>
                        <select name='location' onChange={handleChange} id='location'>
                            {
                                selectedLocation.map((occassion) => {
                                    return(
                                        <option key={occassion.value} value={occassion.value}>
                                            {occassion.label}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className='rsrv-button' onClick={toggleIconClose}>
                    <Button text="Confirm Order" />
                </div>
            </form>
            <div className='open-details'>
                <h3 className='open-head'>OPENING HOURS</h3>
                <div className='open-text'>
                    Little lemon restaurant works round the clock as
                    we strive to always be there for our customers. <br/>
                    We operate from 8am to 10pm on the weekdays, on Saturdays
                    we are open from 9am to 5pm and on Sundays from
                    12noon till 6pm.
                </div>
                <div className='open-days'>
                    <p className='day'>Monday - Friday</p>
                    <p className='time'>8AM - 10AM</p>
                </div>
                <div className='open-days'>
                    <p className='day'>Saturday</p>
                    <p className='time'>9AM - 5PM</p>
                </div>
                <div className='open-days'>
                    <p className='day'>Sunday</p>
                    <p className='time'>12PM - 6PM</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Reservations