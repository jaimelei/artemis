import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home";
import OurStory from "./pages/our-story";
import ShelvesAndCups from "./pages/shelves-and-cups";
import Events from "./pages/events";
import Visit from "./pages/visit";
import NotFound from "./pages/not-found";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/shelves-and-cups" element={<ShelvesAndCups />} />
        <Route path="/events" element={<Events />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}