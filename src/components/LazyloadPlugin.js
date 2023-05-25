import React from "react";
import "../App.css";
import Experiment from "./experiments";
import SandpackWrapper from "./SandpackWrapper";

const lazyload = `import {Cloudinary} from "@cloudinary/url-gen";
import { AdvancedImage,lazyload} from "@cloudinary/react";
import {fill} from "@cloudinary/url-gen/actions/resize";

export default function App() {
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'cloudinary-training'
      }
    });
    const brownSheep = cld.image("lazyload/brown_sheep");
    brownSheep.resize(fill().width(400).height(400).gravity("auto"))
    const woman = cld.image("lazyload/woman");
    woman.resize(fill().width(400).height(400).gravity("auto"))
    const cat = cld.image("lazyload/fat_cat");
    cat.resize(fill().width(400).height(400).gravity("auto"))
    const bear = cld.image("lazyload/bear");
    bear.resize(fill().width(400).height(400).gravity("auto"));
    
    return (
        <div>
        <h3>Scroll down to see images lazyload</h3>
        <p>
          You can open your network tab to see the images loading    
        </p>
        <div style={{ height: "300px" }} />
            <AdvancedImage  style={{display: "block", marginTop: "300px", width: "300px", height: "300px"}}  cldImg={brownSheep} plugins={[lazyload({rootMargin: '5px 5px 5px 5px', threshold: 0.1})]} />
            <AdvancedImage  style={{display: "block", marginTop: "300px", width: "300px", height: "300px"}}  cldImg={cat} plugins={[lazyload({rootMargin: '5px 5px 5px 5px', threshold: 0.15})]} />
            <AdvancedImage  style={{display: "block", marginTop: "300px", width: "30px", height: "300px"}}  cldImg={woman} plugins={[lazyload({rootMargin: '5px 5px 5px 5px', threshold: 0.2})]} />
            <AdvancedImage  style={{display: "block", marginTop: "300px", width: "300px", height: "300px"}}  cldImg={bear} plugins={[lazyload({rootMargin: '5px 5px 5px 5px', threshold: 0.25})]} />

        </div>
    )
}`;

function LazyloadPlugin() {
  return (
    <div className="code-container">
      <h2
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Lazyload Plugin:
      </h2>
      <h3
        className={
          "font-sans font-medium leading-tight text-l mt-0 mb-2 text-clddarkblue"
        }
      >
        Scroll down to see images lazyload
      </h3>
      <Experiment
        codeString={`plugins={[lazyload({rootMargin: 'TOPpx RGHTpx BOTTOMpx LEFTpx', threshold: 0.0-100.0})]}`}
        experimentTitle={`Discover and Experiment with Lazyload Bounding Box and Threshold`}
        instructions={[
          `With the lazyloading plugin, images won't get rendered until they meet a criteria of observability`,
          `Change the rootMargin values to see the effect of varying the bounding box, an invisible box around each image`,
          `The threshold is a percent value that indicates what percent of the image must be visible before it is loaded`,
          `Change the threshold to see effect`,
          `Open the Chrome inspector network tab to see that images don't load until they meet the criteria of observability`,
        ]}
      />
      <SandpackWrapper numberOnPage="1" scriptName={lazyload} />
    </div>
  );
}

export default LazyloadPlugin;
