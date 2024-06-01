import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/chat.png'
import phone_icon from '../../assets/smartphone-call.png'
import mail_icon from '../../assets/email.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b7d72440-d92d-4c6f-9f45-ccfdabf3d477");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'> 
    <div className="contact-col">
        <h3>Send us a message<img src={msg_icon} alt=''/></h3>
        <p>Feel free to reach out through contact form or find our
            information below. Your feedback,question, and suggestion are
            important to us as we strive to provide exceptional service.
        </p>
        <ul>
            <li><img src={mail_icon} alt=''/>signclusive@gmail.com</li>
            <li><img src={phone_icon} alt=''/>+201022335544</li>
        </ul>
    </div>
    <div className="contact-col">
        <form onSubmit={onSubmit} >
            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile number' required pattern='[0-9]*'/>
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message ...' required></textarea>
            <button type='submit' className='btnn'>Send</button>

        </form>
        <span>{result}</span>
    </div>
    </div>
  )
}

export default Contact