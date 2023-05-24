import "../App.css";
import Experiment from "./experiments";
import SandpackWrapper from "./SandpackWrapper";

const notes = `There are many effects! In a URL they begin with "e_". Some effects can be are exclusive
to either images for video, while many can be used on both image and video.`;

const multipleImageandVideo = `import {AdvancedImage,AdvancedVideo} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {thumbnail, fill} from "@cloudinary/url-gen/actions/resize";
import {Adjust} from "@cloudinary/url-gen/actions/adjust"; // for contrast
import {blur, contrast} from "@cloudinary/url-gen/actions/effect";
export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cloudinary-training'
    }
  }); 
  const cldImage = cld.image('cld-sample').resize(thumbnail().width(150).height(150).gravity("face"));
  const cldBlur = cld.image('cld-sample').resize(thumbnail().width(150).height(150).gravity("face")).effect(blur().strength(800));
  const cldContrast = cld.image('cld-sample').resize(thumbnail().width(150).height(150).gravity("face")).adjust(Adjust.contrast().level(100));

  const cldVideo = cld.video('climbing').resize(fill().width(150).height(150).gravity("auto"));
  const cldVideoBlur = cld.video('climbing').resize(fill().width(150).height(150).gravity("auto")).effect(blur().strength(70));
  const cldVideoContrast = cld.video('climbing').resize(fill().width(150).height(150).gravity("auto")).adjust(Adjust.contrast().level(100));

  console.log(cldVideo.toURL());

  return (
    <div>
      Blur and contrast effects can be applied to image or video.
      <div>
        <AdvancedImage  alt="Sample" cldImg={cldImage} />
        <AdvancedImage  alt="Sample" cldImg={cldBlur} />
        <AdvancedImage  alt="Sample" cldImg={cldContrast} />
      </div>
      <div>
        <AdvancedVideo controls cldVid={cldVideo} />
        <AdvancedVideo controls cldVid={cldVideoBlur} />
        <AdvancedVideo controls cldVid={cldVideoContrast} />
      </div>
    </div>
  )
}`;

const multipleImages = `import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {grayscale, sepia, blackwhite} from "@cloudinary/url-gen/actions/effect";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cloudinary-training'
    }
  }); 
  const cldGrayScale = cld.image('cld-sample').resize(thumbnail().width(150).height(150).gravity("face")).effect(grayscale());
  const cldSepia = cld.image('cld-sample').resize(thumbnail().width(150).height(150).gravity("face")).effect(sepia());
  const cldBlackWhite = cld.image('cld-sample').resize(thumbnail().width(150).height(150).gravity("face")).effect(blackwhite());

  return (
    <div>
      <p>
      These images use image only effects and image only cropping like cropping with gravity on the face 
      which is useful for creating profile images. Gravity("face") produces the g_face transformation, and looks for an interesting
       face in the image to focus on.
      </p>
      <div>
        <AdvancedImage height="300" alt="Sample" cldImg={cldGrayScale} />
        <AdvancedImage height="300" alt="Sample" cldImg={cldSepia} />
        <AdvancedImage height="300" alt="Sample" cldImg={cldBlackWhite} />
      </div>
    </div>
  )
}`;
const multipleVideos = `import {AdvancedVideo} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
import { VideoEdit, trim, preview} from "@cloudinary/url-gen/actions/videoEdit";
import {reverse, boomerang} from "@cloudinary/url-gen/actions/effect";

// import {Effect} from "@cloudinary/url-gen/actions/effect";
export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cloudinary-training'
    }
  });
  const cldVideo = cld.video('purple-hourglass').resize(fill().width(350).height(350).gravity("auto"));;
  const cldVideoReverse = cld.video('purple-hourglass').resize(fill().width(350).height(350).gravity("auto")).effect(reverse());
  const cldVideoBoomerang = cld.video('purple-hourglass').resize(fill().width(350).height(350).gravity("auto")).effect(boomerang());
  const cldVideoBarneysFirstCar = cld.video('video-trn/barneys-first-car');
  const cldVideoPreview = cld.video('video-trn/barneys-first-car').videoEdit(VideoEdit.preview());

  return (
    <div>
      <p>Orignial: <a target="_blank" href={cldVideo.toURL()}>{cldVideo.toURL()}</a></p>
      <AdvancedVideo controls cldVid={cldVideo} />
      <p>Reverse: <a target="_blank" href={cldVideoReverse.toURL()}>{cldVideoReverse.toURL()}</a></p>
      <AdvancedVideo controls cldVid={cldVideoReverse} />
      <p>Boomerang: <a target="_blank" href={cldVideoBoomerang.toURL()}>{cldVideoBoomerang.toURL()}</a></p>
      <AdvancedVideo controls cldVid={cldVideoBoomerang} />
      <p>Full Video: <a target="_blank" href={cldVideoBarneysFirstCar.toURL()}>{cldVideoBarneysFirstCar.toURL()}</a></p>
      <AdvancedVideo controls cldVid={cldVideoBarneysFirstCar} />
      <p>Preview Video: <a target="_blank" href={cldVideoPreview.toURL()}>{cldVideoPreview.toURL()}</a></p>
      <AdvancedVideo controls cldVid={cldVideoPreview} />
    </div>
  )
}`;

export default function Effects() {
  return (
    <div className="code-container">
      <h2
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        <u>Effects</u>
      </h2>{" "}
      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Image and Video Effects (Blur and Contrast):
      </h3>
      <Experiment
        notes={notes}
        codeString={`import { Effect, vignette, sepia, accelerate, advancedRedEye, artisticFilter, assistColorBlind, blackwhite, blur, boomerang, cartoonify, colorize, deshake, dither, EffectActions, fadeIn, fadeOut, gradientFade, grayscale, loop, makeTransparent, negate, noise, oilPaint, outline, pixelate, redEye, removeBackground, reverse, shadow, simulateColorBlind, styleTransfer, theme, transition, vectorize} from "@cloudinary/url-gen/actions/effect";`}
        experimentTitle={
          "Find the Transformation URL API Reference in the Documenation"
        }
        instructions={[
          `Find Image only transformation effects and Video only transformation effects`,
          `Remember to import them from "effect"`,
        ]}
      />
      <SandpackWrapper numberOnPage="3" scriptName={multipleImageandVideo} />
      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Image Only Effects (Grayscale, Sepia, Black and White):
      </h3>
      <Experiment
        codeString={`import {colorize, simulateColorBlind, vectorize, pixelate} from "@cloudinary/url-gen/actions/effect";`}
        experimentTitle={"Experiment with other image effects"}
        instructions={[
          `Try these effects: colorize, simulateColorBlind, vectorize, pixelate`,
          `Remember to import them from "effect"`,
        ]}
      />
      <SandpackWrapper numberOnPage="3" scriptName={multipleImages} />
      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Video Only Effects (Reverse, Boomerang, Preview):
      </h3>
      <Experiment
        codeString={` const cldVideoaccel = cld.video('purple-hourglass').resize(fill().width(350).height(350).gravity("auto")).effect(accelerate().rate(100));`}
        experimentTitle={"Experiment with other video effects"}
        instructions={[
          `Try the accelerate effect and experiment with different rates `,
          `Remember to import it from "effect"`,
        ]}
      />
      <SandpackWrapper numberOnPage="3" scriptName={multipleVideos} />
      <p className={"font-sans text-xs italic text-clddarkblue underline"}>
        Credit:{" "}
        <a
          href="https://archive.org/details/Andy_Griffith_Barneys_First_Car"
          rel="noreferrer"
          target="_blank"
        >
          Barney's First Car{" "}
        </a>
      </p>
    </div>
  );
}
