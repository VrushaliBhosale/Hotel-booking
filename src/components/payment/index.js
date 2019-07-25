import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './style.css';

export default class Payment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='payment-wrapper'>
        <div className='payment-header bg-clr'>
          <div>
            <div className='hotel-name'>Hotel Blue Sky</div>
            <div>329 Clemens Vista, Militon Heaven</div>
            <div>Montreal, Canada</div>
          </div>
          <div className='text-display'>
            <div>Details</div>
            <i class="material-icons">
              chevron_right
            </i>
          </div>
        </div>

        <div className='text-display journey-content-display space-even bg-clr'>
          <div className='check-in-info'>
            <div className='clr-gray'>CHECK-IN</div>
            <div>01,JUN 2018</div>
            <div className='clr-gray'>12:00 PM</div>
          </div>
          <div className='clr-gray'>2 Night</div>
          <div className='check-out-info'>
            <div className='clr-gray'>CHEK-OUT</div>
            <div>04,JUN 2018</div>
            <div className='clr-gray'>12:00 PM</div>
          </div>
        </div>

        <div className='room-details text-display space-betwn bg-clr'>
          <div>King Size Room</div>
          <div className='text-display'>
            <div>1 ROOM</div>
            <div>2 GUESTS</div>
          </div>
        </div>

        <div className='payment-type-title'>Select Payment Type</div>
        <div className='text-display space-betwn payment-type'>
          <div>
            <img src={require('../../Images/debit-card.png')}/>
            <div className='font-size clr-gray'>Debit Card</div>
          </div>

          <div>
            <img src={require('../../Images/debit-card.png')}/>
            <div className='font-size clr-gray'>Credit Card</div>
          </div>

          <div>
            <img src={require('../../Images/net-banking2.png')}/>
            <div className='font-size clr-gray'>Net Banking</div>
          </div>

          <div>
            <img src={require('../../Images/home.png')}/>
            <div className='font-size clr-gray'>Pay @Home</div>
          </div>
        </div>

        <div className='text-display space-betwn payment-cards bottom-border' >
          <img
            src={require('../../Images/visa2.png')}/>
          <img
            src={require('../../Images/rupay.png')}/>
          <img
            src={require('../../Images/maestro.png')}/>
          <img
            src={require('../../Images/master-card.png')}/>
        </div>

        <div className='card-details'>
          <div className='card-number'>
            <TextField
              id="standard-name"
              label="Card Number"
              margin="normal"
              defaultValue='4312 5673 1234'
              style={{
                fontSize: 13,
                width: 230
              }}
            /></div>

          <div className='card-name'>
            <TextField
              id="standard-name"
              label="Name on Card"
              margin="normal"
              style={{
                fontSize: 13,
                width: 230
              }}
            /></div>
        </div>

        <Link to='/hotel-list'>
          <div style={{ backgroundColor: 'white' }}>
            <Button className="pay-btn">
              PAY ${this.props.location.state.range}
            </Button>
          </div>
        </Link>

      </div>
    )
  }
}
