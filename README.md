<h1 align="center">
<img src="https://user-images.githubusercontent.com/42696800/160224794-a3f0e445-164a-45ec-92ac-7d41b5120984.png" alt="logo" width="30" height="30" />
Meme Generator
<p align='center'>

<img src='https://img.shields.io/github/last-commit/Rajatm544/react-meme-generator' alt='last commit'>
<img src='https://img.shields.io/website?down_message=Down&up_message=Up&url=https%3A%2F%2Fkosells.herokuapp.com%2F' alt='website'>
<img src='https://img.shields.io/maintenance/yes/2022'
<img src='https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat' alt='maintained'>
</p>
 
</h1>
An app to generate memes! Choose where to place your text and generate the perfect meme for every situation. Hit the download button after you're done adding text and share it around. The app is built using React.js and Materilize CSS
<br/>

## Getting Started

- Fork this repo and run the `git clone <forked repo>` command from your terminal/bash.
- Run `npm install`
- Run `npm start` to run locally
- Run `npm run build` to get the static folder for deploying the app on Netlify

_P.S: Do star this repo after you fork it :)_

## Demo

The app has been hosted on Netlify [here](https://rajat-memegenerator.netlify.app/).
A video demo for the app can be found at <https://youtu.be/786s3io7nCs>

<div align="center">
<img src="https://user-images.githubusercontent.com/42696800/160225457-38136c09-46af-4ef8-a77b-bb91e6f46ec2.png" alt="home page" width="534" height="300" />
</div>

## Info

- The app is built using React hooks and Materialize CSS as part of the **dunnhumby's Code Combat 3.0 (React)** challenge on Techgig.
- The api used to fetch the memes is <https://api.imgflip.com/get_memes>
- [Favicon.io](https://favicon.io/) and [Flaticon](https://www.flaticon.com/) are used to obtain and add the favicons
- The app has 2 input fields to add the top and bottom texts.
- The [html-to-image](https://www.npmjs.com/package/html-to-image) package is used to convert the HTML div into a png file.

## A Few Features

There were a few challenges that came up during the development of the application. In this section, I aim to clarify my approach in overcoming these challeges, as a way to help you understand the code better!

### Fetching meme images without server side code

- As explained earlier, the API endpoint provides 100 meme responses, and one of these is selected at random each time

### Capturing meme as downloadable file

- The html-to-image npm package allows the users specify which part of the document.body to download as an image file
- This supports several image file types, but this app downloads only .png files

### Text color picker 

- Not all memes have the same background! So change your text color using the color picker
- The options are button elements with Materialize Css classNames to provide functionality

### Easy to place text at top or bottom

- Use one or both input fields to control the text placement.

Any more suggestions are always welcome in the PRs!

## Technologies Used

Some of the technologies used in the development of this web application are as follow:

- [React.js](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Materialize CSS](https://materializecss.com/):  A modern responsive front-end framework based on Material Design
- [html-to-image](https://www.npmjs.com/package/html-to-image): Generates an image from a DOM node using HTML5 canvas and SVG.
