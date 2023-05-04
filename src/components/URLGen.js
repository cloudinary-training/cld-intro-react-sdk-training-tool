import "../App.css";
import SandpackWrapper from "./SandpackWrapper";
import Experiment from "./experiments";

const cloudinaryImageURLs = `import {Cloudinary,CloudinaryImage} from "@cloudinary/url-gen";
export default function App() {
  // instantiate Cloudinary and call its image function
  // use toURL() to create a URL and use it in an HTML image element
  const cld = new Cloudinary({cloud: {cloudName: 'cloudinary-training'}}); 
  const cldImage = cld.image('cld-sample');
  const cldURL = cldImage.toURL();

  // instantiate CloudinaryImage
  // use toURL() to create a URL and use it in an HTML image element
  const cloudinaryImage = new CloudinaryImage("cld-sample", { cloudName: "cloudinary-training" })
  const cloudinaryImageURL = cloudinaryImage.toURL();

  return (
    <div>
    <p>cldImage:<br/> <a rel="noreferrer" target="_blank" href={cldURL}>{cldURL}</a></p>
    <img alt="person with dalmatian" height="250px" width="374" src={cldURL} />
    <p>cloudinaryImage:<br/> <a target="_blank" href={cloudinaryImageURL}>{cloudinaryImageURL}</a></p>
    <img alt="person with dalmatian" height="250px" width="374" src={cloudinaryImageURL} />
    </div>
  )
}`;

const cloudinaryVideoURLs = `import {Cloudinary,CloudinaryVideo} from "@cloudinary/url-gen";
export default function App() {
  // instantiate Cloudinary and call its video function
  // use toURL() to create a URL and use it in an HTML video element
  const cld = new Cloudinary({cloud: {cloudName: 'cloudinary-training'}}); 
  const cldVideo = cld.video('hike-up');
  const cldVideoURL = cldVideo.toURL(); 


  // instantiate CloudinaryVideo
  // use toURL() to create a URL and use it in an HTML image element
  const cloudinaryVideo = new CloudinaryVideo("hike-up", { cloudName: "cloudinary-training" })
  const cloudinaryVideoURL = cloudinaryVideo.toURL(); 
  return (
    <div>
    <p>cldVideo:<br/> <a rel="noreferrer" target="_blank" href={cldVideoURL}>{cldVideoURL}</a></p>
    <video controls height="250px" width="374" > 
        <source src={cldVideoURL} type="video/mp4" />
    </video>
    <p>cloudinaryVideo:<br/> <a rel="noreferrer" target="_blank" href={cloudinaryVideoURL}>{cloudinaryVideo.toURL()}</a></p>
    <video controls height="250px" width="374"> 
        <source src={cloudinaryVideoURL} type="video/mp4" />
    </video>
    </div>
  )
}`;

export default function URLGenComponent() {
  return (
    <div className="code-container">
      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Image URL Generator
      </h3>
     
      <Experiment notes={`The URL Generator is available as an npm package. It provides three classes that 
      can be used to configure and generate image and video URLs and elements: 
      Cloudinary, CloudinaryImage, and CloudinaryVideo.As you see how to create Cloudinary 
      transformations for image and video URLs, you will learn learn how to generate URLs for images and video. 
      You need to supply your Cloudinary cloud name and an asset public id to instantiate an asset. 
      Once you have an asset object, you can use url-gen to apply transformation functions to build image and video elements. 
      If you only need the URL, you can call the toURL() function to generate just the URL.`}  
        codeString={`const cld = new Cloudinary({cloud: {cloudName: '<my cloud name>'}}); 
const cldImage = cld.image('<my public id>');
const cldVideo = cld.video('<my public id>');
const cloudinaryImage = new CloudinaryImage("<my public id>", { cloudName: "<my cloud name>" });
const cloudinaryVideo = new CloudinaryVideo("<my public id>", { cloudName: "<my cloud name>" })
        `}
        experimentTitle={"Experiment by modifying the public id and cloud name."}
        instructions={[
          "Replace cld.image() and cloudinaryImage() public ids with public ids from your own cloud",
          `Try some of these other public ids from the "cloudinary-training" cloud: cld-sample-3, cld-sample-5`
        ]}
      />
      <SandpackWrapper numberOnPage="2" scriptName={cloudinaryImageURLs} />
      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Video URL Generator
      </h3>
      <SandpackWrapper numberOnPage="2" scriptName={cloudinaryVideoURLs} />
    </div>
  );
}
