import PropTypes from "prop-types";

function Button({ onClick, active, label }) {
  return (
    <button onClick={onClick} className={active ? "active" : ""}>
      {label}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
