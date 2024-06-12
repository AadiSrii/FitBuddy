import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const Home = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-20"
          style={{ width: "1519px", height: "600px" }}
          src="https://www.fitbuddy.co.in/images/about-page/AiAssisted.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Some description for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          style={{ width: "1519px", height: "600px" }}
          src="https://www.fitbuddy.co.in/images/about-page/TrainerAssisted.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Some description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-20"
          style={{ width: "1519px", height: "600px" }}
          src="https://www.fitbuddy.co.in/images/about-page/AiAssisted.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Some description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
