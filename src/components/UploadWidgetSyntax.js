import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
// import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";
SyntaxHighlighter.registerLanguage("jsx", jsx);

export default function UploadWidgetSyntax() {
  const codeString = `
  import "../App.css";
  import React, { useEffect, useState } from "react";
  
  export default function UploadWidget() {
    const [loaded, setLoaded] = useState(false);
    const [cloudName, setCloudName] = useState("");
    const [unsignedPreset, setUnsignedPreset] = useState("");
    const [uploadedImage, setUploadedImage] = useState("");
  
    // 1. third party script load
    useEffect(() => {
      // check to see if this script is already loaded and that we are in an 
      // environment that recognizes the window object
      const cldScript = document.getElementById("cloudinaryUploadWidgetScript");
      // if window is defined and script is not loaded and not in window add script
      if (typeof window !== "undefined" && !loaded && !cldScript) {
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "cloudinaryUploadWidgetScript");
        script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      }
    }, [loaded]);

    // 2. process results
    // the Upload Widget will send back status that could be used in a progress bar
    // we'll wait for success and the render the image to the page
    const processResults = (error, result) => {
      if (error) {
        console.log("error", error);
      }
      if (result && result.event === "success") {
        console.log(result);
        console.log("success", result.info.secure_url);
        setUploadedImage(result.info.secure_url);
      }
    };

    // 3. open the widget
    // minmal upload widget configuration to allow for local and url uploads
    // a rendered button onclick event calls this function to open the widget
    const uploadWidget = () => {
      window.cloudinary.openUploadWidget(
        {
          cloudName: cloudName,
          uploadPreset: unsignedPreset,
          sources: ["local", "url"],
        },
        processResults
      );
    };
  
    // code includes a form to enter Cloud Name and Unsigned Preset
    // this allows for users to upload to their own Cloudinary project environment
    return (
      <div>
        <h3
          className={
            "font-medium leading-tight text-4xl mt-0 mb-2 text-white-600"
          }
        >
          Upload Widget
        </h3>
  
        <form className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-cloud-name"
              >
                Cloud Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cldblue-500"
                id="inline-cloud-name"
                type="text"
                value={cloudName}
                onChange={(e) => setCloudName(e.target.value)}
              />
            </div>
          </div>
  
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-unsigned-preset"
              >
                Unsigned Preset
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cldblue-500"
                id="inline-unsigned-preset"
                type="text"
                value={unsignedPreset}
                onChange={(e) => setUnsignedPreset(e.target.value)}
              />
            </div>
          </div>
  
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-cldblue-500 hover:bg-cldblue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={uploadWidget}
              >
                Upload File
              </button>
              <img src={uploadedImage} alt="uploaded using the upload widget" />
            </div>
          </div>
        </form>
      </div>
    );
  }
  `;

  return (
    <div>
      <div className="collapse">
      <input className="p-0 min-h-0" style={{minHeight: 0}} type="checkbox" />
        <div className="font-sans p-0 min-h-0 text-white collapse-title text-l font-medium bg-cldblue">
          Click Here to View/Hide Code
        </div>
        <div className="collapse-content">
          <div>
            <SyntaxHighlighter language="javascript" style={prism}>
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}
