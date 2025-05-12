import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Reference from "./pages/Reference";
import Contact from "./pages/Contact";
import BannerSlider from "./components/BannerSlider";


console.log("App loaded");
function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <BannerSlider/>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/hizmetler" element={<Services />} />
           <Route path="/referanslar" element={<Reference />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
    
  );
}

export default App;
