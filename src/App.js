import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import QRCode from './components/qrcode/QRCode'
import Title from './components/Title/Title'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import Dataset from './components/Dataset/Dataset'
import OurTeam from './components/OurTeam/OurTeam'



const App = () => {

const[playState, setPlayState] = useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title subTitle='Our App' title='What We Offer'/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Sacn this QRcode to download our App' title=' Scan Me'/>
      <QRCode/>
      <Title subTitle='Our Dataset' title=' Contribute To Our Community'/>
      <Dataset/>
      <Title subTitle='Meet Our Team' title=' The Team Behind SignClusive'/>
      <OurTeam/>
      <Title subTitle='Contact Us' title=' Get in Touch'/>
      <Contact/>
      <Footer/>

      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
