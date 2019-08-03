import React, {Component} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: `${process.env.REACT_APP_MAPBOX_API_KEY}`
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
        center={[this.state.longitude, this.state.latitude]}>
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[this.state.longitude, this.state.latitude]} />
        </Layer>
      </Map>
    )
  }


}

export default MainMap

