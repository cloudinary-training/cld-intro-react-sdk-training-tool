import "../App.css";
import Experiment from "./experiments";
import SandpackWrapper from "./SandpackWrapper";

const image = `import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {text} from "@cloudinary/url-gen/qualifiers/source";
import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";

export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cloudinary-training'
    }
  }); 
  const cldImage = cld.image('cld-sample');

  cldImage
  .resize(fill().height(250).width(250).gravity("auto"))
  .overlay(
    source(
      text("Puppy Love", new TextStyle("Arial", 20))
      .textColor("#eeeef1")
      .backgroundColor("#ff5050")
    ).position(
      new Position().gravity(compass("south")).offsetY(20)
    )
  );
  return (
    <div>
      <AdvancedImage alt="Sample Image" cldImg={cldImage} />
    </div>
  )
}`;
const video = `import {AdvancedVideo} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";
import {scale, fill} from "@cloudinary/url-gen/actions/resize";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {text} from "@cloudinary/url-gen/qualifiers/source";
import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle";
import {Position } from "@cloudinary/url-gen/qualifiers/position";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";

export default function App() {
  const cld = new Cloudinary({cloud: {cloudName: 'cloudinary-training'}
  }); 
  const cldVideo = cld.video('long-wave');
  
  cldVideo
  .resize(fill().height(250).width(250).gravity("auto"))
    .overlay(
        source(
            text(" Long Wave ", new TextStyle("Pacifico", 30))
            .textColor("gold")
            .backgroundColor("#0c163b")
            ).position(
            new Position().gravity(compass("north")).offsetY(10)
            )
    );

  return (
    <div className={"flex"}>
      <AdvancedVideo controls cldVid={cldVideo} />
    </div>
  )
}`;

export default function OverlayText() {
  return (
    <div className="code-container">
      <h2
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Text Overlay on Image:
      </h2>{" "}
      <p className="font-sans text-clddarkblue">
        Look for the message in the central, lower area the image.
      </p>
      <Experiment
        codeString={` .overlay(
          source(
            text("Puppy Love", new TextStyle("Arial", 20))
            .textColor("#eeeef1")
            .backgroundColor("#ff5050")
          ).position(
            new Position().gravity(compass("center")).offsetY(-100).offsetX(-30)
          )
        )`}
        experimentTitle={
          "Experiment with Different Text Messages, Fonts, Sizes, and Locations"
        }
        instructions={[
          `Add your own text`,
          `Many Google fonts are supported for use as the font family for text overlays, so try one of those`,
          `Modify the compass locations: north, north_east, east, south_east, south, south_west, west, and northwest`,
          `Modify the X,Y offsets? You can use positive and negative values for the x and y offset`,
          `What happens if you remove the Position transformation? What is the default?`,
        ]}
      />
      <SandpackWrapper numberOnPage="2" scriptName={image} />
      <h2
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Text Overlay on Video:
      </h2>{" "}
      <p className={"font-sans text-clddarkblue"}>
        Look for the message in the central, upper area of the video.
      </p>
      <Experiment
        codeString={` .overlay(
          source(
            text("Puppy Love", new TextStyle("Arial", 20))
            .textColor("#eeeef1")
            .backgroundColor("#ff5050")
          ).position(
            new Position().gravity(compass("center")).offsetY(-100).offsetX(-30)
          )
        )`}
        experimentTitle={
          "Experiment with Different Text Messages, Fonts, Sizes, and locations"
        }
        instructions={[
          `Add your own text`,
          `Many Google fonts are supported for use as the font family for text overlays, so try one of those`,
          `Modify the compass locations: north, north_east, east, south_east, south, south_west, west, and northwest`,
          `Modify the X,Y offsets? You can use positive and negative values for the x and y offset`,
          `What happens if you remove the Position transformation? What is the default?`,
        ]}
      />
      <SandpackWrapper numberOnPage="2" scriptName={video} />
    </div>
  );
}
