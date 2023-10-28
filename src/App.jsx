import NavModal from "./components/NavModal/NavModal";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Incentive from "./components/Incentive/Incentive";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      {isModalOpen && <NavModal />}
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <About />
      <Incentive />
      <Footer />
    </main>
  );
}

export default App;
