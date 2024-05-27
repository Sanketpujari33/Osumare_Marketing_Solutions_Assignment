import React from 'react';
import { styled } from 'styled-components';
import houseImage from '../assets/vectors/houseImage.svg';

const DrivingPropertyContainer = styled.section`
  padding: 50px 0;
  background-color: #f8f8f8;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
  @media (max-width: 768px) {
    margin: auto;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) {
    margin: auto;
    flex-direction: column;
    align-items: center;
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
const TextContainer = styled.div`
  text-align: left;
  max-width: 600px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const GetStartedButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const DrivingProperty = () => {
  return (
    <DrivingPropertyContainer>
      <Container>
        <Header>
          <Title>Driving Property Inquiries to Conversions</Title>
          <Subtitle>Streamlined Strategies for Real Estate Success</Subtitle>
        </Header>
        <Content>
          <ImageContainer>
            <Image src={houseImage} alt="House" />
          </ImageContainer>
          <TextContainer>
            <Title>Optimized Path to Property Purchase</Title>
            <Subtitle>
              In the dynamic realm of real estate, the journey from a property
              inquiry to a successful conversion demands a well-crafted
              approach. At Osumare, we specialize in guiding potential
              buyers through this journey seamlessly, maximizing
              inquiries-turned-conversions with expert strategies.
            </Subtitle>
            <GetStartedButton>Get Started</GetStartedButton>
          </TextContainer>
        </Content>
      </Container>
    </DrivingPropertyContainer>
  );
};

export default DrivingProperty;