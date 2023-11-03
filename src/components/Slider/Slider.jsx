import { useState, useEffect } from "react";
import { testimonials } from "../../data";
import Button from "../Button/Button";

const Slider = () => {
  const [people, setPeople] = useState(testimonials);
  const [currentPerson, setCurrentPerson] = useState(0);

  const nextSlide = () => {
    if (currentPerson === people.length - 1) {
      setCurrentPerson(0);
      return;
    }
    setCurrentPerson(currentPerson + 1);
  };

  // Auto play

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container">
      <h4>What they've said</h4>
      <div className="carrousel-wrapper">
        {people.map((person, index) => {
          //destructure
          const { id, image, name, quote } = person;

          return (
            <article
              className="slide"
              key={id}
              style={{
                transform: `translateX(${100 * (index - currentPerson)}%)`,
              }}
            >
              <div className="slide-content">
                <img src={image} alt="avatar" className="avatar" />
                <p className="name">{name}</p>
                <p className="body-text">"{quote}"</p>
              </div>
            </article>
          );
        })}
      </div>

      <Button variant={"btn-primary"} />
    </section>
  );
};

export default Slider;
