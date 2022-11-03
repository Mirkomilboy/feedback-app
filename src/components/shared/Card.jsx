import propTypes from "prop-types";

const Card = ({ children, reverse }) => {
  // this is conditional class
  // return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  return (
    // this is conditional style
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: propTypes.node.isRequired,
  reverse: propTypes.bool.isRequired,
};

export default Card;
