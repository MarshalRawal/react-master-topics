import PropTypes from "prop-types";

export default function Profile({ name, age }) {
  return (
    <>
      <p>I am {name} and {age} years old</p>
    </>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};
