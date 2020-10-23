import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import "../../pages/Business"

const mapStyles = {
    position: "relative",
    width: '100%',
    height: '100%',
    marginTop: '10%'
};

function Map1({currentBus, businessLat, businessLong, google}) {

        useEffect(() => {
            console.log(businessLong)
        },[businessLong, businessLat])
        
        return (
            <div>
                <Map
                    google={google}
                    className={"map"}
                    zoom={10}
                    style={mapStyles}
                    center={{lat: businessLat || 27.3364, lng: businessLong || -82.5307}}
                >
                    <Marker
                        onClick={() => window.open(`https://www.google.com/maps/search/${currentBus}/@${businessLat},${businessLong}`) }
                        title={currentBus}
                        text={"currentBus"}
                        position={{lat: businessLat, lng: businessLong}} />
                </Map>

            </div>
        );
    
}
export default GoogleApiWrapper({
apiKey: 'AIzaSyDAFNp-kiQJKedi-e9ntOpVBihzfQXu7VM'
})(Map1);

