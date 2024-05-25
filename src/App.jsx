import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import Features from './components/Features/Features'
import Testimonials from './components/Testimonials.jsx/Testimonials'
import Newsletter from './components/Newsletter/Newsletter'
import Socials from './components/Socials/Socials'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [title, setTitle] = useState("HOME")

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById('home');
      const features = document.getElementById('features');
      const testimonials = document.getElementById('testimonials');
      const newsletter = document.getElementById('newsletter');
      const socials = document.getElementById('socials');
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (home && scrollPosition < features.offsetTop) {
        setTitle("HOME");
      } else if (features && scrollPosition < testimonials.offsetTop) {
        setTitle("FEATURES");
      } else if (testimonials && scrollPosition < newsletter.offsetTop) {
        setTitle("TESTIMONIALS");
      } else if (newsletter && scrollPosition < socials.offsetTop) {
        setTitle("NEWSLETTER");
      } else if (socials && scrollPosition < document.body.scrollHeight) {
        setTitle("SOCIALS");
      } else {
        setTitle("FOOTER");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <Navbar title={title} />
      <section id="home"><Home /></section>
      <section id="features"><Features /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="newsletter"><Newsletter /></section>
      <section id="socials"><Socials /></section>
      <Footer />
    </div>
  )
}

export default App;
