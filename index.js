const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//access request object, access response object
app.get('/', (request, response) => {
	//callback string 'Hello World'
	response.send('Hello World');
});

// Default Route
// What
app.post('/', (req, res) => {
	res.send(`hello ${req.body.name}`);
});

app.get('/year/:yr/:name', (req, res) => {
	console.log(req.params);
	res.send(`Hello ${req.params.name} it's ${req.params.yr}`);
	// hello cora its 1990
});

app.post('/', (req, res) => {
	res.send('hello from the post route');
});

app.listen(4000, () => {
	console.log('app listening on port 4000');
});
//RUN ' nodemon index.js ' TO START
// ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^
//
//
