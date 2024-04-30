import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      
      <Carousel.Item>
        <img src= "https://crehana-blog.imgix.net/media/filer_public/94/50/9450d035-34c7-492f-adc0-a3414e0a1168/king-koopa.jpg?auto=format&q=50" className='imagen' />
      </Carousel.Item>
      
      <Carousel.Item>
        <img src= "https://m.media-amazon.com/images/I/41MYdYVbVXL._AC_.jpg" className='imagen'/>       
      </Carousel.Item>

      <Carousel.Item>
        <img src= "https://neweracap.pe/80815-superlarge_default/Gorro-New-York-Yankees-MLB-59Fifty-Dark-Green.jpg" className='imagen'  />
      </Carousel.Item>

    </Carousel>
  );
}

export default UncontrolledExample;