import React, { Component } from 'react'
import './style.css';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class HotelList extends Component {
  render() {
    return (
      <div>
        <div className='list-header'>
          <div className='display'>
            <div>Montreal, Canada</div>
            <i class="material-icons">
              search
          </i>
          </div>
          <div className='journey-dates'>
            <div className='journey-info'>
              <div className='clr-red'>Thu, 14 Jun</div>
              <div className='journey-time'>12:00 PM</div>
            </div>
            <div className='journey-info'>
              <div className='clr-red'>Sun, 17 Jun</div>
              <div className='journey-time'>11:00 AM</div>
            </div>
            <div>
              <div className='clr-red'>1 Room</div>
              <div className='journey-time'>2 Adults</div>
            </div>
          </div>
        </div>

        <div className='list'>
          <Card className='list-item'>
            <div>
              <img src={require('../../Images/destination7.jpeg')} 
              className='list-item-img'
              alt='destination7'/>
            </div>
            <div className='list-item-info'>
              <div className='hotel-title'>Hotel Blue Sky</div>
              <div className='hotel-subtitle'>5th street, dMontreal</div>
              <div className='hotel-list-item-review'>
                <div className='hotel-rate'>4.5</div>
                <div className='hotel'>Fabulous</div>
              </div>
              <div className='hotel-subtitle'>free Cancellation, Free Wi-Fi</div>
              <div className='text-strike'> $199</div>
              <div className='hotel-price-wrapper'>
                <div className='hotel-price'>$149</div>
                <div className='hotel-subtitle'> 25% OFF</div>
              </div>
            </div>
          </Card>

          <Card className='list-item'>
            <div>
              <img src={require('../../Images/destination6.jpeg')} className='list-item-img' alt='destination6'/>
            </div>
            <div className='list-item-info'>
              <div className='hotel-title'>Hotel Blue Sky</div>
              <div className='hotel-subtitle'>5th street, dMontreal</div>
              <div className='hotel-list-item-review'>
                <div className='hotel-rate'>4.5</div>
                <div className='hotel'>Fabulous</div>
              </div>
              <div className='hotel-subtitle'>free Cancellation, Free Wi-Fi</div>
              <div className='text-strike'> $199</div>
              <div className='hotel-price-wrapper'>
                <div className='hotel-price'>$149</div>
                <div className='hotel-subtitle'> 25% OFF</div>
              </div>
            </div>
          </Card>

          <Card className='list-item'>
            <div>
              <img src={require('../../Images/destination9.jpeg')} className='list-item-img' alt='destination9'/>
            </div>
            <div className='list-item-info'>
              <div className='hotel-title'>Hotel Blue Sky</div>
              <div className='hotel-subtitle'>5th street, dMontreal</div>
              <div className='hotel-list-item-review'>
                <div className='hotel-rate'>4.5</div>
                <div className='hotel'>Fabulous</div>
              </div>
              <div className='hotel-subtitle'>free Cancellation, Free Wi-Fi</div>
              <div className='text-strike'> $199</div>
              <div className='hotel-price-wrapper'>
                <div className='hotel-price'>$149</div>
                <div className='hotel-subtitle'> 25% OFF</div>
              </div>
            </div>
          </Card>

          <Card className='list-item'>
            <div>
              <img src={require('../../Images/destination8.jpeg')} className='list-item-img' alt='destination'/>
            </div>
            <div className='list-item-info'>
              <div className='hotel-title'>Hotel Blue Sky</div>
              <div className='hotel-subtitle'>5th street, dMontreal</div>
              <div className='hotel-list-item-review'>
                <div className='hotel-rate'>4.5</div>
                <div className='hotel'>Fabulous</div>
              </div>
              <div className='hotel-subtitle'>free Cancellation, Free Wi-Fi</div>
              <div className='text-strike'> $199</div>
              <div className='hotel-price-wrapper'>
                <div className='hotel-price'>$149</div>
                <div className='hotel-subtitle'> 25% OFF</div>
              </div>
            </div>
          </Card>

          <Card className='list-item'>
            <div>
              <img src={require('../../Images/destination15.jpeg')} className='list-item-img' alt='destination15'/>
            </div>
            <div className='list-item-info'>
              <div className='hotel-title'>Hotel Blue Sky</div>
              <div className='hotel-subtitle'>5th street, dMontreal</div>
              <div className='hotel-list-item-review'>
                <div className='hotel-rate'>4.5</div>
                <div className='hotel'>Fabulous</div>
              </div>
              <div className='hotel-subtitle'>free Cancellation, Free Wi-Fi</div>
              <div className='text-strike'> $199</div>
              <div className='hotel-price-wrapper'>
                <div className='hotel-price'>$149</div>
                <div className='hotel-subtitle'> 25% OFF</div>
              </div>
            </div>
          </Card>

          <div className='hotel-list-footer sort-and-filter'>
            <div>
              <Button className='sort-and-filter sort'>
                <img src={require('../../Images/sort_icon.png')}
                  className='sort-filter-icon'
                  alt='sort'
                />
                <div>Sort</div>
              </Button>
            </div>

            <Link to='/filter'>
              <Button className='sort-and-filter sort'>
                <img src={require('../../Images/filter.png')}
                  className='sort-filter-icon'
                  alt='filter'
                />
                <div>Filter</div>
              </Button>
            </Link>

          </div>
        </div>
      </div>
    )
  }
}
