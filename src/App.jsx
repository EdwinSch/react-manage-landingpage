import NavModal from "./components/NavModal/NavModal";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Slider from "./components/Slider/slider";
import Incentive from "./components/Incentive/Incentive";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import pattern from "./assets/bg-tablet-pattern.svg";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
