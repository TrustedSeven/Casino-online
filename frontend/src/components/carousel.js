import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'

import image1 from '../assets/carousel1.jpg'
import image2 from '../assets/carousel2.jpg'
import image3 from '../assets/carousel3.jpg'

function Carousell() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;