const handleClick = () => {
  console.log("clicked");
};

const Button = ({ variant }) => {
  return (
    <button className={`btn ${variant}`} onClick={handleClick} type="button">
      get started
    </button>
  );
};

export default Button;
