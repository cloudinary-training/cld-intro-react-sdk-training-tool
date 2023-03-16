import { Routes, Route, HashRouter } from "react-router-dom";
import AddingTransformationsPage from "./pages/AddingTransformations";
import ResizeScalePage from "./pages/ResizeScalePage";
import Responsive from "./pages/Responsive";
import LazyLoad from "./pages/Lazyload";
import Accessibility from "./pages/Accessibility";
import Placeholder from "./pages/Placeholder";
import Layout from "./components/Layout";
import UrlGen from "./pages/UrlGen";
import ResizeCropGravityPage from "./pages/ResizeCropGravity";
import QualityPage from "./pages/QualityPage";
import FormatPage from "./pages/FormatPage";
import OptimizePage from "./pages/OptimizePage";
import OverlayImagePage from "./pages/OverlayImagePage";
import OverlayTextPage from "./pages/OverlayTextPage";

import UploadWidgetPage from "./pages/UploadWidget";
import PadWithBackgroundPage from "./pages/PadWithBackground";
import RenderingAdvancedImagePage from "./pages/RenderingAdvancedImage";
import RenderingAdvancedVideoPage from "./pages/RenderingAdvancedVideo";
import EffectsPage from "./pages/EffectsPage";
import ImageOnlyPage from "./pages/ImageOnlyPage";
import VideoOnlyPage from "./pages/VideoOnlyPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<UploadWidgetPage />} />

            <Route path="/url-gen" element={<UrlGen />} />
            <Route
              path="/resize-crop-gravity"
              element={<ResizeCropGravityPage />}
            />
            <Route path="/quality" element={<QualityPage />} />
            <Route path="/format" element={<FormatPage />} />
            <Route path="/optimize" element={<OptimizePage />} />
            <Route
              path="advanced-image"
              element={<RenderingAdvancedImagePage />}
            />
            <Route
              path="advanced-video"
              element={<RenderingAdvancedVideoPage />}
            />
            <Route
              path="/adding-transformations"
              element={<AddingTransformationsPage />}
            />
            <Route path="/effects" element={<EffectsPage />} />
            <Route path="/overlay-image" element={<OverlayImagePage />} />
            <Route path="/overlay-text" element={<OverlayTextPage />} />

            <Route path="/resize-scale" element={<ResizeScalePage />} />
            <Route
              path="/pad-with-background"
              element={<PadWithBackgroundPage />}
            />

            <Route path="/image-only" element={<ImageOnlyPage />} />
            <Route path="/video-only" element={<VideoOnlyPage />} />

            <Route path="/responsive" element={<Responsive />} />
            <Route path="/placeholder" element={<Placeholder />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/lazyload" element={<LazyLoad />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
