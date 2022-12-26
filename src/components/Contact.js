import React, { useState } from 'react';
import '../styles/Navbar.css';
import '../styles/Contact.css';
import Header from './Header.js';
import Footer from './Footer.js';
import { checkName, validateEmail } from '../utils/helpers.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_SENT } from './Message.js';








function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    //get input values
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    console.log(inputValue);

    //create conditions
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast(message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!checkName(name)) {
      setErrorMessage('Name is not valid');
    }

    if (!validateEmail(email)) {
      setErrorMessage('Email is not valid');
    }

    if (!message) {
      setErrorMessage('Message is required');
    } else {
      console.log('Information submitted successfully');
      notify(EMAIL_SENT)
    }

    //clear input
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleInputMove = (e) => {
    const { target } = e;
    const inputValue = target.value;
    let nameInput = document.querySelector('#request-field-id');
    if (inputValue === '') {
      nameInput.style.visibility = 'visible';
    } else {
      nameInput.style.visibility = 'hidden';
    }
  };

  return (
    <div id="parent-form-div-id" className="parent-div-form">
      <Header/>
      <br></br>
      <br></br>
      <h1 id='h1-contact-id' className="h1-contact">Contact Information</h1>
      {/* create contact form */}
      <br></br>
      <br></br>
      <form
        className="contact-form form-control-sm g-3 needs-validation"
        noValidate
      >
        <div className="mb-3">
          <label
            id="label-Name-ID"
            htmlFor="exampleFormControlInput1"
            className="form-label"
          >
            Name:
          </label>
          <input
            value={name}
            name="name"
            className="form-control"
            id="nameInput1"
            type="text"
            onMouseLeave={handleInputMove}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address:
          </label>
          <input
            value={email}
            name="email"
            className="form-control"
            id="emailInputID"
            type="email"
            onMouseLeave={handleInputMove}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message:
          </label>
          <textarea
            type="message"
            value={message}
            className="form-control "
            id="messageInputID"
            rows="6"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <input className='input-submit-btn' type="submit" value="Submit" onClick={handleFormSubmit} />
        </div>
      </form>
      {errorMessage && (
        <div id="error-message-id" className="errorMessage">
          <p className="error-text">{errorMessage}</p>
        </div>
      )}

      <div className="request-field-class">
        <p id="request-field-id">
          Field Required
        </p>
      </div>
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Footer/>

    </div>
  );
}
export default Contact;
