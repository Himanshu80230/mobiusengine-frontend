import React from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <Logo>MobiusEngine</Logo>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Address</FooterTitle>
          <FooterText>1875 Mission St Ste 103 #450</FooterText>
          <FooterText>San Francisco, CA 94103</FooterText>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Contact</FooterTitle>
          <FooterText>finance@mobiusengine.ai</FooterText>
          <FooterText>650-889-6026</FooterText>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Socials</FooterTitle>
          <SocialLink href="#">
            <FaLinkedin size={24} />
          </SocialLink>
        </FooterColumn>
      </FooterContent>
      
      <FooterBottom>
        <FooterText>© 2023 Mobiusservices LLC</FooterText>
        <FooterLinks>
          <FooterLink href="#">Terms & Conditions</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
        </FooterLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #101010;
  color: #FEFEFE;
  padding: 80px 0 40px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Logo = styled.div`
  font-family: 'Sora', sans-serif;
  font-weight: 600;
  font-size: 24px;
  color: #FEFEFE;
`;

const FooterTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const FooterText = styled.p`
  font-size: 16px;
  color: #A0A0A0;
`;

const SocialLink = styled.a`
  color: #A0A0A0;
  transition: color 0.2s;

  &:hover {
    color: #FEFEFE;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #333;
  padding-top: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 24px;
`;

const FooterLink = styled.a`
  color: #A0A0A0;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s;

  &:hover {
    color: #FEFEFE;
  }
`;

export default Footer;
