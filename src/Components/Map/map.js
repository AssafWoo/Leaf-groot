import React  from 'react';
import GoogleMapReact from 'google-map-react';
import{Marker} from './style';

const ZOOM = 11;
const center = {
    lat: 59.95,
    lng: 30.33
}
const MarkerPointer = () =>  <Marker><div className="pin2" /></Marker>;

const GoogleMapComponent = ({lat, lng}) => {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '95vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
          defaultCenter={center}
          defaultZoom={ZOOM}
        >
          <MarkerPointer
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
}

export default GoogleMapComponent;