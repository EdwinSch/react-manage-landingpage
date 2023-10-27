import { summary } from "../../data";

const About = () => {
  return (
    <section className="about-container">
      <article className="about-description">
        <h2>What's different about Manage?</h2>
        <p className="body-text">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </article>

      <article className="summary-container">
        {summary.map((item) => {
          return (
            <div className="item-container" key={item.id}>
              <div className="number">0{item.id}</div>
              <div className="selling-point">
                <h3>{item.usp}</h3>
                <p className="body-text">{item.description}</p>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default About;
