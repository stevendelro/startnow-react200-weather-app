import React, { Component } from 'react';
import MainHeader from './components/MainHeader';
import Search from './containers/Search';
import HistoryCard from './containers/HistoryCard';
import CityCard from './containers/CityCard';
import '../css/style.less';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <MainHeader />
        <Search />
        <div className='card-deck'>
          <CityCard />
          <HistoryCard />
        </div>
      </div>
    );
  }
}
