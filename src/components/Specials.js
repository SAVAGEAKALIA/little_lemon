import React, { useEffect, useState } from 'react'
import Button from './Button'
import Card from './Card'
import { cardInfo } from '../constants'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function Specials({toggleIconClose}) {

    const calculateNumcards = () => {
        if (window.innerWidth >= 1100){
            return 3
        }
        else if (window.innerWidth < 1100 && window.innerWidth >= 560){
            return 2
        }
        else if (window.innerWidth < 560) {
            return 1
        }
    }
    const [numCards, setNumCards] = useState(calculateNumcards)

    // state to duplicate card and re-order card
    // state that would be mapped over

    useEffect(() => {
        const handleResize = () => {
            setNumCards(calculateNumcards())
        }
        // console.log(numCards)
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    },
    [window.innerWidth])

    //
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1100 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1100, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 1
        }
      };

    // create two arrays:
    // Duplicate card in array1
    // Array 2 would contain starting index of the content of array 1,
    // depending on the viewwport
    // set loop timer to alter the posisions of Array 1 so that the contents
    // of array 2 changes dynamically
    // Array 2 would be mapped over

    return (
        <section className='specials-section' id='menu'>
            <div className='specials-content'>
                <div className='specials-heading'>
                    <h3>Specials</h3>
                    <Button text={"Online Menu"} />
                </div>
                <div className='specials-carousel'>
                    <Carousel responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    >
                    {
                        cardInfo.map((card, index) => {
                            return(
                                <Card key={index} img={card.img} meal={card.meal}
                                price={card.price} details={card.details} />
                            )
                        })
                    }
                    </Carousel>
                </div>
                <div className='smobile-btn'>
                    <Button text={"Online Menu"} />
                </div>
            </div>
        </section>
    )
}

export default Specials