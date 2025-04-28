import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Plans from './components/Plans';
import ResumeServices from './components/ResumeServices';
import Footer from './components/Footer';

const AppContainer = styled.div`
  overflow-x: hidden;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <HowItWorks />
      <About />
      <Testimonials />
      <WhyChooseUs />
      <Plans />
      <ResumeServices />
      <Footer />
    </AppContainer>
  );
}

export default App;
