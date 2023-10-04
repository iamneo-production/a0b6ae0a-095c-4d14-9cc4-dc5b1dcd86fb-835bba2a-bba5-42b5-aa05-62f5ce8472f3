import React from 'react'
import '../assets/css/Terms.css'
import backgroundImage from '../assets/img/bga.webp';
function Terms() {
    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        minWidth: '100vw',
      };
  return (
    <div className='whole'  style={containerStyle}>
    <div className='terms' ><h1>Terms and conditions</h1></div>
    <div className='con'> 
    <h3 className='h3p'>Eligibility</h3>
    <p className='p1'>You must be at least 14 years old to use this Service. By using the Service,
     you represent and warrant that you are of legal age to form a binding contract</p>
    <h3 className='h3p'> Account Registration</h3>
    <p className='p1'>To access certain features of the Service, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p><br/>
    <h3 className='h3p'> User Conduct</h3>
    <p className='p1'>You agree to use the Service in compliance with all applicable laws and regulations. You must not:

    Use the Service for any illegal purpose.
    Harass, abuse, or harm other users.
    Post or transmit any content that is offensive, defamatory, or infringing on the rights of others.
    Attempt to gain unauthorized access to the Service or its related systems or networks.</p>
    <h3  className='h3p'> Privacy and Data Collection</h3>
    <p className='p1'>Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy for information on how we collect, use, and protect your personal information.</p>
    <h3  className='h3p'>Governing Law and Jurisdiction</h3>
    <p className='p1'>These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. You agree that any legal action or proceeding shall be exclusively in the state or federal courts located in [Your Jurisdiction].</p>
    <h3 className='h3p'>Contact Information</h3>
    <p className='p1'>If you have any questions about these terms and conditions, please contact us at [Contact Email].
    
    

    </p>
    </div>
    </div>
    
  )
}

export default Terms