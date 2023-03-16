import "../App.css";
import Experiment from "./experiments";
import SandpackWrapper from "./SandpackWrapper";

const cloudinaryAdvancedVideo = `import {AdvancedVideo,AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {scale, fill} from "@cloudinary/url-gen/actions/resize";
import {audioCodec,bitRate} from "@cloudinary/url-gen/actions/transcode";
import { VideoEdit, trim} from "@cloudinary/url-gen/actions/videoEdit";

const cld = new Cloudinary({
cloud: {
    cloudName: 'cloudinary-training'
}
});

// working with audio
const music = cld.video("barouqe")
  .transcode(audioCodec("mp3"))
  .transcode(bitRate("44k"));
const musicURL = music.toURL();

// show the first 20 seconds by ending at 20 seconds
const first20Seconds = cld.video('video-trn/barneys-first-car');
first20Seconds
    .videoEdit(VideoEdit.trim().endOffset("20.0"))  
    .resize(fill().width(400).height(300))

// show the last 20 seconds by starting at 
let start = ((23*60 + 51) - 20) + "";
const last20Seconds = cld.video('video-trn/barneys-first-car');
last20Seconds
    .videoEdit(VideoEdit.trim().startOffset(start))
    .resize(fill().width(400).height(300));

// show 20 seconds at about 17 minutes seconds
const cldVideoInTheMiddle = cld.video('video-trn/barneys-first-car');
cldVideoInTheMiddle
    .videoEdit(VideoEdit.trim().startOffset("1000.0").duration("20.0"))
    .resize(fill().width(400).height(300));
console.log("url",cldVideoInTheMiddle.toURL());

// create an image from a video frame
const imageFromFrame = cld.video('video-trn/barneys-first-car')
    .resize(fill().width(400).height(300))
    .videoEdit(VideoEdit.trim().startOffset("10.0"))
    .format("jpg");

export default function App() {
  return (
    <div className="App">
      <p>Deliver audio as a video resource_type</p>
      <audio controls>
         <source src={musicURL} type="audio/mpeg"></source>
        Your browser does not support the audio tag.
      </audio>
      <p>Deliver just the first 20 seconds</p>
      <AdvancedVideo cldVid={first20Seconds} controls />
      <p>Deliver just the last 20 seconds</p>
      <AdvancedVideo cldVid={last20Seconds} controls />
      <p>Deliver just 17 seconds in the middle of the video</p>
      <AdvancedVideo cldVid={cldVideoInTheMiddle} controls />
      <p>Create an image out of the frame at 10 seconds</p>
      <AdvancedImage cldImg={imageFromFrame} />
    </div>
  );
}`;

export default function VideoOnly() {
  return (
    <div className="code-container">
      <h2
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Video Only Transformations
      </h2>{" "}
  
      <Experiment
        codeString={``}
        experimentTitle={`Discover and Experiment with Transformations that can only be applied to Video`}
        instructions={[
          `Find "video only" transformations in the documention`,
          `Write code to render them`,
          `Remember to import the functions the image transformations require`,
        ]}
      />
      <SandpackWrapper numberOnPage="1" scriptName={cloudinaryAdvancedVideo} />
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
