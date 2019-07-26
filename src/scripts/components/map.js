import React, {Component} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoibWJvamVjIiwiYSI6ImNqcmxwdWN2NDAwNmk0M3Nid2k2MWlwZXUifQ.mNFwxA0Zu5cA7HmHvlwBCg"
});

class MainMap extends Component{

  constructor(props) {
    super(props);
    this.state = {
      latitude: this.props.latitude,
      longitude: this.props.longitude
    };
  }


  handleStyleLoad = map => (map.resize());

  render() {
    return(
      <Map
        style="mapbox://styles/mapbox/dark-v9"
        containerStyle={{height: '100%', width: '100%'}}
        onStyleLoad={this.handleStyleLoad}
        center={[this.state.longitude, this.state.latitude]}
      />
    )
  }


}

export default MainMap

