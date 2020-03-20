import React, {Component} from 'react';
import  Carousel from 'react-bootstrap/Carousel';
import forestImg from '../assets/forrest1.jpg';
import forestImg2  from '../assets/forrest2.jpg';

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={forestImg}
                        alt="Forest image 1"
                    />
                    <Carousel.Caption>
                        <h3>Forest Image</h3>
                        <p>LOrem ipsun dilor es remi od</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={forestImg2}
                        alt="Forest image 2"
                    />
                    <Carousel.Caption>
                        <h3>Forest Image</h3>
                        <p>LOrem ipsun dilor es remi od</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        );
    }
}

export default CarouselBox;