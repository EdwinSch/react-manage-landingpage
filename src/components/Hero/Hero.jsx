import Button from "../Button/Button";
import Illustration from "../../assets/illustration-intro.svg";

const Hero = () => {
  return (
    <section className="hero-container">
      <article className="hero-text">
        <h1>Bring everyone together to build better products.</h1>
        <p className="body-text">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button variant={"btn-primary"} />
      </article>
      <figure className="img-wrapper">
        <img src={Illustration} alt="graph illustration" />
      </figure>
    </section>
  );
};

export default Hero;
