import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Title.css';

const Title = ({ subTitle, title }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Trigger animation when the component comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Listen to scroll event to determine scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  // Update opacity based on scroll direction
  useEffect(() => {
    if (scrollDirection === 'up') {
      controls.set({ opacity: 0.5 }); // Adjust opacity value as needed
    } else {
      controls.set({ opacity: 1 });
    }
  }, [scrollDirection, controls]);

  return (
    <motion.div
      className='title'
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={variants}
    >
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </motion.div>
  );
};

export default Title;
