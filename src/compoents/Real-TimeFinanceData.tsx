const request = require('request');

const options = {
  method: 'GET',
  url: 'https://real-time-finance-data.p.rapidapi.com/search',
  qs: {
    query: 'Apple',
    language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': 'f98e5451f5mshdc2300562e5c0acp190994jsneb535f8f9c0e',
    'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
  }
};

request(options, function (error: string | undefined, response: any, body: any) {
	if (error) throw new Error(error);

	console.log(body);
});