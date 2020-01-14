import axios from 'axios';

const API_URL = 'https://roomi-end.herokuapp.com';

const fetchListings = () => axios.get(API_URL+'/test');

const addListingToServer = (listing) => axios.post(API_URL+'/add', listing);

const createUser = (login) => axios.post(API_URL+'/add_user', login);

const loginUser = (login) => axios.post(API_URL+'/login', login);

module.exports = { fetchListings, addListingToServer, createUser, loginUser };