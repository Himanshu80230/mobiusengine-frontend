import React from 'react';
import styled from 'styled-components';

const integrationsData = [
  { name: 'Slack', logo: 'https://via.placeholder.com/100x50?text=Slack' },
  { name: 'Zapier', logo: 'https://via.placeholder.com/100x50?text=Zapier' },
  { name: 'Google', logo: 'https://via.placeholder.com/100x50?text=Google' },
  { name: 'AWS', logo: 'https://via.placeholder.com/100x50?text=AWS' },
  { name: 'Salesforce', logo: 'https://via.placeholder.com/100x50?text=Salesforce' }
];

const Integrations = () => {
  return (
    <Section id="integrations">
      <SectionTitle>Integrations</SectionTitle>
      <LogosContainer>
        {integrationsData.map((partner, index) => (
          <Logo key={index} src={partner.logo} alt={partner.name} />
        ))}
      </LogosContainer>
    </Section>
  );
};

export default Integrations;

const Section = styled.section`
  padding: 60px 40px;
  background-color: #f0f8ff;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
  color: #0052cc;
`;

const LogosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const Logo = styled.img`
  max-width: 120px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;
