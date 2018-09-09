import React, { Component } from 'react';

import WeatherCard from './WeatherCard';

export default class TenDay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data || {}
    }
  }

  render() {
    return (
      <section className="ten-day-container">
        <h1>Ten Day Forecast</h1>
        <WeatherCard data={this.state.data}/>
        <WeatherCard data={this.state.data}/>
        <WeatherCard data={this.state.data}/>
        <WeatherCard data={this.state.data}/>
        <WeatherCard data={this.state.data}/>
        <WeatherCard data={this.state.data}/>
        <WeatherCard data={this.state.data}/>
        <WeatherCard data={this.state.data}/>
        <WeatherCard data={this.state.data}/>
        <WeatherCard data={this.state.data}/>
      </section>
    )
  }
}