import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
        // For a given function, creates a bound function that has the same body as the original function.
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        // console.log(event.target.value);
        this.setState({ term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        
        // DOM selector for warning label
        let warningLabel = document.querySelector('.input-label-warning');

        // RegEx for a 5-digit zip code
        let zipCodeRegEx = /^\d{5}$/;

        // Using the RegExp.prototype.test() method to search for a match between a regular expression (zipCodeRegEx) and a string (this.state.term). If RegExp.test() evaluates to true, go ahead and fetch weather. If it evaluates to false, alert the user to change the search input.
        if (zipCodeRegEx.test(this.state.term)) {
        // We need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''});
        warningLabel.style.display = 'none';
        } else {
            // alert('You can only search by zip code. Please update your search input to a 5 digit zip code.');
            warningLabel.style.display = 'table-caption';
            warningLabel.style.color = 'red';
            warningLabel.style.fontWeight = 'bold';
            this.setState({ term: ''});
        }
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}
                className="input-group">
                <label className="input-label-warning">error: You can only search by zip code. Please update your search input to a 5 digit zip code.</label>
                <input
                    placeholder="Enter a zip code to get the 5 day forecast for that location"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);