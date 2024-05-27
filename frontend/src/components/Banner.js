import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/vectors/directing-the-arrow-up.svg';
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  background-color: #f8f9fa;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 1rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #0056b3;
  }
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  @media (max-width: 768px) {
    padding: 0;
    margin-top: 1rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
const Banner = () => {
  return (
    <Section>
      <Container>
        <ImageContainer>
          <Image src={heroImage} alt="Hero Image" />
        </ImageContainer>
        <TextContainer>
          <Title>Real Estate-Focused Digital Mastery</Title>
          <Subtitle>Unlock the Potential of Digital Real Estate Excellence</Subtitle>
          <Description>
            At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market.
          </Description>
          <Button>Get started</Button>
        </TextContainer>
      </Container>
    </Section>
  );
};



export default Banner;
