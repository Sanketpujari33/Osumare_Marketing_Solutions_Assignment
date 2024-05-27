import React from 'react';
import styled from 'styled-components';
import effective from '../assets/vectors/icon/Effective.svg';
import conversion from '../assets/vectors/icon/conversion.svg';
import trustBuilding from '../assets/vectors/icon/trustBuilding.svg';
import mobileFirst from '../assets/vectors/icon/mobileFirst.svg';

const DrivingPropertySection = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const FeaturesContainer = styled.div`
  display: grid;
  margin-left: 50px;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Feature = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 2rem;
  padding: 1rem;
  flex: 1 1 calc(50% - 2rem);
  max-width: calc(100% - 1rem);
  text-align: center;

  @media (max-width: 768px) {
    flex: 1 1 calc(100% - 2rem);
    max-width: calc(100% - 2rem);
  }
`;

const FeatureIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-top: 1rem;
`;

const FeatureDescription = styled.p`
  margin-top: 0.5rem;
  color: #555;
`;

const OurExpertise = () => {
  const features = [
    {
      icon: effective,
      title: 'Effective CTAs',
      description: ' See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.'
    },
    {
      icon: conversion,
      title: 'Conversion-Optimized Landing Pages',
      description: 'Explore a case study where our landing page optimization increased property lead conversion rates by 30%.'
    },
    {
      icon: trustBuilding,
      title: 'Trust Building with Social Proof',
      description: 'Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project.'
    },
    {
      icon: mobileFirst,
      title: 'Mobile-First Success:',
      description: ' Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.'
    },
  ];

  return (
    <DrivingPropertySection>
      <SectionTitle>Our Expertise In Action</SectionTitle>
      <FeaturesContainer>
        {features.map((feature, index) => (
          <Feature key={index}>
            <FeatureIcon src={feature.icon} alt={`${feature.title} icon`} />
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </Feature>
        ))}
      </FeaturesContainer>
    </DrivingPropertySection>
  );
};

export default OurExpertise;
