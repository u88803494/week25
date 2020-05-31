import React, { useState } from 'react';
import { Jumbotron, Carousel, Container, Row, Col, Image, ProgressBar } from 'react-bootstrap';
import './about.css';
import avator from '../../images/avator.png'

const Percentage = () => {
  const [percent, setPercent] = useState(0)

  const handleAdd = () => {
    if (percent !== 100) setPercent(percent + 10)
  };

  return (
    <ProgressBar animated now={percent} onKeyDown={handleAdd} tabIndex="-1" />
  );
}

const About = () => (
  <div className="about">
    <Jumbotron>
      <h1 className="about__title">maxime quas veniam</h1>
      <pre className="about__content">
        {`
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Omnis alias harum voluptatem nostrum vero mollitia cum,
          voluptas neque praesentium provident quasi, obcaecati enim consequatur illo.
          Hic autem minus aperiam velit.
          Ducimus corrupti iusto officia aperiam eius ad neque sit minima ut
          nostrum aliquideaque qui maxime quas veniam doloremque quaerat repellendus esse,
          rem dolorum tempora perspiciatis impedit?
          Possimus omnis pariatur et quia eum molestiae, sint unde,
          reprehenderit recusandae consequuntur iusto eos quis ipsum veritatis,
          tempore deleniti totam sunt nisi a!
          `}
      </pre>
    </Jumbotron>
    <Percentage />
    <Container>
      <Row>
        <Col xs={6} md={4}> {/* import to src only */}
          <Image src={avator} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={avator} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={avator} thumbnail />
        </Col>
      </Row>
    </Container>

    <div className="carousel">
      {/* should limit size */}
      <h1>作品輪播</h1>
      <Carousel className="carousel__content">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/YK1x04c.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/vqvtTgW.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/ze7iutQ.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  </div >
);


export default About;
