import VectorLogo from "../VectorLogo";
import { socials, navlinks } from "../../data";

const Footer = () => {
  return (
    <footer>
      <div className="logo-icons-container">
        <VectorLogo color={"#fff"} />
        <div className="icons-wrapper">
          {socials.map((icon) => {
            return (
              <a key={icon.id} href={icon.url} target="_blank" rel="noreferrer">
                {icon.icon}
              </a>
            );
          })}
        </div>
      </div>
      <div className="footer-links-container"></div>
      <div className="input-container"></div>
    </footer>
  );
};

export default Footer;
