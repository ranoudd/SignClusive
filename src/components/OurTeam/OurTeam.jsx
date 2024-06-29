import React from 'react';
import './OurTeam.css';
import ranoud from '../../assets/ranoud.jpeg';
import Khairi from '../../assets/khairi.jpeg';
import shady from '../../assets/shady.jpeg';
import senary from '../../assets/senary.jpeg';
import loay from '../../assets/loay.jpeg';
import moez from '../../assets/moez.jpeg';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

const OurTeam = () => {
  return (
    <section className='section-white'>
      <div className='team-container'> {/* New container for flexbox */}
        <div className='team-item'>
          <img src={ranoud} className='team-img' alt='' />
          <h3>Ranoud Essam</h3>
          <div className='team-info'>
            <ul className='team-icon'>
              <li>
                <a href="https://www.linkedin.com/in/ranoudessam/" target="_blank" rel="noopener noreferrer" className='linkedin'>
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a href="https://github.com/ranoudd" target="_blank" rel="noopener noreferrer" className='github'>
                  <FaGithub size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='team-item'>
          <img src={moez} className='team-img' alt='' />
          <h3>Moez Rashed</h3>
          <div className='team-info'>
            <ul className='team-icon'>
              <li>
                <a href="https://www.linkedin.com/in/moezrashed/" target="_blank" rel="noopener noreferrer" className='linkedin'>
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a href="https://github.com/MoezRashed" target="_blank" rel="noopener noreferrer" className='github'>
                  <FaGithub size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='team-item'>
          <img src={loay} className='team-img' alt='' />
          <h3>Loay Gaber</h3>
          <div className='team-info'>
            <ul className='team-icon'>
              <li>
                <a href="http://www.linkedin.com/in/loay-gaber-45943a241" target="_blank" rel="noopener noreferrer" className='linkedin'>
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a href="https://github.com/Loay88" target="_blank" rel="noopener noreferrer" className='github'>
                  <FaGithub size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='team-item'>
          <img src={shady} className='team-img' alt='' />
          <h3>Shady Tarek</h3>
          <div className='team-info'>
            <ul className='team-icon'>
              <li>
                <a href="https://www.linkedin.com/in/shady-tarek-a111651a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className='linkedin'>
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a href="https://github.com/ShadyTarek10" target="_blank" rel="noopener noreferrer" className='github'>
                  <FaGithub size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='team-item'>
          <img src={Khairi} className='team-img' alt='' />
          <h3>Ahmed Khairi</h3>
          <div className='team-info'>
            <ul className='team-icon'>
              <li>
                <a href="https://www.linkedin.com/in/ahmed-khairi-54972a25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className='linkedin'>
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a href="https://github.com/AhmedKhairi11" target="_blank" rel="noopener noreferrer" className='github'>
                  <FaGithub size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div> 
        <div className='team-item'>
          <img src={senary} className='team-img' alt='' />
          <h3>Mohamed Khaled</h3>
          <div className='team-info'>
            <ul className='team-icon'>
              <li>
                <a href="https://www.linkedin.com/in/mohamed-khaled-32b18a24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className='linkedin'>
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a href="https://github.com/sen-ary" target="_blank" rel="noopener noreferrer" className='github'>
                  <FaGithub size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
