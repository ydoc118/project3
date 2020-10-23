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
    

    
    console.log(typeof businessLat)

        return (
            <div>
                <Map
                    google={google}
                    zoom={10}
                    style={mapStyles}
                    center={{lat: businessLat || 27.3364, lng: businessLong || -82.5307}}
                >
                    <Marker
                        title={'The marker`s title will appear as a tooltip.'}
                        name={currentBus}
                        position={{lat: businessLat, lng: businessLong}} />
                </Map>

            </div>
        );
    
}
export default GoogleApiWrapper({
apiKey: 'AIzaSyDAFNp-kiQJKedi-e9ntOpVBihzfQXu7VM'
})(Map1);

