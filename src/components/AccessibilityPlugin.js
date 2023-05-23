import React from "react";
import "../App.css";
import Experiment from "./experiments";
import SandpackWrapper from "./SandpackWrapper";

const accessbility = `import {CloudinaryImage} from "@cloudinary/url-gen";
    import {scale} from "@cloudinary/url-gen/actions/resize";
    import { AdvancedImage, accessibility} from "@cloudinary/react";
    export default function App() {
        const cloudinaryImage = new CloudinaryImage("sample", { cloudName: "cloudinary-training" });
        return (
            <div>
            <h3>Render Accessible Images</h3>
            <AdvancedImage cldImg={cloudinaryImage.resize(scale().width(300))} />
            <h3>Default Accessibility</h3>
            <AdvancedImage 
                cldImg={cloudinaryImage} 
                plugins={[accessibility()]} />
            <h3>Colorblind Accessibility</h3>
            <AdvancedImage
                cldImg={cloudinaryImage}
                plugins={[accessibility({ mode: "colorblind" })]}
            />
            <h3>Monochrome Accessiblity</h3>
            <AdvancedImage
                cldImg={cloudinaryImage}
                plugins={[accessibility({ mode: "monochrome" })]}
             />
            </div>
        )
    }`;

function AccessibilityPlugin() {
  return (
    <div className="code-container">
      <h2
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Accessiblity Plugin:
      </h2>{" "}
      <Experiment
        codeString={`plugins={[accessibility({ mode: "monochrome|colorblind|brightmode|darkmode(default)" })]}`}
        experimentTitle={`Experiment with Accessibility Modes`}
        instructions={[
          `"darkmode" is the default when you omit a mode and is useful for users with cataracts or other light sensitivity`,
          `Try "darkmode" `,
          `"brightmode" is useful for users with good or corrected vision but can lead to myopia (nearsightedness) if there is too much reading exposure in brightmode`,
          `Try "brightmode"`,
        ]}
      />
      <SandpackWrapper numberOnPage="1" scriptName={accessbility} />
    </div>
  );
}

export default AccessibilityPlugin;
