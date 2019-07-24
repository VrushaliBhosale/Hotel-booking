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
      <div style={{ backgroundColor: '#D8D8D8' }}>
        <div className='payment-header bg-clr'>
          <div>
            <div style={{ color: 'black', fontSize: 18, paddingTop: 10, paddingBottom: 10 }}>Hotel Blue Sky</div>
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
          <div>
            <div style={{ padding: 5 }} className='clr-gray'>CHECK-IN</div>
            <div>01,JUN 2018</div>
            <div className='clr-gray'>12:00 PM</div>
          </div>
          <div className='clr-gray'>2 Night</div>
          <div>
            <div className='clr-gray'>CHEK-IN</div>
            <div>04,JUN 2018</div>
            <div className='clr-gray'>12:00 PM</div>
          </div>
        </div>

        <div className='text-display space-betwn bg-clr' style={{ padding: 10 }}>
          <div style={{ fontSize: 15, color: 'black' }}>King Size Room</div>
          <div className='text-display'>
            <div style={{ paddingRight: 10, fontSize: 13, color: 'gray' }}>1 ROOM</div>
            <div style={{ fontSize: 13, color: 'gray' }}>2 GUESTS</div>
          </div>
        </div>

        <div style={{ padding: 10, textAlign: 'left', fontSize: 15, color: 'gray' }}>Select Payment Type</div>
        <div className='text-display space-betwn payment-type'>
          <div>
            <img src={require('../../Images/debit-card.png')}
              style={{ width: 50, height: 50, alignSelf: 'center' }} />
            <div className='font-size clr-gray'>Debit Card</div>
          </div>

          <div>
            <img src={require('../../Images/debit-card.png')}
              style={{ width: 50, height: 50, alignSelf: 'center' }} />
            <div className='font-size clr-gray'>Credit Card</div>
          </div>

          <div>
            <img src={require('../../Images/net-banking2.png')}
              style={{ width: 50, height: 50, alignSelf: 'center' }} />
            <div className='font-size clr-gray'>Net Banking</div>
          </div>

          <div>
            <img src={require('../../Images/home.png')}
              style={{ width: 50, height: 50, alignSelf: 'center' }} />
            <div className='font-size clr-gray'>Pay @Home</div>
          </div>
        </div>

        <div className='text-display space-betwn payment-cards bottom-border' >
          <img
            src={require('../../Images/visa2.png')}
            style={{ width: 70, height: 50 }}
          />
          <img
            src={require('../../Images/rupay.png')}
            style={{ width: 70, height: 50 }}
          />
          <img
            src={require('../../Images/maestro.png')}
            style={{ width: 80, height: 50 }}
          />
          <img
            src={require('../../Images/master-card.png')}
            style={{ width: 80, height: 50 }}
          />
        </div>

        <div style={{ backgroundColor: 'white', textAlign: 'left', paddingLeft: 30 }}>
          <div>
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

          <div>
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

        <Link to='/hotel-list' style={{ textDecoration: 'none' }}>
          <div style={{ backgroundColor: 'white' }}>
            <Button style={{ backgroundColor: '#45A7B7', position: 'absolute', left: 10, bottom: 0, width: '95%' }}>
              PAY ${this.props.location.state.range}
            </Button>
          </div>
        </Link>

      </div>
    )
  }
}
