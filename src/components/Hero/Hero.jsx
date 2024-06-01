import React from 'react'
import './Hero.css'
import {motion} from 'framer-motion'
import { Link } from 'react-scroll'


const Hero = () => {
  return (
    <div className='hero container' >
      <div className='hero-text'>
        <motion.h1
        initial={{y:-100}}
        animate={{y:0}}
        transition={{
          duration:"1",delay:"0.5"
        }}
        >
        Welcome To SignClusive
        </motion.h1>
           <p>
           Step into the world of inclusivity with our signclusive website, where empowerment meets innovation.
           our platform serves as an invaluable resource for learning about our mission, app, and how you can contribute to our dataset. 
           </p>
           <Link to='about'smooth={true} offset={-200} duration={500} className='bttn'> Explore More </Link>

      </div>

    </div>
  )
}

export default Hero