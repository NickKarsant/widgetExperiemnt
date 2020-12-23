import axios from 'axios';

const KEY = 'AIzaSyC9meXa3hcJGdAMPKMEkCs7Rw7HX0qf1Wc';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    type: 'video',
    key: KEY
  }

});