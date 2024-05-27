import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/images/OsumareLogo0124.png'


const FooterContainer = styled.footer`
  background: #e0f7fa;
  padding: 2rem 1rem;
  text-align: center;
  margin: 60px;
  border-radius: 30px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 250px;
`;

const Logo = styled.img`
  width: 100px;
  /* margin-bottom: 1rem; */
`;

const Description = styled.p`
  /* margin-bottom: 1rem; */
  color: #555;
`;

const Address = styled.div`
  margin-bottom: 1rem;
  color: #555;
`;

const Contacts = styled.div`
  color: #555;
`;

const FooterTitle = styled.h3`
  margin-bottom: 1rem;
  color: #333;
`;

const FooterLink = styled.a`
  display: block;
  margin-bottom: 0.5rem;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SocialIcon = styled.a`
  color: #333;
  font-size: 1.5rem;
  &:hover {
    color: #007bff;
  }
`;

const FooterBottom = styled.div`
  margin-top: 2rem;
  color: #666;
`;
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <Logo src={logo} alt="Logo" />
          <Description>
            The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.
          </Description>
          <Address>
            <strong>Address</strong>
            <p>Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharashtra, India.</p>
          </Address>
          <Contacts>
            <strong>Contacts</strong>
            <p>📧 hello@osumare.in</p>
            <p>📞 +91 8459 8762 26</p>
          </Contacts>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Menu</FooterTitle>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Services</FooterLink>
          <FooterLink href="#">Work</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Career</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Social</FooterTitle>
          <SocialIcons>
            <SocialIcon href="#"><FaTwitter /></SocialIcon>
            <SocialIcon href="#"><FaFacebookF /></SocialIcon>
            <SocialIcon href="#"><FaInstagram /></SocialIcon>
            <SocialIcon href="#"><FaYoutube /></SocialIcon>
            <SocialIcon href="#"><FaPinterestP /></SocialIcon>
            <SocialIcon href="#"><FaWhatsapp /></SocialIcon>
          </SocialIcons>
        </FooterColumn>
      </FooterContent>
      <FooterBottom>© 2023 Osumare. All rights reserved.</FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
