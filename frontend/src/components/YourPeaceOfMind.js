import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;
const Elipse = styled.span`
 position: absolute; 
  width: 576px;
  height: 576px;
  background: #409aff;
  opacity: 0.24;
  filter: blur(167.5px);
  transform: rotate(140.53deg);
  z-index: 0;
  @media (max-width: 768px) {
    width: 376px;
    height: 376px;
  }

  @media (max-width: 480px) {
    width: 276px;
    height: 276px;
  }
`;
const TextContainer = styled.div`
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #555;
`;

const YourPeaceOfMindContainer = styled.section`
  background-color: #f0f0f0;
  padding: 50px 0;
  @media (max-width: 768px) {
    padding: 30px 0;
  }

  @media (max-width: 480px) {
    padding: 20px 0;
  }
`;

const GetStartedButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
  }
`;
const YourPeaceOfMind = () => {
  return (
    <YourPeaceOfMindContainer>
      <Elipse />
      <Container>
        <TextContainer>
          <Heading>Your Peace of Mind</Heading>
          <Paragraph>
            Through our conversion-focused strategies, we ensure that property
            seekers are not just visitors, but engaged prospects ready to make
            their next move in the real estate market.
          </Paragraph>
          <GetStartedButton>Get started</GetStartedButton>
        </TextContainer>
      </Container>
    </YourPeaceOfMindContainer>
  );
};

export default YourPeaceOfMind;