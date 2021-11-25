import axios from 'axios';
export default axios.create({
  baseURL: "https://kunal1071996.herokuapp.com/api/v1/",
  headers: {
    "Content-type": "application/json"
  }
});