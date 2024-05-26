import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Testimonials from '../components/Testimonials.jsx/Testimonials';
import Newsletter from '../components/Newsletter/Newsletter';
import Socials from '../components/Socials/Socials';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Home = ({ onGetStartedClick }) => {
  const [title, setTitle] = useState("HOME");
  const navigate = useNavigate();

  // Refs for sections
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  const newsletterRef = useRef(null);
  const socialsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (homeRef.current && scrollPosition < featuresRef.current?.offsetTop) {
        setTitle("HOME");
      } else if (featuresRef.current && scrollPosition < testimonialsRef.current?.offsetTop) {
        setTitle("FEATURES");
      } else if (testimonialsRef.current && scrollPosition < newsletterRef.current?.offsetTop) {
        setTitle("TESTIMONIALS");
      } else if (newsletterRef.current && scrollPosition < socialsRef.current?.offsetTop) {
        setTitle("NEWSLETTER");
      } else if (socialsRef.current && scrollPosition < document.body.scrollHeight) {
        setTitle("SOCIALS");
      } else {
        setTitle("FOOTER");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStartedClick = () => {
    navigate('/signup');
};

  return (
    <div>
      <Navbar title={title} />
      <section id="home" ref={homeRef}><Hero onGetStartedClick={handleGetStartedClick} /></section>
      <section id="features" ref={featuresRef}><Features /></section>
      <section id="testimonials" ref={testimonialsRef}><Testimonials /></section>
      <section id="newsletter" ref={newsletterRef}><Newsletter /></section>
      <section id="socials" ref={socialsRef}><Socials /></section>
      <Footer />
    </div>
  );
}

export default Home;
