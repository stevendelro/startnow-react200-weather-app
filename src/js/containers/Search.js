import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather, logHistoryItem, cityTextInput } from '../actions/index';

class Search extends Component {
  inputSelectedCity = e => {
    this.props.cityTextInput(e.target.value);
  };
  instantWeatherFetch = e => {
    const { fetchWeather, logHistoryItem } = this.props;
    fetchWeather(e.target.value);
    logHistoryItem(e.target.value);
  };
  onFormSubmit = e => {
    const { fetchWeather, logHistoryItem } = this.props;
    const { selectedCity } = this.props.city;
    e.preventDefault();
    fetchWeather(selectedCity);
    logHistoryItem(selectedCity);
  };

  render() {
    const { selectedCity } = this.props.city;
    return (
      <div>
        <div className='btn-group' role='group'>
          <button
            type='button'
            onClick={this.instantWeatherFetch}
            value='San Diego'
            className='btn btn-primary roboto-font font-weight-light'>
            SAN DIEGO
          </button>
          <button
            type='button'
            onClick={this.instantWeatherFetch}
            value='New York'
            className='btn btn-primary roboto-font font-weight-light'>
            NEW YORK
          </button>
          <button
            type='button'
            onClick={this.instantWeatherFetch}
            value='Washington'
            className='btn btn-primary roboto-font font-weight-light'>
            WASHINGTON
          </button>
          <button
            type='button'
            onClick={this.instantWeatherFetch}
            value='London'
            className='btn btn-primary roboto-font font-weight-light'>
            LONDON
          </button>
          <button
            type='button'
            onClick={this.instantWeatherFetch}
            value='Tokyo'
            className='btn btn-primary roboto-font font-weight-light'>
            TOKYO
          </button>
        </div>
        <form onSubmit={this.onFormSubmit} className='input-group'>
          <input
            type='text'
            className='roboto-font form-control'
            placeholder='Choose a city above or type in your favorite city'
            value={selectedCity}
            onChange={this.inputSelectedCity}
          />
          <span className='input-group-btn'>
            <button className='roboto-font btn btn-primary' type='submit'>
              GO
            </button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchWeather, logHistoryItem, cityTextInput },
    dispatch
  );
}
function mapStateToProps({ city }) {
  return { city };
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
