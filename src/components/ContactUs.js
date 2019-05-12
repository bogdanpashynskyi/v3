import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <h1 className="title-new">Contact Us</h1>
      <form>
        <div className="contact-form">
          <div className="contact-field">
            <label for="name"> Name </label>
            <input type="text" for="name" placeholder="Name..."></input>
          </div>
          
          <div className="contact-field">
            <label for="email"> Email </label>
            <input type="text" name="email" placeholder="Email..."></input>
          </div>
          
          <div className="contact-field">
            <label for="text-area"> Comment </label>
            <textarea type="text-area" name="text-area" placeholder="Please insert your comment..."></textarea>
          </div>
          
          <div>
            <button className="submit-button"> Submit </button>
          </div>
        </div>
      </form>
    </div>
    
  )
}

export default ContactUs;