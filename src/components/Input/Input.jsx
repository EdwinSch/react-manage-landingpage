import { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  const [validation, setValidation] = useState(true);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!input.includes("@")) {
      console.log("invalid");
      setValidation(false);
      return;
    }

    setInput("");
    setValidation(true);
    console.log(input);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        className={validation ? "input-field" : "input-field invalid"}
        type="email"
        value={input}
        name="email"
        id="email"
        placeholder="Updates in your inbox"
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-submit">
        go
      </button>
      {validation || <p className="error-msg">Please insert a valid email</p>}
    </form>
  );
};

export default Input;
