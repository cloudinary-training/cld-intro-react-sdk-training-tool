import "../App.css";
import Experiment from "./experiments";
import SandpackWrapper from "./SandpackWrapper";

const cloudinaryImages = `import {Cloudinary} from "@cloudinary/url-gen";
import { AdvancedImage} from "@cloudinary/react";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";


export default function App() {
  // instantiate Cloudinary and call its image function
  const cld = new Cloudinary({cloud: {cloudName: 'cloudinary-training'}});

  const cldImage = cld.image("cld-sample")
    .resize(thumbnail().height(150px).width(150px).gravity("auto"))
    .roundCorners(byRadius("max"));
  
  const cldImageAutoFormat = cld.image("cld-sample")
    .resize(thumbnail().height(150px).width(150px).gravity("auto"))
    .roundCorners(byRadius("max"));

  cldImageAutoFormat.format("auto");

  return (
    <div>
      <p> <a target="_blank" href={cldImage.toURL()}>{cldImage.toURL()}</a></p>
      <div style={{width: "150",height: "150", backgroundColor: "coral"}} >
        <AdvancedImage cldImg={cldImage} />
      </div>
      <p> <a target="_blank" href={cldImageAutoFormat.toURL()}>{cldImageAutoFormat.toURL()}</a></p>
      <div  style={{width: "150",height: "150", backgroundColor: "coral"}} >
          <AdvancedImage cldImg={cldImageAutoFormat} />
      </div>
    </div>
  )
}`;

const cloudinaryVideoURLs = `import {Cloudinary} from "@cloudinary/url-gen";
import { AdvancedVideo, AdvancedImage} from "@cloudinary/react";
// import { Format, videoMp4} from "@cloudinary/url-gen/qualifiers/quality";


export default function App() {
  // instantiate Cloudinary and call its video function
  const cld = new Cloudinary({cloud: {cloudName: 'cloudinary-training'}});
  const cldVideo = cld.video('earth-spinning');
  const cldVideoAutoFormat = cld.video('earth-spinning');
  // add f_auto to a video
  cldVideoAutoFormat.format("auto:video");

  // original GIF was created from a version of the video above with a shorter duration
  // note that we will used Advanced Image to render the GIF
  const cldGIF = cld.image('earth-spinning-GIF')


  return (
    <div>
      <p>No transformations: <a target="_blank" href={cldVideo.toURL()}>{cldVideo.toURL()}</a></p>
        <AdvancedVideo controls height="300" cldVid={cldVideo} />
      <p>Add f_auto: <a target="_blank" href={cldVideoAutoFormat.toURL()}>{cldVideoAutoFormat.toURL()}</a></p>
        <AdvancedVideo controls height="300" cldVid={cldVideoAutoFormat} />
      <p>GIF: <a target="_blank" href={cldGIF.toURL()}>{cldGIF.toURL()}</a></p>
        <AdvancedImage  height="300" cldImg={cldGIF} />
    </div>
  )
}`;

export default function Format() {
  return (
    <div className="code-container">
      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Using Format with Images:
      </h3>
      <Experiment
        codeString={`<div style={{width: "150px",height: "150px", backgroundColor: "coral"}} >
//change original file format to png
cldImage.format("png");`}
        experimentTitle={
          "Experiment with file formats, radius max and transparency."
        }
        instructions={[
          `Add a background color to the div containing the AdvancedImage`,
          `Note the differences between the image with f_auto applied to it, and the original`,
          `If you don't see a difference, try changing the format of the original file to "png"`,
          "Add CSS to the AdvancedImage component to see the actual size of the image rendered",
          "Add colors as demonstrated with the AdvancedVideo component to the background",
        ]}
      />
      <SandpackWrapper numberOnPage="2" scriptName={cloudinaryImages} />
      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Using Format with Video:
      </h3>
      <Experiment
        codeString={`// convert a GIF to a video 
  const cldGIFtoMP4 = cld.image("earth-spinning-GIF");
  console.log(cldGIFtoMP4.format("mp4").toURL());
  <p>Convert GIF to video: <a target="_blank" href={cldGIFToVideo.toURL()}>{cldGIFToVideo.toURL()}</a></p>
  <AdvancedVideo controls height="300" cldVid={cldGIFToVideo} />`}
        experimentTitle={
          "Experiment with converting GIFs to videos and the interchange between image and video formats"
        }
        instructions={[
          `GIFs can be very large so converting a GIF to a video can help with asset size and performance on a web page`,
          "Use the format transformation to convert the GIF to a video ",
          "Log the URL and open it in the browser",
          "Render the video you created from a GIF with Advanced Video",
          "Note size differences between the original GIF and the video created from it",
        ]}
      />
      <SandpackWrapper numberOnPage="2" scriptName={cloudinaryVideoURLs} />
    </div>
  );
}
