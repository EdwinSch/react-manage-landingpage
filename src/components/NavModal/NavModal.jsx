import { navlinks } from "../../data";

const NavModal = () => {
  // Filter selected navlinks
  const filterKeys = [1, 7];
  const newNavlinks = navlinks.filter((link) => !filterKeys.includes(link.id));

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
