import React from "react";
import "../App.css";
import { INDEX } from "./Index.js";
import Experiment from "./experiments";

import { Sandpack } from "@codesandbox/sandpack-react";


const combined = `import {CloudinaryImage} from "@cloudinary/url-gen";
    import {scale} from "@cloudinary/url-gen/actions/resize";
    import { AdvancedImage, accessibility, responsive, placeholder,lazyload} from "@cloudinary/react";
    export default function App() {
        const cloudinaryImage = new CloudinaryImage("sample", { cloudName: "cloudinary-training" });
        return (
            <div>
            <h3>Combining Plugins</h3>
            <AdvancedImage
                cldImg={cloudinaryImage}
                plugins={[accessibility(),responsive(), placeholder(), lazyload()]}
             />
        )
    }`;

function CombinedPlugins() {
  return (
    <div className="code-container">
     
      <Sandpack
        theme="dark"
        template="react"
        files={{
          "/index.js": INDEX,
          "/App.js": combined,
        }}
        customSetup={{
          dependencies: {
            "@cloudinary/react": "^1.9.0",
            "@cloudinary/url-gen": "^1.8.7",
          },
        }}
        options={{
          showNavigator: true,
          showTabs: true,
          showLineNumbers: false, // default - true
          showInlineErrors: true, // default - false
          wrapContent: true, // default - false
          editorHeight: 600, // default - 300
          autorun: false,
          recompileMode: "delayed", //default is immediate
          recompileDelay: 400,
          resizablePanels: true, //default
        }}
      />
    </div>
  );
}

export default CombinedPlugins;
