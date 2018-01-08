import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BarLoader } from 'react-spinners';
import { zoomIn, fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  zoomIn: {
    animation: 'x .170s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  },
  fadeIn: {
    animation: 'x .67s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
};

class CityCard extends Component {
  render() {
    const {
      displayedCity,
      icon,
      lat,
      lon,
      temperature,
      pressure,
      humidity,
      lowTemp,
      highTemp,
      windSpeed,
      error,
      firstRender,
      pending
    } = this.props.city;

    let weatherDisplay;

    if (firstRender && !pending) {
      weatherDisplay = (
        <div className='MainHeader-fluid text-center text-muted align-middle pt-3 m-0'>
          <p className='roboto-font'>Weather to be displayed here.</p>
        </div>
      );
    } else if (error) {
      weatherDisplay = (
        <div className='MainHeader-fluid text-center'>
          <p className='roboto-font text-center'>
            Unfortunately, an error has occured.
          </p>
        </div>
      );
    } else if (pending) {
      weatherDisplay = (
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col-4'>
              <div className='sweet-loading pt-5'>
                <BarLoader
                  className='text-center'
                  color={'#428bca'}
                  loading={pending}
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      weatherDisplay = (
        <StyleRoot style={styles.fadeIn}>
          <div className='MainHeader-fluid text-center' style={styles.zoomIn}>
            <h1 className='alegreya-font display-6 pt-4'>
              {displayedCity.toUpperCase()}
            </h1>
            <img
              src={`https://openweathermap.org/img/w/${icon}.png`}
              alt='Current Weather Icon'
              height='100'
              width='100'
            />
            <p className='lead alegreya-font text-muted'>{`lat: ${lat}, lon: ${lon}`}</p>
            <hr className='col-4' />
            <div className='row mb-4 ml-1 mr-1'>
              <div className='col-4'>
                <p className='roboto-font'>LOW</p>
                <p className='text-info font-weight-bold'>{lowTemp}</p>
              </div>
              <div className='col-4'>
                <p className='roboto-font'>RIGHT NOW</p>
                <p className='text-success font-weight-bold'>{temperature}</p>
              </div>
              <div className='col-4 '>
                <p className='roboto-font'>HIGH</p>
                <p className='text-danger font-weight-bold'>{highTemp}</p>
              </div>
            </div>
            <div className='row mb-4 ml-1 mr-1'>
              <div className='col-4'>
                <p className='roboto-font'>PRESSURE</p>
                <p className='text-muted font-weight-bold'>{pressure}</p>
              </div>
              <div className='col-4'>
                <p className='roboto-font'>HUMIDITY</p>
                <p className='text-muted font-weight-bold'>{humidity}</p>
              </div>
              <div className='col-4'>
                <p className='roboto-font'>WIND</p>
                <p className='text-muted font-weight-bold'>{windSpeed}</p>
              </div>
            </div>
          </div>
        </StyleRoot>
      );
    }

    return (
      <div className='card mb-3 col-lg-6 margin-15-px-padding-0-px p-0'>
        <div className='roboto-font card-header text-center'>
          CITY INFORMATION
        </div>
        <div className='container'>{weatherDisplay}</div>
      </div>
    );
  }
}

function mapStateToProps({ city }) {
  return { city };
}
export default connect(mapStateToProps)(CityCard);
