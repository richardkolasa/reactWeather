import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather} from '../actions/index';

import SingleSubmission from '../components/singleSubmission'

const placeholder = 'Get five-day weather averages for your favorite cities';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    // fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <SingleSubmission
        onSubmit={this.onSubmit}
        inputClass="form-control"
        spanClass="input-group-btn"
        buttonType="submit"
        buttonClass="btn btn-secondary"
        value={this.state.term}
        placeholder={placeholder}
        onChange={this.onInputChange} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
