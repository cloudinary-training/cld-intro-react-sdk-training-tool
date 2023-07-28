import "../App.css";
import Experiment from "./experiments";
import SandpackWrapper from "./SandpackWrapper";

const cloudinaryAdvancedImage = `import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
import {edit} from "@cloudinary/url-gen/actions/animated";
import {defaultImage} from "@cloudinary/url-gen/actions/delivery";

export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cloudinary-training'
    }
  });
  // gifs are resource type image but they can use video transformations
  // create a slow motion gif using delay
  const gif = cld.image("samples/animals/kitten-playing");
  gif.animated(edit().delay(200))

  // how to handle the possiblity of missing images 
  // the "non_existing_id.png" does not exist and the alt string will show when rendered
  const image = cld.image('non_existing_id.png');
  // create a placeholder for the image in case the image isn't found
  const avatarDefaultImage = cld.image('non_existing_id.png')
    .delivery(defaultImage("placeholders:avatar.png"));
 
  return (
    <div>
      <p>Use video editing transformation on GIF image</p>
      <AdvancedImage cldImg={gif} alt="gif image in slower motion" />
      <p>Using placeholder for missing images</p>
      <div style={{display:"flex", justifyContent: "space-between"}}>
        <div>        
          <AdvancedImage cldImg={image} alt="non existent image" />
        </div>
        <div>     
          <AdvancedImage cldImg={avatarDefaultImage} alt="default image" />
        </div>
      </div>
    </div>
  )
}`;

export default function ImageOnly() {
  return (
    <div className="code-container">
      <h2
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Image Only Transformations
      </h2>{" "}
      <Experiment
        codeString={``}
        experimentTitle={
          `Discover and experiment with transformations that can only be applied to images`
        }
        instructions={[
          `Find "image only" transformations in the documention`,
          `Write code to render them`,
          `Remember to import the functions the image transformations require`,
        ]}
      />
      <SandpackWrapper numberOnPage="1" scriptName={cloudinaryAdvancedImage} />
    </div>
  );
}
