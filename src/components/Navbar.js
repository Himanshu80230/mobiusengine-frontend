import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <Nav>
      <Logo>MobiusEngine</Logo>
      <NavLinks>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">About Us</NavLink>
        <NavLink href="#">Plans</NavLink>
        <NavLink href="#">Testimonials</NavLink>
        <NavLink href="#">Privacy Policy</NavLink>
        <NavLink href="#">More</NavLink>
      </NavLinks>
      <CTAButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        Get Started
      </CTAButton>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  backdrop-filter: blur(14px);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  font-family: 'Sora', sans-serif;
  font-weight: 600;
  font-size: 24px;
  color: #0649E7;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #101010;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.2s;

  &:hover {
    color: #0649E7;
  }
`;

const CTAButton = styled(motion.button)`
  background-color: #0649E7;
  color: #FEFEFE;
  border: none;
  padding: 12px 24px;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #022183;
  }
`;

export default Navbar;