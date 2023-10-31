import VectorLogo from "../VectorLogo";
import { socials, navlinks } from "../../data";

const Footer = () => {
  // Filter links for column 1
  const col1 = navlinks.filter((link) => [1, 2, 3, 4].includes(link.id));
  // Filter links for column 2
  const col2 = navlinks.filter((link) => [5, 6, 7].includes(link.id));

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
      <div className="footer-links-container">
        <ul className="link-col-1">
          {col1.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.link}>{link.text}</a>
              </li>
            );
          })}
        </ul>
        <ul className="link-col-2">
          {col2.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.link}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="input-container"></div>
    </footer>
  );
};

export default Footer;
