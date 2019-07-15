import React, {Component} from 'react';
import MapGL from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends Component{

  render() {
    return (
      <MapGL
        style={{ width: window.innerWidth, height: window.innerHeight }}
        mapStyle='mapbox://styles/mapbox/light-v9'
        accessToken={"pk.eyJ1IjoibWJvamVjIiwiYSI6ImNqcmxwdWN2NDAwNmk0M3Nid2k2MWlwZXUifQ.mNFwxA0Zu5cA7HmHvlwBCg"}
        latitude={51.12893}
        longitude={16.98705}
        zoom={14}
      />
    )
  }
}

export {Map}

