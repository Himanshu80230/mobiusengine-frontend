import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
    link: "#"
  },
  {
    quote: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
    link: "#"
  },
  {
    quote: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
    link: "#"
  }
];

const Testimonials = () => {
  return (
    <Section>
      <h2>What our clients have to say</h2>
      <TestimonialsContainer>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="p1">{testimonial.quote}</p>
            <TestimonialLink href={testimonial.link}>↗</TestimonialLink>
          </TestimonialCard>
        ))}
      </TestimonialsContainer>
      <MoreLink href="#">More customer testimonials ↗</MoreLink>
    </Section>
  );
};

const Section = styled.section`
  padding: 80px 0;
  text-align: center;
`;

const TestimonialsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 60px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(motion.div)`
  background-color: #FEFEFE;
  border: 1px solid #EBF1FF;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;
`;

const TestimonialLink = styled.a`
  color: #0649E7;
  font-size: 24px;
  text-decoration: none;
  align-self: flex-end;
  transition: color 0.2s;

  &:hover {
    color: #022183;
  }
`;

const MoreLink = styled.a`
  color: #0649E7;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.2s;

  &:hover {
    color: #022183;
    text-decoration: underline;
  }
`;

export default Testimonials;