import axios from "axios";
require('dotenv').config();

export default {
  getBusinesses: function () {
    return axios.get("/api/businesses");
  }
}

//Yelp business search API 
const business = {
  corsdomain: true,
  headers: {
    Authorization: `Bearer -_OSL_H0z4963ePmeNjsWYtotLgHLzIuWTm6x2fVheP1gEJ37L60BvgKmJnYrdL6T2RBB1pYt_j889F5nDc58uJ8wafEClR1rGuCAXOEtaXaFbhSemGseyCCW--IX3Yx
    ` }
};
const bodyParameters = {
  key: ""
};

axios.get(
  'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=philadelphia',
  business
).then(console.log).catch(console.log);