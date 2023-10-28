import VectorLogo from "../VectorLogo";
import { navlinks } from "../../data";
import Button from "../Button/Button";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav>
      <VectorLogo color={"#242D52"} />
      <ul className="nav-links-wrapper">
        {navlinks.map((link) => {
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
      <button className="modal-btn" type="button">
        <GiHamburgerMenu />
      </button>
    </nav>
  );
};

export default Navbar;
