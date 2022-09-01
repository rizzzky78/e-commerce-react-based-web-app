import Carousel from 'react-bootstrap/Carousel';
import '../Main.css';

let thumb = [
    'https://hni.net/public/front/img/slider/15-08-22-xdwl7ZqHI7Eu.png',
    'https://hni.net/public/front/img/slider/15-08-22-Qhw4GCoCIkPt.png',
    'https://hni.net/public/front/img/slider/15-08-22-fReI80Ev3wvq.png'
]

let placeholder = ''

function MyCarousel() {
  return (
    <div className='MyCarousel'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={thumb[0]}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{placeholder}</h3>
          <p>{placeholder}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={thumb[1]}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>{placeholder}</h3>
          <p>{placeholder}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={thumb[2]}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>{placeholder}</h3>
          <p>{placeholder}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default MyCarousel;