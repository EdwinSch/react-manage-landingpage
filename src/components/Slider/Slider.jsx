import { useState } from "react";
import { testimonials } from "../../data";
import Button from "../Button/Button";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Slider = () => {
  const [people, setPeople] = useState(testimonials);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    if (currentPerson === 0) {
      setCurrentPerson(people.length - 1);
      return;
    }
    setCurrentPerson(currentPerson - 1);
  };

  const nextSlide = () => {
    if (currentPerson === people.length - 1) {
      setCurrentPerson(0);
      return;
    }
    setCurrentPerson(currentPerson + 1);
  };

  return (
    <section className="slider-container">
      <h4>What they've said</h4>

      {/* TEMP --- */}
      <div className="btns">
        <button onClick={prevSlide} className="btn-chevron" type="button">
          <FaChevronLeft />
        </button>
        <button onClick={nextSlide} className="btn-chevron" type="button">
          <FaChevronRight />
        </button>
      </div>

      {/* --- TEMP */}

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
              {/* <img src={image} alt="avatar" className="avatar" /> */}
              <p className="name">{name}</p>
              <p className="body-text">{quote}</p>
            </article>
          );
        })}
      </div>

      <Button variant={"btn-primary"} />
    </section>
  );
};

export default Slider;
