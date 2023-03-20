# Upload, Transform, Deliver with Cloudinary React SDK

This project uses Sandpack to provide in app code sandboxes.  You can modify and run the code in each Sandbox. 

## Upload Widget

You need to create an unsigned preset in order to use the Upload Widget in the Front End.  Cloudinary presets provide instructions that are executed during the upload.  The purpose of the unsigned preset is to allow for an upload in the Front End without having to expose your Cloud's API SECRET.  In the sandox code for this course, you will enter you upload preset name and cloud name to authorize the upload.

In order to create your unsigned preset, you will need to be be able to login to the cloud specified by the cloud name and go to the Upload Settings page.   If you haven't created an unsigned preset before, you'll need to click the link that authorizes creation of unsigned presets.  Once click, it will provide a statement that "Unsigned presets are enabled".  

The authorization provided by the unsigned preset allows you to code and configure an Upload Widget on a web page without using the API SECRET which is used for backend uploads.  On the backend you can hide the API SECRET from your user.  Note that when you are using an unsigned preset, it is a good idea to require authentication and authorization to the web page that renders the Upload Widget.  This will prevent unwanted access to uploading to your cloud. 

Link to image/gif showing how to create unsigned preset.

## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

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