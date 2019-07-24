import React, { Component } from 'react'
// import ItemsCarousel from 'react-items-carousel';
// import range from 'lodash/range';
// import CarouselSlider from "react-carousel-slider"
import SimpleImageSlider from "react-simple-image-slider";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './style.css';

export default class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          url: require('../../Images/destination9.jpeg')
        },
        {
          url: require('../../Images/destination10.jpeg')
        },
        {
          url: require('../../Images/destination15.jpeg')
        },
        {
          url: require('../../Images/destination7.jpeg')
        },
      ]
    }
  }

  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;
    return (
      <div>
        <div className='header-flex-display flex-items'>
          <div className='hotel-list-header header-flex-display'>
            <div className='clr-black'>Hotel</div>
            <div className='circular-design'>Up</div>
          </div>
          <i class="material-icons">
            person
          </i>
        </div>

        <SimpleImageSlider
          width={375}
          height={180}
          images={this.state.data}
          showBullets={false}
          style={{ width: '100%' }}
        />

        <div>
          <input type='text' placeholder='Where are you travelling?' className='search-text' style={{ width: 200 }} />
          <Link to='/hotel-list' style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="secondary">Search</Button>
          </Link>
        </div>

        <div>
          <div className='img-header'>POPULAR DESTINATION</div>
          <div style={{ height: 250 }}>
            <img src={require('../../Images/destination8.jpeg')} style={{ width: '93%' }} />
            <div className='holiday-img-text'>HOLIDAY TRAVEL 2018</div>
          </div>
          <div className='header-flex-display space-arnd' style={{ marginTop: 25, justifyContent: 'space-around' }}>
            <div>
              <img src={require('../../Images/destination6.jpeg')} style={{ width: 170, height: '170px', marginRight: 10 }} />
              <div className='world-img-text'>WORLD HERITAGE</div>
            </div>
            <div>
              <img src={require('../../Images/destination7.jpeg')} style={{ width: 173, height: '170px' }} />
              <div className='bestplace-img-text'>BEST PLACE TO LIVE</div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
