import React, { useState } from 'react';
import styled from 'styled-components';
import Image1 from '../assets/images/Tabish.png';
import Image2 from '../assets/images/NitinPujari.jpg';
import Image3 from '../assets/images/girl.jpeg';
import Image4 from '../assets/images/Image.jpeg';
import leftArrow from '../assets/vectors/icon/leftArrow.svg';
import rightArrow from '../assets/vectors/icon/rightArrow.svg';


const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 50px 0;
background-color: #f5f5f5;
@media (max-width: 768px) {
  max-width: fit-content;
}
`;

const Avater = styled.img`
width: 50px;
height: 50px;
margin: 2px;
border-radius: 52%;
`

const Heading = styled.div`
text-align: center;
margin-bottom: 50px;

h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  font-size: 1.25rem;
  color: #666;
}
`;
const HeadingProfile = styled.span`
display: flex;
flex-direction: row;
/* justify-content: space-between; */
align-items: center;
padding: 0px;
width: 397px;
height: 80px;
`
const TestimonialContainer = styled.div`
display: flex;
width: 80%;
max-width: 1000px;
background-color: #fff;
border-radius: 10px;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
overflow: hidden;

@media (max-width: 768px) {
  flex-direction: column;
  max-width: 100%;
}
`;


const ImageContainer = styled.div`
width: 50%;
height: 300px;
margin: auto;
margin-left: 20px;
background-size: cover;
background-position: center;

img {
  width: 100%;
  height: 100%;
  object-position: center;
  border-radius: 10px;
}

@media (max-width: 768px) {
  width: 100%;
  height: 200px;
}
`;

const ContentContainer = styled.div`
padding: 30px;
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
@media (max-width: 768px) {
  width: 100%;
}
`;

const Quote = styled.p`
font-size: 1.25rem;
line-height: 1.5;
margin-bottom: 20px;

span {
  font-size: 2rem;
}
`;

const Name = styled.p`
font-weight: bold;
font-size: 1.1rem;
color: #333;
`;

const Navigation = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
width: 80%;
max-width: 1000px;
`;

const Button = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
outline: none;
opacity: ${props => (props.disabled ? 0.5 : 1)};

.left {
  border-color: transparent transparent #333 transparent;
}
.right {
  border-color: transparent transparent #333 transparent;
}

&:hover {
  .arrow {
    transform: scale(1.2);
  }
}
`;

const WhatOurPharma = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: Image1,
      name: 'Tablsh khen',
      quote: `Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.`
    },
    {
      image: Image2,
      name: 'Nitin Pujari',
      quote: `Osumare has been a true partner in helping us achieve our marketing goals. Their team is incredibly talented and responsive.`
    },
    {
      image: Image3,
      name: 'Papa Ki Pari',
      quote: `I was impressed with Osumare's ability to understand our specific needs and develop a customized marketing plan that delivered results.`
    },
    {
      image: Image4,
      name: 'John Smith',
      quote: `I was impressed with Osumare's ability to understand our specific needs and develop a customized marketing plan that delivered results.`
    }
  ];

  const handleNext = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <Wrapper>
      <Heading>
        <h2>What Our Pharma Partners Say</h2>
        <p>Driving Transformations, One Brand at a Time</p>
      </Heading>
      <TestimonialContainer>
        <ImageContainer>
          <img src={slides[activeSlide].image} alt="Testimonial" />
        </ImageContainer>
        <ContentContainer>
          <HeadingProfile>
            <Avater src={slides[activeSlide].image} alt="profile" ></Avater>
            <Name>{slides[activeSlide].name}</Name>
          </HeadingProfile>
          <Quote>
            <span>"</span>
            {slides[activeSlide].quote}
            <span>"</span>
          </Quote>
        </ContentContainer>
      </TestimonialContainer>
      <Navigation>
        <Button onClick={handlePrev} disabled={activeSlide === 0}>
          <img className="arrow left" src={leftArrow} alt="Previous" />
        </Button>
        <Button onClick={handleNext} disabled={activeSlide === slides.length - 1}>
          <img src={rightArrow} className="arrow right" alt="Next" />
        </Button>
      </Navigation>
    </Wrapper>
  );
};


export default WhatOurPharma;