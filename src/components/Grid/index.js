import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell';

import './styles.css';

class Grid extends Component {

  render() {
    const { gameState, onCellClick } = this.props;

    return (
      <div className={'Grid'}>
        {gameState.map((i, index) =>
          <Cell key={i} number={i} index={index} onClick={onCellClick} />)}
      </div>
    );
  }
}

Grid.propTypes = {
  gameState: PropTypes.array,
  onCellClick: PropTypes.func,
};
Grid.defaultProps = {};

export default Grid;
