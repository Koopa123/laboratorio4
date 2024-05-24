import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import Gorras from './data/gorras.json'
const feather = require('feather-icons');

const Main = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
      navigate("/detalle/" + slug);
  }

  return <main className='primary'>
      <Carousel>
          {
              Gorras.map(it => {
                  return (<Carousel.Item onClick={(e) => {
                      e.preventDefault(); handleClick(it.slug)
                  }}>
                      <div className='caja'> <img className='w-100 dark-image' src={it.picture}></img> </div>
                      <Carousel.Caption>
                          <h3>{it.name}</h3>
                          <p>{it.description}</p>
                          <button className="btn secondary">Ver detalle</button>
                      </Carousel.Caption>
                  </Carousel.Item>);
              })
          }
      </Carousel>
  </main>;
}

export default Main;