import React from 'react'
import './About.css'
import about_img from '../../assets/app.png'
import play_icon from '../../assets/play-button.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt='' className='about-img'/>
            <img src={play_icon} alt='' className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h3>Know More About Our Application</h3>
            <p>Welcome to Signclusive, where we offer a transformative solution for translating sign language.
                Our innovative app acts as a vital bridge, empowering users to communicate effectively through sign language.</p>
            <p>In the Finger Spelling section, simply utilize your device's camera to capture your hand gestures. With the press of a button, 'Capture,' your gestures are swiftly translated into alphabet letters.
                 Feel free to experiment with different gestures by using the 'Reset Spelling' option.
                </p>
                <p>Transitioning to the Words section, align your hand movements to form complete words, then initiate the recording process by selecting 'Start Recording.'
                     Our app ingeniously translates your gestures into the corresponding word, facilitating seamless communication.
                    </p> 
                    <p>
                    We're thrilled to welcome you to our vibrant community at Signclusive. 
                    One of the remarkable features of our app is its capacity to educate users about sign language. 
                    </p>
                    <p>
                    Our app features a dedicated section where sign language experts can contribute to our dataset. This dataset enhances the accuracy of our models, ultimately improving accessibility for all.
                     Join us in shaping a more inclusive future!
                    </p>
            
        </div>
    </div>
  )
}

export default About