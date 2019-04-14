import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Cell = (props) => {
  const { index, number, onClick } = props;

  const position = { top: Math.floor(index / 4) * 60, left: index % 4 * 60 };

  if (number === 16) return (
    <div className={`Cell index${index} empty`} style={position} />
  );

  return (
    <div
      onClick={() => onClick(number, index)}
      className={`Cell index${index}`}
      style={position}>
      {number}
    </div>
  );
};

Cell.propTypes = {
  index: PropTypes.number,
  number: PropTypes.number,
  onClick: PropTypes.func,
};
Cell.defaultProps = {
  onClick: () => false,
};

export default Cell;
