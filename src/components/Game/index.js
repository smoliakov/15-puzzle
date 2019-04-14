import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '../Grid';
import { createGameState, move } from '../../utils';
import { gameHistorySelector, gameSelector, moveGame, rollbackGame } from '../../redux/game';

class Game extends Component {
  componentDidMount() {
    const { moveGame } = this.props;

    moveGame(createGameState());
  }

  onCellClick = (number, index) => {
    const { game, moveGame } = this.props;

    const nextGameState = move(game, index);
    if (nextGameState) moveGame(nextGameState);
  };

  onRollbackClick = () => {
    const { rollbackGame } = this.props;

    rollbackGame();
  };

  render() {
    const { game, gameHistory } = this.props;

    return (
      <div className={'Game'}>
        <Grid gameState={game} onCellClick={this.onCellClick} />
        <div>
          <button onClick={this.onRollbackClick}>Rollback ({gameHistory.length})</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  game: gameSelector(state),
  gameHistory: gameHistorySelector(state),
});

const mapDispatchToProps = {
  moveGame,
  rollbackGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);