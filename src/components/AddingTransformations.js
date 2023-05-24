import "../App.css";
import Experiment from "./experiments";
import SandpackWrapper from "./SandpackWrapper";

const cloudinaryAdvancedImage = `import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
import {outline, cartoonify} from "@cloudinary/url-gen/actions/effect";

export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cloudinary-training'
    }
  }); 
  const myImage = cld.image('cld-sample').resize(fill().width(350).height(350).gravity("auto"));
  return (
    <div>
      <AdvancedImage cldImg={myImage.effect(cartoonify())} />
    </div>
  )
}`;

export default function AddingTransformations() {
  const experimentString1 = `
  // apply the transformation to the existing image object
    return (
        <div>
          <AdvancedImage cldImg={myImage.effect(cartoonify())} />
          <AdvancedImage cldImg={myImage.effect(outline())} />
        </div>
      )
  // create a new object and apply the outline to the new object
    const myImage2 = cld.image('cld-sample').resize(fill().width(350).height(350).gravity("auto"));
      return (
        <div>
          <AdvancedImage cldImg={myImage.effect(cartoonify())} />
          <AdvancedImage cldImg={myImage2.effect(outline().width(1))} />
        </div>
      )
    `;
  const experimentTitle1 =
    "Experiment by creating a second AdvancedImage that uses the same Image variable.";
    const notes = `Both new Cloudinary.image() and new CloudinaryImage() instantiate objects 
    that are mutable. While there is no way to remove a transformation from an image instance, 
    if you modify the instance by adding a url-gen action, you will see all renderings of your 
    instance updated with the new transformation added on to it. If you want to create a new 
    transformation without affecting or adding to an existing transformation, create a new instance of 
    Cloudinary.image or CloudinaryImage.`;
  const instructions1 = [
    "Start by running the code.",
    "Then make a copy of the AdvancedImage component directive. In the second AdvancedImage Element use the outline effect.",
    "Notice that the effect was applied to both rendered images.",
    "Now create a new image object and apply the outline to the new object.",
  ];

  return (
    <div className="code-container">
      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Adding a Transformation to an Image Instance
      </h3>
      <Experiment
        codeString={experimentString1}
        experimentTitle={experimentTitle1}
        instructions={instructions1} 
        notes={notes}
      />
      <SandpackWrapper numberOnPage="1" scriptName={cloudinaryAdvancedImage} />
    </div>
  );
}
