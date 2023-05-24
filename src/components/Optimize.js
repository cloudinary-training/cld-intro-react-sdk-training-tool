import "../App.css";
import Experiment from "./experiments";
import SandpackWrapper from "./SandpackWrapper";

const cloudinaryImage = `import {Cloudinary} from "@cloudinary/url-gen";
import { AdvancedImage} from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

export default function App() {
  // instantiate Cloudinary and call its image function
  const cld = new Cloudinary({cloud: {cloudName: 'cloudinary-training'}});
  const cldImage = cld.image('cld-sample');
  const cldImageOptimize = cld.image('cld-sample');
  cldImageOptimize.resize(fill().width(400).height(400).gravity("auto")).format("auto").quality("auto");

  return (
    <div>
    <p> Original Dimension: 1870 x 1250</p>
    <p> Original Size: 465.67 KB</p>
    <AdvancedImage height="300" cldImg={cldImage} />
    <p> <a target="_blank" rel="noreferrer" href={cldImageOptimize.toURL()}>{cldImageOptimize.toURL()}</a></p>
    <AdvancedImage height="300" cldImg={cldImageOptimize} />
    </div>
  )
}`;

const cloudinaryVideo = `import {Cloudinary} from "@cloudinary/url-gen";
import { AdvancedVideo} from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

export default function App() {
  // instantiate Cloudinary and call its video function
  const cld = new Cloudinary({cloud: {cloudName: 'cloudinary-training'}});
  const cldVideo = cld.video('dog-frisbee');
  const cldVideoOptimize = cld.video('dog-frisbee');
  cldVideoOptimize.resize(fill().width(244).height(400).gravity("auto")).format("auto").quality("auto");

  return (
    <div>
    <p> Original Dimension: 1920 x 1280</p>
    <p> Original Size: 3.67 MB</p>

    <AdvancedVideo controls height="300" cldVid={cldVideo} />
    <p> <a target="_blank" rel="noreferrer" href={cldVideoOptimize.toURL()}>{cldVideoOptimize.toURL()}</a></p>
    <AdvancedVideo controls height="300" cldVid={cldVideoOptimize} />
    </div>
  )
}`;

export default function Format() {
  return (
    <div className="code-container">
      <h2
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        <u>Optimize</u>
      </h2>
      <div className={"font-sans text-clddarkblue"}>
        In these examples, you'll see the combined optimization effects of reducing
        the size of your asset (crop), compressing it (quality), and providing a
        way for the asset to become the best file type (format) for the browser or device
        the asset is rendered on. The "auto" options ensure that the subject of your
        cropped asset is focused on, the details in your compressed assets are not
        lost, and the best format is delivered.
      </div>
      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Optimize Images (Crop, Gravity Auto, Format Auto, and Quality
        Auto):
      </h3>
      <Experiment
        codeString={`  cldImageOptimize.quality("80").format("jpg").resize(fill().width(400).height(400));`}
        experimentTitle={`Explore the Outcomes of Removing the "auto" Parameter`}
        instructions={[
          `You will need to use Chrome inspector to see details regarding size, format and content type`,
          `Inspect and note the size of the image after applying cropping, compression and formatting`,
          `Remove "g_auto"`,
          `What happens to the cropped image when "g_auto" is not applied?`,
          `Modify "q_auto" to "q_80" or use any number to see the difference`,
          `What values of quality do you need to use to get the same compression without pixelation that you get with q_auto?`,
          `Modify the format type to a value that can be used for an image`,
          "What are the potential problems of choosing the image format?",
          `What happens to the cropped image when "g_auto" is not applied?`,
        ]}
      />
      <SandpackWrapper numberOnPage="2" scriptName={cloudinaryImage} />

      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Optimize Video (Crop, Gravity Auto, Format Auto, and Quality
        Auto):
      </h3>
      <Experiment
        codeString={`cldVideoOptimize.resize(fill().width(244).height(400)).format("mp4").quality("80")`}
        experimentTitle={`Explore the Outcomes of Removing the "auto" Parameter`}
        instructions={[
          `You will need to use Chrome inspector to see details regarding size, format and content type`,
          `Inspect and note the size of the video after applying cropping, compression and formatting`,
          `Remove "g_auto"`,
          `What happens to the cropped video and "g_auto" is not applied?`,
          `Modify "q_auto" to "q_80" or use any number to see the difference`,
          `What values of quality do you need to use to get the same compression without pixelation that you get with q_auto?`,
          `Modify the format type to a value that can be used for an image`,
          "What are the potential problems of choosing the image format?",
          `What happens to the cropped image when "g_auto" is not applied?`,
        ]}
      />
      <SandpackWrapper numberOnPage="2" scriptName={cloudinaryVideo} />
    </div>
  );
}
