import { navlinks } from "../../data";

const NavModal = () => {
  return (
    <section className="mobile-overlay">
      <nav className="navmodal-container">
        <ul className="links-container">
          {navlinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.link}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default NavModal;
