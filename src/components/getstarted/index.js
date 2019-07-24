import React, { Component } from 'react'
import './style.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class GetStarted extends Component {
  render() {
    return (
      <div className='start-page-wrapper'>
        <div className='header_title display'>
          <div>Hotel</div>
          <div className='circular-design'>Up</div>
        </div>
        <div className='header_subtitle'>Best Budget Hotels</div>
        <Link to='/getstarted/phoneverification' style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="secondary" className='getstarted_btn'>
            Get started
          </Button>
        </Link>
      </div>
    )
  }
}
