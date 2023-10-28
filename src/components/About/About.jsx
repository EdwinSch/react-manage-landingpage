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
            <div className="single-item-wrapper" key={item.id}>
              <div className="item-header">
                <p>0{item.id}</p>
                <h3>{item.usp}</h3>
              </div>
              <p className="body-text item-descr">{item.description}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default About;
