import React from 'react';
import styled from 'styled-components';
import expertImage from '../assets/vectors/weareExpert.svg';
import visual from '../assets/vectors/icon/visual.svg';
import competitor from '../assets/vectors/icon/competitor.svg';
import targeted from '../assets/vectors/icon/Targeted.svg';
import market from '../assets/vectors/icon/Market.svg';

const Section = styled.section`
  padding: 4rem 1rem;
  background-color: #fff;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FeatureCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

const FeatureContent = styled.div`
  text-align: left;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.25rem;
`;

const FeatureDescription = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  @media (max-width: 1024px) {
    margin-top: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const features = [
  {
    title: 'Market Trends Analysis',
    description: 'Predictive insights to guide real estate strategies.',
    icon: market
  },
  {
    title: 'Targeted Buyer Persona',
    description: 'Understand and connect with your ideal property buyers.',
    icon: targeted
  },
  {
    title: 'Competitor Insights',
    description: 'Stand out in the property market with informed strategies.',
    icon: competitor
  },
  {
    title: 'Visual Content Appeal',
    description: 'Captivate buyers with appealing visuals and immersive experiences.',
    icon: visual
  },
];

const NavigatingSection = () => {
  return (
    <Section>
      <Container>
        <TextContainer>
          <Title>Navigating Real Estate's Digital Landscape</Title>
          <Subtitle>Insights for Real Estate Marketing Advantage</Subtitle>
          <FeaturesList>
            {features.map((feature, index) => (
              <FeatureCard key={index}>
                <Icon src={feature.icon} alt={`${feature.title} icon`} />
                <FeatureContent>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureContent>
              </FeatureCard>
            ))}
          </FeaturesList>
        </TextContainer>
        <ImageContainer>
          <Image src={expertImage} alt="Expert Image" />
        </ImageContainer>
      </Container>
    </Section>
  );
};


export default NavigatingSection;
