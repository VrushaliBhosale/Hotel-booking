import React, { Component } from 'react';
import './style.css';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { withStyles } from '@material-ui/core/styles';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

const stars = [1, 2, 3, 4, 5];

export default function Filter() {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [rangeValue, setRange] = React.useState(0);
  const [star, setStar] = React.useState(5);

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  function valuetext(value) {
    return `${value}°C`;
  }

  function getPriceRange(event, newvalue) {
    setRange(newvalue);
  }

  function setHotelStar(id) {
    console.log('index', id);
    setStar(id);
  }

  function reset() {
    setRange(0);
    setStar(5);
  }

  return (
    <div className='filter-wrapper'>
      <Card className='filter-header space-betwn'>
        <div className='filter-header space-around'>
          <Link to='hotel-list'>
            <i class="material-icons">
              arrow_back
            </i>
          </Link>
          <div className='filter'>FILTER</div>
        </div>
        <div className='filter-header space-around'>
          <div className='reset' onClick={reset}>RESET</div>
        </div>
      </Card>

      <Card className='margin'>
        <div className='card-title'>
          PRICE RANGE
          </div>
        <Typography id="discrete-slider" gutterBottom>
          {rangeValue > 0 ? rangeValue : '$0 to $1500'}
        </Typography>
        <Slider
          // defaultValue={0}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          value={rangeValue > 0 ? rangeValue : 0}
          step={200}
          marks
          min={0}
          max={2000}
          style={{
            width: 300
          }}
          onChange={getPriceRange}
        />
      </Card>

      <Card className='margin'>
        <div className='card-title'>
          HOTEL STAR
          </div>
        <div className='flex-display'>

          {
            stars.map((item, index) => {
              return (
                <Card
                  onClick={() => setHotelStar(index)}
                  className='rating-card'
                  style={{ backgroundColor: star === index ? '#0080ff' : '' }}
                >
                  <img src={require('../../Images/star.png')}
                    className='star'
                    alt='starimage'
                  />
                  <div>{item}</div>
                </Card>
              )
            })
          }
        </div>
      </Card>

      <Card className='radio-options margin'>
        <div className='radio-btn-titles'>Free Cancellation</div>
        <GreenRadio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'A' }}
        />
      </Card>

      <Card className='radio-options margin'>
        <div className='radio-btn-titles'>Reserve now pay later</div>
        <GreenRadio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'B' }}
        />
      </Card>

      <Card className='radio-options margin'>
        <div className='radio-btn-titles'>Sunrise check-in</div>
        <GreenRadio
          checked={selectedValue === 'c'}
          onChange={handleChange}
          value="c"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'C' }}
        />
      </Card>

      <Card className='radio-options facility-margin'>
        <div>
          <div className='radio-btn-titles'>Other facilities</div>
          <div>Parking, Pool, Bar + 1 more</div>
        </div>
        <i class="material-icons">
          chevron_right
        </i>
      </Card>

      <Link to={{
        pathname: '/hotel-details',
        state: {
          range: rangeValue
        }
      }}>
        <Button variant="contained" color="primary" className='apply-btn'>
          Apply
      </Button>
      </Link>

    </div>
  )
}
