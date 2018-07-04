import React, { Component } from 'react'
import carousel from 'react-responsive-carousel';

class Carousel extends Component {    
    render() {
        return (
            <Carousel >
                <div>
                    <img src="../Images/one.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="Images/one.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="Images/one.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="Images/one.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>                
            </Carousel>
        );
    }
}

export default Carousel;