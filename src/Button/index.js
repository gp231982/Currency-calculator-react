const Button = ({ className, type, textContent }) => {
  return (
    <button type={type} className={className}>
      {textContent}
    </button>
  );
};

export default Button;
