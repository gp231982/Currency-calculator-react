const Button = ({
  className,
  type,
  textContent,
  calculateResult,
  resetCalculator,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={type === "submit" ? calculateResult : resetCalculator}
    >
      {textContent}
    </button>
  );
};

export default Button;
