import "../App.css";
import Experiment from "./experiments";
import SandpackWrapper from "./SandpackWrapper";

const cloudinaryImages = `import {Cloudinary} from "@cloudinary/url-gen";
import { AdvancedImage} from "@cloudinary/react";

export default function App() {
  // instantiate Cloudinary and call it's image function
  const cld = new Cloudinary({cloud: {cloudName: 'cloudinary-training'}});
  const cldImage = cld.image('cld-sample');
  const cldImageQ = cld.image('cld-sample');
  cldImageQ.quality("auto");

  return (
    <div>
    <p> <a target="_blank" href={cldImage.toURL()}>{cldImage.toURL()}</a></p>
    <AdvancedImage height="300" cldImg={cldImage} />
    <p> <a target="_blank" href={cldImageQ.toURL()}>{cldImageQ.toURL()}</a></p>
    <AdvancedImage height="300" cldImg={cldImageQ} />
    </div>
  )
}`;

const cloudinaryVideoURLs = `import {Cloudinary} from "@cloudinary/url-gen";
import { AdvancedVideo} from "@cloudinary/react";

export default function App() {
  // instantiate Cloudinary and call it's video function
  const cld = new Cloudinary({cloud: {cloudName: 'cloudinary-training'}});
  const cldVideo = cld.video('climbing');
  const cldVideoQ = cld.video('climbing');
  cldVideoQ.quality("auto");

  return (
    <div>
    <p> <a rel="noreferrer" target="_blank" href={cldVideo.toURL()}>{cldVideo.toURL()}</a></p>
    <AdvancedVideo controls height="300" cldVid={cldVideo} />
    <p> <a target="_blank" href={cldVideoQ.toURL()}>{cldVideoQ.toURL()}</a></p>
    <AdvancedVideo controls height="300" cldVid={cldVideoQ} />
    </div>
  )
}`;

export default function Quality() {
  return (
    <div className="code-container">
      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Using Quality with Images
      </h3>
      <Experiment
        codeString={`cldImageQ.quality("auto:best");
cldImageQ.quality("80");`}
        experimentTitle={"Determine File Size Change Due to Quality."}
        instructions={[
          "Right click image and open in new tab",
          "Open Chrome inspector Network tab and refresh",
          "Locate size column for image an note the size of the image file with and with out quality",
          "Try different quality options like q_auto:good, q_auto:eco and q_auto:best",
          "Try using numeric quality values like q_80",
        ]}
      />
      <SandpackWrapper numberOnPage="2" scriptName={cloudinaryImages} />
      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Using Quality with Video
      </h3>
      <Experiment
        codeString={`cldVideoQ.quality("auto:eco");
cldVideoQ.quality("auto:good");`}
        experimentTitle={"Determine File Size Change Due to Quality."}
        instructions={[
          "Right click video and open in new tab",
          "Open Chrome inspector",
          "Click on vertical ellipses and Add more tools",
          "Add Media and this should create a media tab",
          "Open Chrome inspector Network tab and refresh",
          "Click on the video file and you'll find the file size there",
          "Try different quality options like q_auto:good, q_auto:eco and q_auto:best",
        ]}
      />
      <SandpackWrapper numberOnPage="2" scriptName={cloudinaryVideoURLs} />
    </div>
  );
}
