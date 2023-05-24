import "../App.css";
import Experiment from "./experiments";
import SandpackWrapper from "./SandpackWrapper";

const cloudinaryAdvancedImage = `import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {pad} from '@cloudinary/url-gen/actions/resize';
import { color } from "@cloudinary/url-gen/qualifiers/background";
export default function App() {
  const cld = new Cloudinary({ cloud: {cloudName: 'cloudinary-training'}});
  const cldImage = cld.image('cld-sample')
      .resize(pad().width(350).height(200)
      .background(color("auto")));
  return (
    <div>
      <AdvancedImage cldImg={cldImage} />
    </div>
  )
}
`;
const cloudinaryAdvancedVideo = `import {AdvancedVideo} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {pad} from '@cloudinary/url-gen/actions/resize';
import { color } from "@cloudinary/url-gen/qualifiers/background";

const cld = new Cloudinary({ cloud: {cloudName: 'cloudinary-training'}});
const cldVideo = cld.video('dog-frisbee').resize(pad().width(300).height(400).background(color("#ff0000")));
export default function App() {
  return (
    <div className="App">
      <AdvancedVideo cldVid={cldVideo} controls />
    </div>
  );
}
`;
export default function PadWithBackground() {
  return (
    <div className="code-container">
      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Pad Images (using Background Auto):
      </h3>
      <p className={"font-sans mt-1 mb-1 text-clddarkblue"}>
        You can assign a color or use auto to use the predominant color in the
        image.
      </p>
      <Experiment
        codeString={`const cldImage = cld.image('cld-sample').resize(pad().width(350).height(200));
return (
  <div>
    <AdvancedImage style={{outline: "5px solid black"}} cldImg={cldImage} />
  </div>
)`}
        experimentTitle={
          "Experiment with the boundaries of an image when you use padding, as well as background colors."
        }
        instructions={[
          `Remove background functionality from the transformation`,
          "Add CSS to the AdvancedImage component to see the actual size of the image rendered",
          "Add colors as demonstrated with the AdvancedVideo component to the background",
        ]}
      />
      <SandpackWrapper numberOnPage="2" scriptName={cloudinaryAdvancedImage} />

      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Pad Video (using Background Color):
      </h3>
      <Experiment
        codeString={`const cldVideo = cld.video('climbing').resize(pad().width(300).height(400).background(color("auto")));
//remove background transformation
const cldVideo = cld.video('dog-frisbee').resize(pad().width(300).height(400));
<AdvancedVideo style={{outline: "5px solid green"}} cldVid={cldVideo} controls />
        `}
        experimentTitle={
          "Experiment with the boundaries of an image when you use padding, as well as background colors."
        }
        instructions={[
          `Try applying backround "auto" to the video`,
          "Refresh the page, remove background from the video, and add CSS to the Advanced Video component to see the actual size of the video rendered",
        ]}
      />
      <SandpackWrapper numberOnPage="2" scriptName={cloudinaryAdvancedVideo} />
    </div>
  );
}
