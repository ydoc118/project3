import axios from "axios";

export default {
  getCategories: function() {
    return axios.get("/api/categories")
  },
  getCategory: function(category) {
    return axios.get("/api/businesses/" + category)
  },
  getBusinesses: function() {
    return axios.get("/api/businesses");
  },
  getBusiness: function(id) {
    return axios.get("/api/businesses/Category/" + id)
  },
  getUsers: function() {
    return axios.get("/api/vetusers")
  },
  getOneUser: function(firstName, lastName, ssn) {
    return axios.get("/api/vetusers/" + firstName + "/" + lastName + "/" + ssn)
  }
}