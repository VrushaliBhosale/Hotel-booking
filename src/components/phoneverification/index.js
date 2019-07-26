import React, { Component } from 'react'
import './style.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class PhoneVerification extends Component {
  render() {
    return (
      <div className='bg'>
        <div className='header'>
          <div className='header-title clr-white'>Phone Verification</div>
          <div className='header-subtitle clr-white'>Please enter your mobile phone number</div>
        </div>

        <div>
          <div><input type='text' className='input-fields otp-input' /></div>
          <div>
            <input type='text' className='input-fields mobno-input' />
            <Button variant="contained" color="secondary" className='resend-btn'>
              Resend
            </Button>
            <div className='header-subtitle clr-white'>We will try to auto verify.</div>
          </div>
        </div>
        <div className='footer'>
          <Link to='/homepage'>
            <Button variant="contained" color="secondary" className='continue-btn'>
              continue
            </Button>
          </Link>
          <div className='header-subtitle clr-white'>
            By clicking continue, you agree to our <div>Terms and Conditions.</div>
          </div>
        </div>
      </div>
    )
  }
}
