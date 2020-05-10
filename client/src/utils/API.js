import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = process.env.REACT_APP_GOOGLEBOOKS_API_KEY;

export default {
  // Gets all books
  getBooks: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }

};
