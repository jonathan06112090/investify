const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://real-time-finance-data.p.rapidapi.com/search',
  params: {
    query: 'Dow Johns',
    language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': 'f98e5451f5mshdc2300562e5c0acp190994jsneb535f8f9c0e',
    'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}