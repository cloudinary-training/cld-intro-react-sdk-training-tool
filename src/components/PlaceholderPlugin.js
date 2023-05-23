import React from "react";
import "../App.css";
import SandpackWrapper from "./SandpackWrapper";
import Experiment from "./experiments";

const placeholder = `import {CloudinaryImage} from "@cloudinary/url-gen";
  import { AdvancedImage, placeholder} from "@cloudinary/react";
  export default function App() {
      const cldImage = new CloudinaryImage("doctor", { cloudName: "cloudinary-training" });
      // if no modeType is specified "blur" is the default
      const modeType = "blur" 
      return (
          <div>
          <h3>Render a Placeholder Image</h3>
          <h4>Image with {modeType} Placeholder </h4>
          <AdvancedImage width="100%" cldImg={cldImage} plugins={[placeholder({mode: modeType})]}/>
      </div>
      )
  }`;

function PlaceholderPlugin() {
  return (
    <div className="code-container">
      <h2
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Placeholder Plugin:
      </h2>{" "}
      <Experiment
codeString={`const modeType = "pixelate";
<AdvancedImage width="100%" cldImg={doctor} plugins={[placeholder({mode: modeType})]}/>`}
        experimentTitle={`Discover and Experiment with Placeholder Mode Types`}
        instructions={[
          `There are 4 mode types to experiment with: blur, pixelate, vectorize, and predominant`,
          `Change the mode types`,
          `Note the sizes of the images downloaded as placeholders`,
          `Note the types you would prefer as a user`,
        ]}
      />
      <SandpackWrapper numberOnPage="1" scriptName={placeholder} />
    </div>
  );
}

export default PlaceholderPlugin;
