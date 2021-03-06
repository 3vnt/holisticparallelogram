import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index.js';

import Header from './Header';
import PlaceContainer from './PlaceContainer';
import MapContainer from './MapContainer';
import SavedPlaceContainer from './SavedPlaceContainer';
import searchGooglePlaces from '../utils/searchGooglePlaces.js';
import $ from 'jquery';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='grid'>
          <PlaceContainer actions={actions}/>
          <MapContainer actions={actions} dispatch={this.props.dispatch} coordinate={this.props.coordinate}/>
          <SavedPlaceContainer actions={actions} dispatch={this.props.dispatch}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
