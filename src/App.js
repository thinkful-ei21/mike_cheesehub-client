import React, { Component } from 'react';
import CheeseList from './components/cheese-list';
import fetchCheeses from './actions/cheese';
import { connect } from 'react-redux';

class App extends Component {

    componentDidMount() {
      this.props.dispatch(fetchCheeses());
    }

  render() {
    return (
    <CheeseList />
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {

  }
}

export default connect(mapStateToProps)(App);
