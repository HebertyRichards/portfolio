import PropTypes from "prop-types";
function Modo({ openNav }) {
  return (
    <>
      <button className="openbtn" onClick={openNav}>
        ☰
      </button>
    </>
  );
}

Modo.propTypes = {
  openNav: PropTypes.func.isRequired,
};

export default Modo;
