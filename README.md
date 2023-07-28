# Introduction to Cloudinary using the React SDK

This project uses Sandpack to provide in app code sandboxes.  You can modify and run the code in each sandbox. 

## Upload Widget

You need to create an unsigned preset in order to use the Upload Widget on the frontend. Cloudinary presets provide instructions that are executed during the upload. The purpose of an unsigned preset is to allow for an upload on the frontend without having to expose your API SECRET. In the app for this course, you will enter your upload preset name and your cloud name to authorize the upload.

In order to create an unsigned preset, you will need to log into your Cloudinary account and go to the Upload section of your Product Environment Settings. If you haven't created an unsigned preset previously, you'll need to click the link that authorizes creation of unsigned presets. Once clicked, it will state "Unsigned uploading enabled".  

The authorization provided by an unsigned preset allows you to code and configure an Upload Widget on a web page without using the API SECRET, which is used for backend uploads. Your API SECRET should always be kept a secret. When you are using an unsigned preset, it is a good idea to require authentication and authorization to the web page that renders the Upload Widget.  This will prevent unwanted access/uploading to your cloud. 

More details on creating unsigned upload presets are available in our [documentation](https://cloudinary.com/documentation/upload_presets).

## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, please run `npm i` to install the necessary libraries for the project. From there, run `npm start`. Doing so will run the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

## Deployment
This code is deployed to https://cloudinary-training.github.io/cld-intro-react-sdk-training-tool/ using GitHub Pages.
The code is maintained in the `main` branch, so continue to push changes there.  When you're ready to host the changes, run `npm run deploy`.  This will call the `predeploy` script which will build the project in a folder named build and then commit to the `gh-pages` branch.  This branch will be served on github.io. 
Read more [here](https://github.com/gitname/react-gh-pages).
