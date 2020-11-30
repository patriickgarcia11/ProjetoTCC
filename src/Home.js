import React,{ useState } from 'react';
import Mapa from './Mapa';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Col, Row} from 'reactstrap';
import { Maps, Graficos } from './styles';
import slide01 from './Photos/img-1.jpg';
import slide02 from './Photos/img-2.jpg';
import slide03 from './Photos/img-3.jpg';
import Listcoviddiario from './Lista-diaria';
import Grafico from './grafico'; 
import Previsoes from './previsoes_grafico';
  
  const items = [
    {
      src: slide01,
      altText: 'Saúde e Mapeamento',
      caption: 'Saúde e Mapeamento'
    },
    {
      src: slide02,
      altText: 'Mantenha Suas Mãos Higienizadas',
      caption: 'Mantenha Suas Mãos Higienizadas'
    },
    {
      src: slide03,
      altText: 'Lave Bem Suas Mascaras',
      caption: 'Lave Bem Suas Mascaras'
    }
  ];
  
  const Home = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (

       <CarouselItem
          className="custom-tag"
          tag="div"
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
       >
       <img src={item.src} alt={item.altText} />
       <CarouselCaption  captionHeader={item.caption} />
       </CarouselItem>
        
      );
    });
  
    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 840px;
                background: black;
                text-align: center;
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>

        {/* Chamda Mapa */}
        <section>
        <Maps>
          <h2>Mapa De São Paulo</h2>
        </Maps>
        <Mapa/>
        </section>
        <Listcoviddiario />
        <section>
        <Graficos>
          <h3>Graficos</h3>
        </Graficos>
        </section>
        <Row>
        <Col xs="6"><Grafico /></Col>
        <Col xs="6"><Previsoes /></Col>
        </Row>
      </div>
    );
  }

export default Home;