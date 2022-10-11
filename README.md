[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Intro to Express

Today is a big day in SEI! We've build front-end applications using our knowledge and expertise of HTML, CSS and JavaScript. Over the next few weeks we're going to venture in to new territory: building full-stack applications!

The framework we'll be using in this unit is called Express.js (Express). Express runs on Node.js and provides us with some help in building out fullstack applications and APIs.

## Objectives

By the end of this lesson, developers should be able to:

- Explain and understand the request-response cycle
- Discuss how the Web works including:
  - Browser requests
  - Status codes
  - HTTP methods and REST
- Build a server-side application with Express!

## Introduction

Express is a framework for building web applications. In software development, frameworks include support programs, compilers, code libraries, tool sets, and application programming interfaces (APIs) that bring together all the different components to enable development of a project or system. There are lots of different kinds of frameworks for different kinds of tasks. Express helps us build applications on Node.js for the World Wide Web (Web).

## How does the Web Work

Before we can build our first full-stack application, we need to discuss how the Web works. Once we know a little bit about how the Web works, we can start to think about how Express (our back-end) fits in with our front-end.

> **Helpful Reading**:
>
> #### [Overview of Back-End Web Architectures](https://www.codecademy.com/articles/back-end-architecture)
>
> Learn about servers, databases, routing, and everything else that happens when a client makes a request and receives a response.

### Client-Server

The Web follows a model of communication called `client-server`. In the context of the Web, our browsers serve as the `client`. The other side of the equation is the `server` - a computer or application somewhere that responds to the requests from our browser.

![Client-Server](https://media.git.generalassemb.ly/user/17300/files/8d5a2c80-4670-11ea-8a29-610723d36c34)

The client and server communicate using Hypertext Transfer Protocol (HTTP) and the `request-response` cycle.

### HTTP

HTTP is a **protocol** which establishes the rules for communication over the Web. HTTP dictates how the client requests information from a server and how the server responds. Each message is similarly formatted - so you can think of them as like electronic telegrams.

Requests always have these three parts:

1. Request line (including the URL and the HTTP Method)
1. Request header (additional information about the request and what we expect in the response)
1. Body message (optional - things like form data)

Responses in turn always have these three parts:

1. Status (a status code indicating how the request was handled)
1. Response header (additional information about the response)
1. Body message (optional - an HTML document, JSON, XML)

#### Request URLs and Methods

In order for the server to know how to respond, it needs at least two key pieces of information: a **location (called a URL)** and an **HTTP method**.

All URLs have the same format:

<img width="1569" alt="url" src="https://media.git.generalassemb.ly/user/17300/files/63086f00-4670-11ea-94be-9ba3acdb30f1">

There are 10 possible HTTP methods, but the 5 that we'll be focused on are:

| Method Name | Description                             |
| ----------- | --------------------------------------- |
| GET         | Used for retrieving data from a server. |
| POST        | Used for sending data to the server.    |
| PUT         | Used for replacing data on the server.  |
| PATCH       | Used for updating data on the server.   |
| DELETE      | Used for deleting data from the server. |

When the server receives a request, it processes the message and then sends a response. The server always sends a response, though sometimes that response is just to tell the client that there was an error.

#### Response Status Codes

The status codes are also defined by the protocol:

| Status Code | Description   | Example                   |
| ----------- | ------------- | ------------------------- |
| 1xx         | Informational | 101 Continue              |
| 2xx         | OK            | 201 Created               |
| 3xx         | Redirection   | 301 Moved Permanently     |
| 4xx         | Client Errors | 404 Not Found             |
| 5xx         | Server Errors | 500 Internal Server Error |

#### Putting it All Together

When you type a URL in the navigation bar of your browser, you make a GET request to that URL (i.e. `http://www.google.com`). The server receives that message and formulates a response: a 200 status code (to indicate everything worked out just fine) and an HTML document for the Google home page.

When you click on a link, you're making a GET request to a URL, just like when you type the URL in the navigation bar of your browser. The server receives the request and sends a response with a new HTML document for you.

When you submit a form, you make a POST request. Data from the form is sent as part of the request body. The server processes the request (perhaps saving the request body to a database) and then sends a response.

#### You Do: Follow the Network Requests

Using the Developer tools in the browser, we can observe these requests as they happen! This can be super way to debug.

1. Open the Developer Tools in your browser and navigate to the _Network_ tab.
1. Visit a few websites.
1. Watch as the requests appear in the list.
1. Click on a request in the list to to display the details for the request.
1. Find both the request and response details.
   - Identify the request URL and the method.
   - Identify the response status code.

![See the details of a network request by clicking its Name in the list.](https://media.git.generalassemb.ly/user/17300/files/d4b57380-8898-11eb-9638-2d1c878902bb)

### Modern Web Applications

When the Web was first created, you would request a document that already existed on the server. So when you typed in `http://www.timberners-lee.com`, you received an HTML document on Tim's server. If you wanted to see the about page on Tim's website, you would navigate to `http://www.timberners-lee.com/about.html`. The important thing to note is that someone wrote those HTML pages in full and by hand.

That worked well when the Web was just used for sharing scientific documents, but imagine how different the web would be if you had to create and maintain a separate HTML document for every page in your web app! What a load of work! We don't have time for that! We're programmers!

Instead of writing all that HTML by hand, we send data to the client and let the client handle the views (as we will do in this unit with the MERN stack). Another option would be to dynamically generate an HTML document from a template (using libraries like EJS or Handlebars), and send that document using Express and other web frameworks. The latter architecture is called a monolithic application, and not what we will focus on this unit.

## Express

Express is a minimalistic web framework. Compared to web frameworks like Django and Ruby on Rails, Express is tiny. It was intentionally designed that way. It's both minimal and unopinionated. This minimalism comes with some trade-offs. On the one hand, it's extremely flexible and doesn't unnecessarily bloat your code with things that you don't need. It also means you'll be responsible for building out everything you do need.

At its core, Express is meant to be a very light abstraction over the native Node HTTP modules as a way of giving developers a few convenient features:

- Routing
- Views
- Middleware
- Modularity with subapplications

These are the core features of Express.

## Setting up an Express App

1. Create a new directory called "express-hello-world" in your lessons directory.
1. Change into the new directory.
1. Run `npm init -y`.
1. Initialize the folder as a Git repo by running `git init`. 
1. Tell Git to ignore your `node_modules` by running `echo node_modules > .gitignore`. (This shortcut simultaneously creates and writes "node_modules" to a `.gitignore` file.)
1. Type `npm install express` or the shorthand version of `npm i express`.
1. Open the folder with `code .`.

### Getting Started

Building our first server is pretty straightforward. Create an `index.js` file and write the following inside of it:

```js
const express = require('express');
const app = express();

app.listen(4000, () => {
  console.log('app listening on port 4000');
});
```

To start up our server, we just need to execute this file with node:

```sh
node index.js
```

What's going on here?

- we're requiring the Express module, which is a function that returns an instance of a web app
- we're invoking the module, instantiating a constant `app` which holds all the methods and state we use to write and run our web app
- we're starting our server (and app) by listening on port 4000 for incoming requests

When we run the application from the terminal, `node index.js`, we can see app listening on port 4000 printed to the terminal. The process continues to run, occupying the shell until we hit ctrl + c.

If we visit `http://localhost:4000` in the browser, we'll see something like this:

```sh
Cannot GET /
```

Our app is running and we're able to visit it in the browser. But we're missing routes!

### Routing

The first key feature that Express provides is simple and easy routing.

A _route_ is a URI (path) and an HTTP method. The path is part of the URL, so if we visit `http://www.cat-astrophy.com/whiskers` the URI will be `/whiskers`. The HTTP method will be the method we want to accept: `GET`, `POST`, `PUT`, or `DELETE`.

Express contains a function for each HTTP method which in turn accepts a path as the first argument then some number of callback functions. We'll start with just one callback function.

Let's update `index.js`. Add this above `app.listen()`

```js
app.get('/', (req, res) => {
  res.send('Hello World');
});
```

Let's break down the syntax here.

```js
app.get();
```

`app` is the variable we've declared above. It's an `instance` of the express server. `get()` is a function that tells express what `http method` to listen for.

```js
app.get('/');
```

The first argument that `get()` takes is the `path`. This one is set to the root of wherever our server is listening (which is `http://localhost:4000`).

```js
app.get('/', (req, res) => {});
```

The second argument that `get()` takes is a function. It's how we tell express what we want to do when the server receives a GET request at the root `'/'` url. The preferred syntax is to use arrow functions here, to keep it concise.

In the example above, the callback function is given two arguments: the first represents the HTTP request object and the second represents the HTTP response object.

**We always have to send a response**. We do that by using the response variable that we've declared in the callback. So we end up with a working route!

```js
app.get('/', (req, res) => {
  res.send('Hello World');
});
```

We've added a route and a handler for requests to the `'/'` route. In this case, we're sending the string `'Hello World'` as the response. Let's see if this takes effect in the browser:

```
Cannot GET /
```

No change. The running server won't change until we restart it and refresh the page. Once we do that, we'll see:

```
Hello World
```

Constantly needing to restart the server will get very tedious, very quickly. Instead, we can use the `nodemon` module to run our server. Instead of requiring `nodemon` in our code, we use `nodemon` from the command line. Then, `nodemon` will restart our server for us whenever a file is changed.

Install the nodemon package with `npm install nodemon --save-dev`, or with the shorthand `npm i nodemon -D`. The `-D` or `--save-dev` will install nodemon as a _devDependency_ in our `package.json`. That means it will only be used during development, not during production deployments.

> Better yet, you can install nodemon globally with `npm install --global nodemon`
>
> When using the `--global` flag (or `-g` for short), we're specifying that `nodemon` will be installed "globally" so we can utilize `nodemon` across all of our node applications (and also that it is not included in our project dependencies).

We start up our application a bit differently now:

```sh
nodemon index.js
```

#### Params in Express

How do we make our routes dynamic? Using parameters!

Route parameters give us flexibility when writing routes in Express.

Let's update `index.js` to include:

```js
app.get('/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});
```

> Note: the `request` and `response` objects are often shortened to just `req` and `res`.

Our route has changed! What is different?

Route parameters are named segments of our URI, they are placeholders (like variables) that capture values at their location in a URL. These values are held in the `req.params` object and can be used to deliver custom responses to an HTTP request.

Now if we visit `http://localhost:4000/Whiskers`, we should see:

```
hello Whiskers
```

What do you think we'll see if we visit `http://localhost:4000/Purrasaurus-rex`?

Where else have we seen these kinds of dynamic segments in routes?

## Introducing Middleware

One important feature that Express provides is Middleware.

Middleware is just a function that transforms the `request` and/or the `response` object. Middleware functions get called in a series and each updates or transforms the `request` and/or the `response` object before passing them on to the next function in the series.

By default, Express does not handle information posted from a form. In order to get form or JSON data in a `POST` request, we need to tell it to use some middleware – code that runs in between receiving the request and sending the response.

```js
// add `express.json` middleware which will parse JSON requests into
// JS objects before they reach the route files.
// The method `.use` sets up middleware for the Express application
app.use(express.json());
// this parses requests that may use a different content type
app.use(express.urlencoded({ extended: true }));
```

Another thing to note is that, in Express, `req.params` holds just path params. Anything handled by the parser will be held in `req.body`.

Add a post request in `index.js`:

```js
app.post('/', (req, res) => {
  res.send(`hello ${req.body.name}`);
});
```

In order to post some data without a front end application, we'll need to use an alternative tool. Normally the data in the `body` would come from an HTML form that the user filled in, but as back end developers, we don't want to have to worry about a front end! Let's download and install [Postman](https://www.postman.com/downloads/), a popular tool used by back end developers.

### Using Postman

Lets take a few minutes to learn about the interface in Postman and [make our first request](https://learning.postman.com/docs/getting-started/sending-the-first-request/).

### Build an App in Express

Since we're just starting out with Express, lets build an app that will just work on some data in memory. Copy the following data to the project:

```js
// moviesData.js

const movies = [
  {
    id: 181812,
    video: 'https://www.youtube.com/embed/8Qn_spdM5Zg',
    title: 'Star Wars: The Rise of Skywalker',
    release_date: '2019-12-20',
    poster: 'https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
    image: 'https://image.tmdb.org/t/p/w1280/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg',
    rotten_tomatoes: 53,
    audience_score: 86,
    summary:
      'The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.',
  },
  {
    id: 530915,
    title: '1917',
    release_date: '2019-12-10',
    poster: 'https://image.tmdb.org/t/p/w500/Aqr1jDwGb1IfAB6Lh1fNx7AbEZE.jpg',
    image: 'https://image.tmdb.org/t/p/w1280/tUWivz05fcY14K6RzicRm7IHkUD.jpg',
    rotten_tomatoes: 90,
    audience_score: 90,
    summary:
      "At the height of the First World War, two young British soldiers, Schofield and Blake are given a seemingly impossible mission. In a race against time, they must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers—Blake's own brother among them.",
  },
  {
    id: 431693,
    title: 'Spies in Disguise',
    release_date: '2019-12-25',
    poster: 'https://image.tmdb.org/t/p/w500/30YacPAcxpNemhhwX0PVUl9pVA3.jpg',
    image: 'https://image.tmdb.org/t/p/w1280/qlYxtqVfu2LOdvYMMDPCSGX0Oz0.jpg',
    rotten_tomatoes: 76,
    audience_score: 91,
    summary:
      "When the world's best spy is turned into a pigeon, he must rely on his nerdy tech officer to save the world.",
  },
  {
    id: 331482,
    title: 'Little Women',
    release_date: '2019-12-25',
    poster: 'https://image.tmdb.org/t/p/w500/mSmiB8XjUnR1GSIljuCPGsk0cwX.jpg',
    image: 'https://image.tmdb.org/t/p/w1280/3uTxPIdVEXxHpsHOHdJC24QebBV.jpg',
    rotten_tomatoes: 95,
    audience_score: 92,
    summary:
      'Four sisters come of age in America in the aftermath of the Civil War.',
  },
  {
    id: 366668,
    title: 'Playmobil: The Movie',
    release_date: '2019-12-06',
    poster: 'https://image.tmdb.org/t/p/w500/zPQzLZnfVw9fbXyxxglyOsmQBlu.jpg',
    image: 'https://image.tmdb.org/t/p/w1280/axmxVeX5R1FfN7w4LNFehskDxW1.jpg',
    rotten_tomatoes: 17,
    audience_score: 61,
    summary:
      'Marla is forced to abandon her carefully structured life to embark on an epic journey to find her younger brother Charlie who has disappeared into the vast and wondrous animated world of Playmobil toys.',
  },
];

module.exports = movies;
```

### How will we import it to use it in our index.js?

How can we use the [`require` keyword](https://nodejs.org/en/knowledge/getting-started/what-is-require/) we've seen so far to import data from another JS file?

>Note: As of Node.js v16, ES modules (i.e., the `import` syntax we saw in React) is supported, but we will continue to use CommonJS modules until it's more widely adopted.

<details><summary>See solution</summary>
  
  ```js
  const moviesData = require('./moviesData.js');
  ```
  
</details>

## Make a GET request for ALL of the movies

When we make a request to the `/movies` path, we want to send back all of the movies! First, we'll need a route to listen for requests at the `/movies` location.

### What method do we want to listen for?

Instead of using the `.send()` method on the response, we'll be using a new method called `.json()`. This ExpressJS method converts any JavaScript arrays or objects to JSON before it sends the response to the client. _Don't confuse this method with the similarly named method you've used with the Fetch API in the browser._

>Technically, you can use `.send()` to respond with JSON data as well, but `.json()` is more specific and explicit. 

```js
app.get('/movies', (req, res) => {
  res.json(moviesData);
});
```

Make sure your server is running and make a request to `http://localhost:4000/movies` from Postman.

## Make a request for a single movie

One thing that we know about our movies is that each one has a unique id associated with them. Lets use that to make a request for an individual movie with a little help from parameters:

```js
app.get('movies/:id', (req, res) => {
  // const id = how do we get the id from the request params?
  // const movie = how can we use the id to send back the right movie?
  // res.send(movie);
});
```

Test it out in Postman using: `http://localhost:4000/movies/366668`


### req.query

A query is a key-value pair separated with an `=`, and added to the URL with a `?`.

`?someKey=someValue`

```
localhost:3000/howdy/bob?title=duke
```

```javascript
app.get('/howdy/:firstName', function(req, res) {
  console.log(req.params);
  console.log(req.query);
  res.send('hello ' + req.query.title + ' ' + req.params.firstName);
});
```

You can add multiple queries

```
localhost:3000/howdy/bob?title=duke&year=2001
```

Spaces are represented with a `%20`.

How might we use this syntax to create an endpoint to find all movies with audience scores greater than 80? 

How about audience scores greater than 80 AND rotten tomatoes ratings of 90 or higher? 

## Lab: Create a New Movie

Try out using Postman to make a request to the server that adds a new movie to the movies array when you make a **POST** request to: `http://localhost:4000/movies/`! Use the data in the body of the request inside your callback to push the new movie to the movie array.

Make a GET request to the server from Postman to verify that the request worked!

## Bonus Lab: Delete a Movie

Try out using Postman to make a request to the server that **removes a specific movie** to the movies array! Make a GET request to the server from Postman to verify that the request worked!

- What method would you use?
- What URL would you need to use (remember you need to update a specific movie)?

## Double Bonus Lab: Update a Movie

Try out using Postman to make a request to the server that **updates a specific movie** to the movies array! Make a GET request to the server from Postman to verify that the request worked!

- What method would you use?
- What URL would you need to use?
- Will you need to send data in the body to the server?

## Closing

Our first step is to get a basic understanding of Express, how it works and what it does for us. Over the next few lessons, we'll learn how to build larger applications using Express.