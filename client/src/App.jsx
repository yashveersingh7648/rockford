import React from "react";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home/Home";
import SmoothScroll from "./components/common/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  return (
    <SmoothScroll>
      {/* Custom VMV cursor */}
      <CustomCursor />

      <AnimatePresence mode="wait">
        <Home />
      </AnimatePresence>
      <FloatingButtons />
    </SmoothScroll>
  );
}

export default App;