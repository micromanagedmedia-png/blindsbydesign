/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shutters from "./pages/Shutters";
import Blinds from "./pages/Blinds";
import Shades from "./pages/Shades";
import DraperiesAwnings from "./pages/DraperiesAwnings";
import ServiceAreas from "./pages/ServiceAreas";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shutters" element={<Shutters />} />
            <Route path="blinds" element={<Blinds />} />
            <Route path="shades" element={<Shades />} />
            <Route path="draperies-awnings" element={<DraperiesAwnings />} />
            <Route path="service-areas" element={<ServiceAreas />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
