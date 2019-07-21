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
      viewport: {
        latitude: 51.12893,
        longitude: 16.98705,
        zoom: 14,
      },
    }
  }

  handleStyleLoad = map => (map.resize());

  render() {
    return(
      <Map
        style="mapbox://styles/mapbox/dark-v9"
        containerStyle={{height: '100%', width: '100%'}}
        onStyleLoad={this.handleStyleLoad}
        center={[16.9870, 51.1289]}
      />
    )
  }


}

export {MainMap}

