import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1d71dd80-72cd-4bc3-9fe2-ebf6ed6a816a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.massage)
    }
  };




  return (
    <div id='contact' className='contact'>
     <div className='contact-title'>
  <h1>Get in touch</h1>
  <img src={theme_pattern} alt=''/>
     </div>
     <div className='contact-section'>
    <div className='contact-left'>
<h1>Lets Talk</h1>
<p>Ready to discuss your next project? I'm here to help bring your vision to life. Get in touch today, and let's start creating something amazing together.</p>
    <div className='contact-details'>
  <div className='contact-detail'>
 <img src ={mail_icon}/><p>hamad290k@gmail.com</p>
  </div>
  <div className='contact-detail'>
  <img src ={call_icon}/><p>+92-317-5422029</p>
  
  </div>
  <div className='contact-detail'>
  <img src ={location_icon}/><p>Islamabad,Pk</p>
  
  </div>
    </div>
    </div>


    <form onSubmit={onSubmit} className='contact-right'>
<label htmlFor=''></label>
<input type="text"placeholder='Enter your name' name='name' />
<label htmlFor=''>Your Email</label>
<input type='email' placeholder='Enter your email'name='email'/>
  <label>Write your massage here</label>
  <textarea name='massage' rows="8"placeholder='Enter your massage'></textarea>
    <button type='submit' className='contact-submit'>Submit now</button>
    </form>
     </div>
    </div>
  )
}

export default Contact