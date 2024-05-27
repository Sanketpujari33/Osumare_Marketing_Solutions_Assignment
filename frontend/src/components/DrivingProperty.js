import React from 'react';
import styled from 'styled-components';
import ctaIcon from '../assets/images/call_to_action.png';
import landingPageIcon from '../assets/images/landing_Page.png';
import socialProofIcon from '../assets/images/socialProof.png';
import mobileFriendlyIcon from '../assets/images/Mobile_Friendly.png';

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
  /* margin-left: 50px; */
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

const DrivingProperty = () => {
  const features = [
    {
      icon: ctaIcon,
      title: 'Call-to-Action Optimization',
      description: 'Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.'
    },
    {
      icon: landingPageIcon,
      title: 'Landing Page Efficiency',
      description: 'Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.'
    },
    {
      icon: socialProofIcon,
      title: 'Social Proof Utilization',
      description: 'Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action.'
    },
    {
      icon: mobileFriendlyIcon,
      title: 'Mobile-Friendly Experience',
      description: 'With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.'
    },
  ];

  return (
    <DrivingPropertySection>
      <SectionTitle>Driving Property Inquiries to Conversions</SectionTitle>
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

export default DrivingProperty;
