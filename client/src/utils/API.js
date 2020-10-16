import axios from "axios";

export default {
  getCategories: function() {
    return axios.get("/api/categories")
  },
  getBusinesses: function() {
    return axios.get("/api/businesses");
  },
  getBusiness: function(id) {
    return axios.get("/api/businesses/" + id)
  }
}