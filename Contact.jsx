import React from "react";

function Contact(){
    return(
        <div className="contact">
              <h3>Want to keep in touch?</h3>
        <p>Contact me below</p>
  <form className="form">
  <div className="form-group">
    <label for="name">Name:</label>
    <input className="input" type="text" />
    <label for="email">Email:</label>
    <input className="input" type="email" />
    <label for="message">Your message:</label>
    <textarea className="input" name="text" id="" cols="20" rows="5"></textarea>
    <button type="submit">Submit</button>
    
    </div></form>

        </div>
    );
}

export default Contact;