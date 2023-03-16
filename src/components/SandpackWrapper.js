import { INDEX } from "./Index.js";
import { Sandpack } from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";


export default function SandpackWrapper(props) {
  const editorHeight = (numberOnPage) => {
    let n = parseInt(numberOnPage);
    if (n === 1) return 700;
    else return 300;
  };

  const height = editorHeight(props.numberOnPage);
  return (
    <div>
      <Sandpack 
        theme={nightOwl}
        // theme="dark"
        template="react"
        files={{
          "/index.js": INDEX,
          "/App.js": props.scriptName,
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
          showLineNumbers: true,
          showInlineErrors: true,
          wrapContent: true,
          editorHeight: height,
          autorun: false,
          recompileMode: "delayed",
          recompileDelay: 400,
          resizablePanels: true,
        }}
      />
    </div>
  );
}
