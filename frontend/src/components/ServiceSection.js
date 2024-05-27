import React from 'react';
import styled from 'styled-components';
import automoviceSEO from '../assets/vectors/icon/automoviveSEO.svg';
import videoMarketing from '../assets/vectors/icon/videoMarkting.svg'
import ppcPrecision from '../assets/vectors/icon/ppcPrecision.svg'
import socialAcceleration from '../assets/vectors/icon/socialAccceleration.svg'
import contentEccellence from '../assets/vectors/icon/contentEccellence.svg'
import webDesign from '../assets/vectors/icon/webDesign.svg'
import dataDriven from '../assets/vectors/icon/dataDriven.svg'
import endToEnd from '../assets/vectors/icon/endToEnd.svg'
const Section = styled.section`
  padding: 4rem 1rem;
  background-color: #f8f9fa;
  text-align: center;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Icon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

const ActionButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 2rem;
  &:hover {
    background-color: #0056b3;
  }
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;

const services = [
  {
    title: 'Automotive SEO',
    description: 'Drive Your Success with Automotive SEO! Our tailored strategies boost online visibility and drive business growth today.',
    icon: automoviceSEO,
  },
  {
    title: 'PPC Precision',
    description: 'Maximize visibility and sky-rocket traffic with meticulously targeted Pay-Per-Click (PPC) campaigns.',
    icon: ppcPrecision
  },
  {
    title: 'Social Acceleration',
    description: 'Engage and influence your audience across multiple social platforms, amplifying your brand presence and connections.',
    icon: socialAcceleration,
  },
  {
    title: 'Content Excellence',
    description: 'Craft compelling, search-engine-optimized content that captivates and engages audiences at all stages of the journey.',
    icon: contentEccellence,
  },
  {
    title: 'Web Design',
    description: 'Transform visions into engaging, high-performance websites with our innovative design and user experience solutions.',
    icon: webDesign,
  },
  {
    title: 'Data-Driven Insights',
    description: 'Leverage data to gain insights, drive decisions, and measure the impact of your marketing strategies.',
    icon: dataDriven
  },
  {
    title: 'End-to-End Solutions',
    description: 'From strategy creation to full-scale implementation, we provide solutions for every step of the journey.',
    icon: endToEnd
  },
  {
    title: 'Video Marketing',
    description: 'Engage audiences through impactful video content. Drive results with YouTube, Facebook, and Compelling Visual Stories.',
    icon: videoMarketing,
  },
];

const ServiceSection = () => {
  return (
    <Section>
      <Container>
        <Header>
          <Title>Our Service Offerings</Title>
          <Subtitle>Strategies that Drive Property Market Excellence</Subtitle>
        </Header>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <Icon src={service.icon} alt={`${service.title} icon`} />
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
        <ActionButton>Get started</ActionButton>
      </Container>
    </Section>
  );
};


export default ServiceSection;
