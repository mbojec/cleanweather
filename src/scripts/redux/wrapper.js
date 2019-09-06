import React, { Component } from 'react'
import { connect } from 'react-redux'
import {changeView,  cleanQuery, fetchSearchQuery, openCloseDrawer, changeSearchQuery} from "./actions/navigation";
import {showCurrentForecast, fetchForecast, showDailyForecast, showHourForecast} from "./actions/forecast";


export function withRedux(WrappedComponent) {
  class withReduxComponent extends Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      onChangeView: (screen) => dispatch(changeView(screen)),
      onFetchSearchQuery: (searchQuery) => dispatch(fetchSearchQuery(searchQuery)),
      onChangeQueryArray: (query) => dispatch(changeSearchQuery(query)),
      onCleanQueryArray: () => dispatch(cleanQuery()),
      onChangeDrawerState: (state) => dispatch(openCloseDrawer(state)),
      onFetchForecast: (queryPosition) => dispatch(fetchForecast(queryPosition)),
    }
  };

  const mapStateToProps = state => {
    return {
      screenView: state.navigation.stateView,
      searchQuery: state.navigation.searchQuery,
      queryArray: state.navigation.queryArray,
      drawerIsOpen: state.navigation.drawerIsOpen,
      forecast: state.forecast.forecast,
      queryPosition: state.forecast.queryPosition,
      currentForecast: state.forecast.currentForecast,
      hourForecast: state.forecast.hourForecast,
      dailyForecast: state.forecast.dailyForecast,
    }
  };

  return connect(mapStateToProps, mapDispatchToProps)(withReduxComponent)
}