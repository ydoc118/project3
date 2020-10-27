import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import "../../pages/Business"

function Map1({currentBus, businessLat, businessLong, latitude, longitude}) {
        
        return (
                <Map
                    google={window.google}
                    zoom={12}
                    containerStyle={{ top: "30px", bottom: "30px", width: '100%', height: '500px', position: 'relative' }}
                    center={{lat: latitude || 27.3364, lng: longitude || -82.5307}}
                >
                    <Marker
                        title="Current Position"
                        label="Current Position"
                        position={{lat: latitude, lng: longitude}} />
                    <Marker
                        onClick={() => window.open(`https://www.google.com/maps/search/${currentBus}/@${businessLat},${businessLong}`) }
                        title={currentBus}
                        label={currentBus}
                        position={{lat: businessLat, lng: businessLong}} />
                </Map>

            
        );
    
}
export default GoogleApiWrapper({
apiKey: process.env.REACT_APP_MAP_API_KEY
})(Map1);

