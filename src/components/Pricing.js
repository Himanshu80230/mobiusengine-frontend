import React from 'react';
import styled from 'styled-components';

const plans = [
  {
    name: 'Basic',
    price: '$19/mo',
    features: ['5 Projects', 'Basic Support', 'All Core Features']
  },
  {
    name: 'Pro',
    price: '$49/mo',
    features: ['Unlimited Projects', 'Priority Support', 'Advanced Features'],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$99/mo',
    features: ['Unlimited Projects', 'Dedicated Support', 'All Features']
  }
];

const Pricing = () => {
  return (
    <Section id="pricing">
      <SectionTitle>Pricing</SectionTitle>
      <CardsContainer>
        {plans.map((plan, index) => (
          <Card key={index} popular={plan.popular}>
            {plan.popular && <PopularTag>Most Popular</PopularTag>}
            <PlanName>{plan.name}</PlanName>
            <PlanPrice>{plan.price}</PlanPrice>
            <FeaturesList>
              {plan.features.map((feat, idx) => (
                <FeatureItem key={idx}>{feat}</FeatureItem>
              ))}
            </FeaturesList>
            <SelectButton href="#signup">Select Plan</SelectButton>
          </Card>
        ))}
      </CardsContainer>
    </Section>
  );
};

export default Pricing;

const Section = styled.section`
  padding: 80px 40px;
  background-color: #ffffff;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
  color: #0052cc;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  position: relative;
  flex: 1;
  max-width: 300px;
  padding: 20px;
  border: 2px solid #e1e1e1;
  border-radius: 8px;
  background-color: #fafafa;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
  ${props => props.popular && `
    border-color: #0052cc;
  `}
`;

const PopularTag = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #0052cc;
  color: #fff;
  font-size: 0.75rem;
  padding: 5px 10px;
  border-radius: 4px;
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const PlanPrice = styled.p`
  font-size: 1.25rem;
  margin-bottom: 20px;
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: 20px;
`;

const FeatureItem = styled.li`
  margin-bottom: 10px;
  color: #555;
`;

const SelectButton = styled.a`
  display: inline-block;
  background-color: #0052cc;
  color: #fff;
  padding: 10px 25px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #003d99;
  }
`;
