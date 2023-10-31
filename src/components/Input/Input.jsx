import { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput(input);
    console.log(input);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        // className={validate ? "valid" : "valid invalid"}
        className="input-field"
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
    </form>
  );
};

export default Input;
