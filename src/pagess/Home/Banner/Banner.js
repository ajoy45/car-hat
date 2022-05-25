import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from"../../../Images/Banner/banner1.jpg";
import banner2 from"../../../Images/Banner/banner2.jpg";
import banner3 from"../../../Images/Banner/banner3.jpg"

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item>
                <img
                    className=" w-100 vh-100 d-block"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Marcidies car for Everyone</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className=" w-100 vh-100 d-block"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Pajaru Model car for Enjoy</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className=" w-100 vh-100 d-block"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Silicon Car for my Favourite</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;