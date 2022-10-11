const express = require('express');
const app = express();

//access request object, access response object
app.get('/', (request, response) => {
	//callback string 'Hello World'
	response.send('Hello World');
});

app.listen(4000, () => {
	console.log('app listening on port 4000');
});
