import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import "../../pages/Business"

const containerStyle = {
    position: "absolute",
    height: "100%",
    width: "100%"
};


function Map1({currentBus, businessLat, businessLong}) {
        
        return (
                <Map
                    google={window.google}
                    zoom={14}
                    containerStyle={{ top: "20px", width: '100%', height: '500px', position: 'relative' }}
                    center={{lat: businessLat || 27.3364, lng: businessLong || -82.5307}}
                >
                    <Marker
                        onClick={() => window.open(`https://www.google.com/maps/search/${currentBus}/@${businessLat},${businessLong}`) }
                        title={currentBus}
                        label={currentBus}
                        position={{lat: businessLat, lng: businessLong}} />
                </Map>

            
        );
    
}
export default GoogleApiWrapper({
apiKey: 'AIzaSyDAFNp-kiQJKedi-e9ntOpVBihzfQXu7VM'
})(Map1);

