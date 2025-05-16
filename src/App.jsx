import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Reference from "./pages/Reference";
import Contact from "./pages/Contact";
import BannerSlider from "./components/BannerSlider";
import DefaultLayout from "./layouts/DefaultLayout";

console.log("App loaded");

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar />

    
      {isHome && <BannerSlider />}

      <main className="p-4">
        <Routes>
         
          <Route path="/" element={<Home />} />

       
          <Route
            path="/hakkimizda"
            element={
              <DefaultLayout>
                <About />
              </DefaultLayout>
            }
          />
          <Route
            path="/hizmetler"
            element={
              <DefaultLayout>
                <Services />
              </DefaultLayout>
            }
          />
          <Route
            path="/referanslar"
            element={
              <DefaultLayout>
                <Reference />
              </DefaultLayout>
            }
          />
          <Route
            path="/iletisim"
            element={
              <DefaultLayout>
                <Contact />
              </DefaultLayout>
            }
          />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
