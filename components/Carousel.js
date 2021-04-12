import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Carousel1(){

    return (
        <Carousel
            autoPlay={true}
            showArrows={false}
            showIndicators={false}
            showThumbs={false} 
            swipeable={true} 
            interval={5000}
            stopOnHover={false}
        >
                <div>
                    <img src="https://picsum.photos/1200/300" />
                </div>
                <div>
                    <img src="https://picsum.photos/1200/301" />
                </div>
                <div>
                    <img src="https://picsum.photos/1200/302" />
                </div>
            </Carousel>
    )
}