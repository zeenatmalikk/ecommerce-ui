import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Slider.css"
const Slider = () => {
    return (
        <div>
            {/* <Container> */}
            <Carousel>
                <div>
                    <img height='600px' src="https://cdn.dribbble.com/users/1090020/screenshots/16988878/media/14a863ddbec97cbc48f675c6a69cc4df.png?compress=1&resize=1600x1200" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img height='600px' src="https://cdn.dribbble.com/users/1090020/screenshots/9065119/media/2c48e6931a0b2a109237ecc84416c178.png?compress=1&resize=1600x1200" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img height='600px' src="https://cdn.dribbble.com/users/1090020/screenshots/15529401/media/1f2005430cf8d77e0d5ba50c0af9df4e.png?compress=1&resize=1600x1200" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            
            {/* </Container> */}
        </div>
    )
}

export default Slider
