import React, { useState, useEffect } from "react";
import { Marker } from 'google-maps-react';
import API from "../utils/API";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../pages/Home.js'
import QrGen from "../components/QRcode/index";
import Map1 from "../components/Map/Map";


function Businesses(props) {
  const [currentBus, setCurrentbus] = useState();
  const [currentDisc, setCurrentDisc] = useState();
  const [description, setDescription] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [businessLat, setBusinessLat] = useState();
  const [businessLong, setBusinessLong] = useState();
  const { id } = useParams();

  useEffect(() => {
    console.log(props)
    getPosition();
    loadBusiness(id);
  },[currentBus]);

  function loadBusiness(id) {
    API.getBusiness(id)
      .then(res => {
        console.log(res.data.business)
        setCurrentbus(res.data.business)
        setCurrentDisc(res.data.discount)
        setDescription(res.data.description)
        if(currentBus){
          yelpBusiness(latitude, longitude, currentBus)
        }
      })
  };

  function getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      //console.log(showPosition);
    }
    function showPosition(position) {
      console.log(
        "Latitude: " +
        position.coords.latitude +
        " " +
        "Longitude: " +
        position.coords.longitude
      );
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    }
  }

  function yelpBusiness(latitude, longitude, currentBus) {
    const queryUrl = 'https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search';

    axios.get(queryUrl, {
      headers: {
        Authorization: `Bearer 9AvFmvbitzJpbSlJPaDKPmZbkrL3bKKfqklkwvjYCPZ1xXVwI76ygHd3MJeM9Lglb9kKYbcgfBYFyfN-YFpn6OfsxYKkAe-AP1do3P4Z35iCUh9QflOthO_BaQuLX3Yx`
      },
      params: {
        term: currentBus,
        latitude: latitude,
        longitude: longitude,
        sort_by: "distance",
        limit: "3"
      }
    })
      .then(res => {
        console.log(res)
        setBusinessLat(res.data.businesses[0].coordinates.latitude)
        setBusinessLong(res.data.businesses[0].coordinates.longitude)
      })
      .catch(err => {
        console.log(err)
      })
};

  return (
    <div className='container'>
      <div className='card'>
        <h2>{currentBus}</h2>
        <p>{description}</p>
        <h2>MAP</h2>
        <QrGen currentDisc={currentDisc} />
        <Map1 businessLat={businessLat} businessLong={businessLong} currentBus={currentBus}>
          <Marker />
        </Map1>
      </div>
    </div>
  )

}

export default Businesses;
