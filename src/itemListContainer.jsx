import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <img
          className="d-block w-100"         
          src="imgs/2020-toyota-camry-hybrid-red-1600x1200-1.avif"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{props.category1}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="imgs/2023-cadillac-escalade-v-052.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>{props.category2}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="imgs/JP020_001GL.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{props.category3}</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;