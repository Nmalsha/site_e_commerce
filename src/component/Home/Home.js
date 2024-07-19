import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const sliderImages = [
    { id: 1, src: "/images/image1.jpeg" },
    { id: 2, src: "/images/image2.jpeg" },
    { id: 3, src: "/images/image3.jpeg" },
    { id: 4, src: "/images/image4.jpeg" },
  ];
  console.log(sliderImages);
  return (
    <div className="home-container">
      <Carousel>
        {sliderImages.map((image) => (
          <Carousel.Item key={image.id}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={image.alt}
              onError={() => console.log(`Failed to load image: ${image.src}`)}
            />
            <Carousel.Caption>
              <h3>{image.alt}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
