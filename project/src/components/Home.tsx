// src/components/Home.tsx

import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import WhySection from './WhySection';
import HowToSection from './HowToSection';
import SuccessSection from './SuccessSection';
import StatsSection from './StatsSection';
import PortfolioSection from './PortfolioSection';
import PricingSection from './PricingSection';
import FaqSection from './FaqSection';
import TestimonialCarousel from './TestimonialCarousel';
import VideoModal from './VideoModal';
import ContactModal from './ContactModal';
import Particles from './Particles';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      {/* Частицы на заднем плане (если нужны) */}
      <Particles />

      {/* Верхняя навигация */}
      <Navbar />

      {/* Основные секции домашней страницы */}
      <Hero />
      <WhySection />
      <HowToSection />
      <SuccessSection />
      <StatsSection />
      <PortfolioSection />
      <TestimonialCarousel />
      <PricingSection />
      <FaqSection />

      {/* Модальные окна (если они нужны на главной) */}
      <VideoModal />
      <ContactModal />

      {/* Нижний колонтитул */}
      <Footer />
    </>
  );
};

export default Home;
