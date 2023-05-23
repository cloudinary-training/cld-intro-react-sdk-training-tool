import "../App.css";
import Experiment from "./experiments";
import SandpackWrapper from "./SandpackWrapper";

const cloudinaryAdvancedImage = `import {AdvancedImage} from '@cloudinary/react';
import {CloudinaryImage} from "@cloudinary/url-gen";
import {scale} from '@cloudinary/url-gen/actions/resize';

export default function App() {
  const image = new CloudinaryImage('cld-sample',{cloudName:'cloudinary-training'});

  image.resize(scale().width(350));
  return (
    <div>
      <AdvancedImage cldImg={image} />
    </div>
  )
}
`;
const cloudinaryAdvancedVideo = `import {AdvancedVideo} from '@cloudinary/react';
import {CloudinaryVideo} from "@cloudinary/url-gen";
import {scale} from '@cloudinary/url-gen/actions/resize';


const video = new CloudinaryVideo('climbing',{cloudName:'cloudinary-training'});
video.resize(scale().width(350));
export default function App() {
  return (
    <div className="App">
      <AdvancedVideo cldVid={video} controls cldPoster="auto" />
    </div>
  );
}
`;

export default function CldBuildVideo() {
  return (
    <div className="code-container">
      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Scale Image:
      </h3>
      <Experiment
        codeString={`image.resize(scale().width(350).height(350))`}
        experimentTitle={
          "Experiment by adding both height and width to the image transformation."
        }
        instructions={[
          `Scaling can result in skewed images if you supply a height and width that don't match the original aspect ratio`,
          "Add a height function call to the transformation.",
          "Try different values for height and width",
        ]}
      />
      <SandpackWrapper numberOnPage="2" scriptName={cloudinaryAdvancedImage} />

      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Scale Video:
      </h3>
      <Experiment
        codeString={`video.resize(scale().width(350).height(350))`}
        experimentTitle={
          "Experiment by adding both height and width to the video transformation."
        }
        instructions={[
          `Scaling can result in skewed images if you supply a height and width that don't match the original aspect ratio`,
          "Add a height function call to the transformation.",
          "Try different values for height and width",
        ]}
      />
      <SandpackWrapper numberOnPage="2" scriptName={cloudinaryAdvancedVideo} />
    </div>
  );
}
