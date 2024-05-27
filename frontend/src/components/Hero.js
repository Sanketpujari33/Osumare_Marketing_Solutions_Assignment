import React from 'react';
import styled from 'styled-components';
import headerImg from '../assets/vectors/HeaderImage.svg';

const Container = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f8f9fa; 
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #212529; 
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #6c757d; 
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  flex-basis: 50%;
  display: flex;
  margin-top: 26px;
  justify-content: center;
`;

const Image = styled.img`
  position: relative;
  align-items: center;
  width: 70%;
  height: auto;
`;
const HeroContainer = styled.section`
  background-color: #f8f9fa; 
  padding: 5rem 0;
  text-align: center;

  @media (max-width: 768px) { 
    padding: 3rem 0;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: #007bff;
  width: 408px;
  color: white;
  padding: 10px 0;
  border-radius: 32px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3; 
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Hero = () => {
  return (
    <Container>
      <HeroContainer>
        <HeroContent>
          <Title>Elevate <span style={{ color: 'blue' }}>  Real Estate Success </span> with</Title>
          <Title>Osumare's Digital Expertise</Title>
          <Subtitle>Tailored Solutions for Thriving in the Digital Real Estate Landscape</Subtitle>
          <Button>Get started</Button>
        </HeroContent>
        <ImageContainer>
          <Image src={headerImg} alt="Real Estate Hero" />
        </ImageContainer>
      </HeroContainer>
    </Container>
  );
};

export default Hero;