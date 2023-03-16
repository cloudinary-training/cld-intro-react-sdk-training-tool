import '../App.css';
import { Sandpack } from "@codesandbox/sandpack-react";

const cloudinaryAdvancedImage = `
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }); 
  const myImage = cld.image('front_face');
  // return <h1>Hello Sandpack</h1>
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  )
}`

const cloudinaryAdvancedImageWithTransformations = `
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";

// Import required actions.
import {thumbnail, scale} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {sepia} from "@cloudinary/url-gen/actions/effect";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {opacity,brightness} from "@cloudinary/url-gen/actions/adjust";
import {byAngle} from "@cloudinary/url-gen/actions/rotate"

// Import required qualifiers.
import {image} from "@cloudinary/url-gen/qualifiers/source";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }); 
  const myImage = cld.image('front_face');
  // Apply the transformation.
  myImage
  .resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))  // Crop the image.
  .roundCorners(byRadius(20))    // Round the corners.
  .effect(sepia())  // Apply a sepia effect.
  .overlay(   // Overlay the Cloudinary logo.
    source(
      image('cloudinary_icon_blue')
        .transformation(new Transformation()
        .resize(scale(50)) // Resize the logo.
          .adjust(opacity(60))  // Adjust the opacity of the logo.
        .adjust(brightness(200)))  // Adjust the brightness of the logo.       
    )
    .position(new Position().gravity(compass('south_east')).offsetX(5).offsetY(5))   // Position the logo.
  )
  .rotate(byAngle(10))  // Rotate the result.
  .format('png');   // Deliver as PNG. 
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  )
};`
export default function CldSample() {

    return (
        <div className="code-container">

            <h2>Render an Image with Advanced Image</h2>
            <Sandpack
                // You can change these examples!
                // Try uncommenting any of these lines
                theme="dark"
                // theme="light" 
                // theme="auto"
                template="react"
                files={{
                    "/App.js": cloudinaryAdvancedImage,
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
                    editorWidthPercentage: 60, // default - 50
                    autorun: false,
                    recompileMode: "delayed", //default is immediate
                    recompileDelay: 300,
                    resizablePanels: true, //default
                }}
            />
            <h2>Create Transformations</h2>
            <Sandpack
                // You can change these examples!
                // Try uncommenting any of these lines
                theme="dark"
                // theme="light" 
                // theme="auto"
                template="react"
                files={{
                    "/App.js": cloudinaryAdvancedImageWithTransformations,
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
                    editorWidthPercentage: 60, // default - 50
                    autorun: false,
                    recompileMode: "delayed", //default is immediate
                    recompileDelay: 300,
                    resizablePanels: true, //default
                }}
            />
        </div>
    )
}

