import VectorLogo from "../VectorLogo";
import { navlinks } from "../../data";
import Button from "../Button/Button";

import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

const Navbar = ({ isModalOpen, setIsModalOpen }) => {
  // Filter selected navlinks
  const filterKeys = [1, 7];
  const newNavlinks = navlinks.filter((link) => !filterKeys.includes(link.id));

  return (
    <nav className="desktop-navbar">
      <VectorLogo color={"#242D52"} />
      <ul className="nav-links-wrapper">
        {newNavlinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.link}>{link.text}</a>
            </li>
          );
        })}
      </ul>
      <div className="btn-wrapper">
        <Button variant={"btn-primary"} />
      </div>
      <button
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="modal-btn"
        type="button"
      >
        {isModalOpen ? <IoCloseSharp /> : <IoMenuSharp />}
      </button>
    </nav>
  );
};

export default Navbar;
