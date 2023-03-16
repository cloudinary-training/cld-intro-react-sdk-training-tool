/**
 * Create an app without restricted mode applied for use in Sandpack
 * Prevent multiple renders in development mode
 */
export const INDEX = `
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
const root = createRoot(document.getElementById("root"));
root.render(<App />);
`;




