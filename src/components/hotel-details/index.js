import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import './style.css'

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#ff6c5c', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#ff6c5c',
  },
})(LinearProgress);

export default class HotelDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='hotel-details-wrapper'>
        <img src={require('../../Images/destination18.jpeg')} alt='destination18'/>
        <Card className='hotel-details-header'>
          <div className='hotel-details-header-title'>
            <div className='header-title-hotel-name'>Hotel Blue Sky</div>
            <div className='header-title-hotel-subtitle'>5th street, Militon Heaven</div>
            <div className='header-title-hotel-subtitle'>Montreal, Cannada</div>
          </div>

          <div className='header-journey-details'>
            <div className='hotel-journey-dates'>
              <div className='dates'>Check In</div>
              <div>Thu, 14 Jun</div>
            </div>

            <div className='header-journey-details hotel-journey-dates border'>
              <div style={{
                width: 300
              }}>
                <div className='dates'>Check Out</div>
                <div>Sun, 17 Jun</div>
              </div>
              <i class="material-icons">
                chevron_right
              </i>
            </div>

            <div className='header-journey-details hotel-journey-dates'>
              <div>
                <div className='dates'>2 Adults</div>
                <div>1 Room</div>
              </div>
              <i class="material-icons">
                chevron_right
              </i>
            </div>
          </div>
        </Card>

        <Card className='facilities'>
          <div className='facilities-title'>Facilities</div>
          <div className='facility-options'>

            <div>
              <img src={require('../../Images/wifi-icon.png')}
                className='sub_header_facility_icon'
                alt='wifi'
              />
              <div>Wifi</div>
            </div>

            <div>
              <img src={require('../../Images/open-bar-icon.png')}
                className='sub_header_facility_icon'
                alt='open-bar'
              />
              <div>Open Bar</div>
            </div>

            <div>
              <img src={require('../../Images/restaurant.png')}
                className='sub_header_facility_icon'
                alt='restaurant'
              />
              <div>Restaurant</div>
            </div>

            <div>
              <i class="material-icons">
                add
              </i>
              <div>View all</div>
            </div>

          </div>
        </Card>

        <Card className='rating-wrapper'>
          <div>

            <div className='ratings'>
              <div className='hotel-ratings'>
                <div>4.5</div>
                <img src={require('../../Images/hotel-rating.png')} alt='hotel-rating'/>
              </div>
              <div>56 Ratings &</div>
              <div>32 Reviews</div>
            </div>

            <div className='progress-bar-wrapper'>
              <div className='progress-bar'>
                <div className='hotel-rating-info'>Value for money</div>
                <BorderLinearProgress
                  variant="determinate"
                  color="red"
                  value={80}
                  style={{
                    width: 50,
                    height: 5
                  }}
                />
                <div className='hotel-rating-number'>4.6/5</div>
              </div>

              <div className='progress-bar'>
                <div className='hotel-rating-info'>Location</div>
                <BorderLinearProgress
                  variant="determinate"
                  color="red"
                  value={30}
                  style={{
                    width: 50,
                    height: 5
                  }}
                />
                <div className='hotel-rating-number'>2.7/5</div>
              </div>

              <div className='progress-bar'>
                <div className='hotel-rating-info'>Cleanliness</div>
                <BorderLinearProgress
                  variant="determinate"
                  color="red"
                  value={90}
                  style={{
                    width: 50,
                    height: 5
                  }}
                />
                <div className='hotel-rating-number'>4.5/5</div>
              </div>

              <div className='progress-bar'>
                <div className='hotel-rating-info'>Amneties</div>
                <BorderLinearProgress
                  variant="determinate"
                  color="red"
                  value={65}
                  style={{
                    width: 50,
                    height: 5
                  }}
                />
                <div className='hotel-rating-number'>3.5/5</div>
              </div>

            </div>
          </div>
        </Card>

        <Card className='hotel-info'>
          Why book this hotel?
        </Card>

        <Link to={{
          pathname: '/payment',
          state: {
            range: this.props.location.state.range
          }
        }} className='book-btn-wrapper'>
          <Button variant="contained" color="secondary" className='book-btn'>
            Book
          </Button>
        </Link>

      </div >
    )
  }
}
