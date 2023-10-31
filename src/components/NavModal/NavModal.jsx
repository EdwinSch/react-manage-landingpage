import { navlinks } from "../../data";

const NavModal = () => {
  // Filter correct navlinks
  const newNavlinks = navlinks.filter((link) => {
    return link.mainNav === true;
  });

  return (
    <section className="mobile-overlay">
      <nav className="navmodal-container">
        <ul className="links-container">
          {newNavlinks.map((link) => {
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
