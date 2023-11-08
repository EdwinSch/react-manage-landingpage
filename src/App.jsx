import NavModal from "./components/NavModal/NavModal";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Slider from "./components/Slider/Slider";
import Incentive from "./components/Incentive/Incentive";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import pattern from "./assets/bg-tablet-pattern.svg";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal nav if window != mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.screen.width > 1030) {
        setIsModalOpen(false);
        return;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <img src={pattern} alt="pattern" className="ptrn-right" />
      {isModalOpen && <NavModal />}
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Hero />
      <About />
      <img src={pattern} alt="pattern" className="ptrn-left" />
      <Slider />
      <Incentive />
      <Footer />
    </main>
  );
}

export default App;
