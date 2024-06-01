import React from 'react';
import './OurTeam.css';
import ranoud from '../../assets/ranoud.jpeg';
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
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='linkedin'>
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className='github'>
                  <FaGithub size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='team-item'>
          <img src='' className='team-img' alt='' />
          <h3>Moez </h3>
          <div className='team-info'>
            <ul className='team-icon'>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='linkedin'>
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className='github'>
                  <FaGithub size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='team-item'>
          <img src='' className='team-img' alt='' />
          <h3>Loay</h3>
          <div className='team-info'>
            <ul className='team-icon'>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer" className='linkedin'>
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer" className='github'>
                  <FaGithub size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='team-item'>
          <img src='' className='team-img' alt='' />
          <h3>Shady</h3>
          <div className='team-info'>
            <ul className='team-icon'>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer" className='linkedin'>
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer" className='github'>
                  <FaGithub size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='team-item'>
          <img src='' className='team-img' alt='' />
          <h3>Ahmed Khairi</h3>
          <div className='team-info'>
            <ul className='team-icon'>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer" className='linkedin'>
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer" className='github'>
                  <FaGithub size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div> 
        <div className='team-item'>
          <img src='' className='team-img' alt='' />
          <h3>Mohamed Senary</h3>
          <div className='team-info'>
            <ul className='team-icon'>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer" className='linkedin'>
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer" className='github'>
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
