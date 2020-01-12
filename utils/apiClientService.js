import axios from 'axios';

const API_URL = 'https://roomi-end.herokuapp.com';

const fetchListings = () => axios.get(API_URL+'/test');

const addListingToServer = (listing) => axios.post(API_URL+'/add', listing);

module.exports = { fetchListings, addListingToServer }