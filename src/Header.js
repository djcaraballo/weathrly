import React, { Component } from 'react';

import './Header.css'

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }
  }

  submitLocation() {
    const { location } = this.state;
    const locale = { id: Date.now, location };
    this.props.addLocation(locale);
    this.setState({ location: '' });
    console.log(this.state.location);
  }

  submitOnEnter(e) {
    if (e.keyCode === 13) {
      document.getElementById('location-field').focus()
      this.submitLocation()
    }
  }

  render() {
    const { location } = this.state;

    return (
      <header className="app-header" aria-label="Weathrly application header">
        <h1 className="app-title" aria-label="Application title">Welcome back to Weathrly!</h1>
        <p className="app-intro" aria-label="App description">Please enter your city and state or five-digit zip code to get started.</p>
        <section className="header-form">
          <input
            aria-label="Enter your city and state or five-digit zip here"
            id='location-field'
            placeholder="Denver, CO or 80202"
            onChange={ (e) => this.setState({ location: e.target.value })}
            onKeyDown={ (e) => this.submitOnEnter(e) } />
          <button onClick={ () => this.submitLocation() }
                  disabled={ !location }>
            Show My Weather
          </button>
        </section>
      </header>
    )
  }
}