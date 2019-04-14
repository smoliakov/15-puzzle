import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '../Grid';
import { move, shuffle } from '../../utils';
import {
  moveGame,
  shuffleGame,
  rollbackGame,
  gameSelector,
  gameHistorySelector,
  gameIsCompletedSelector,
} from '../../redux/game';

import './styles.css';

class Game extends Component {
  componentDidMount() {
    this.onShuffleClick();
  }

  onCellClick = (number, index) => {
    const { gameState, moveGame } = this.props;

    const nextGameState = move(gameState, index);

    if (nextGameState)
      moveGame(nextGameState);
  };

  onRollbackClick = () => {
    const { rollbackGame, gameHistory } = this.props;

    if (gameHistory.length > 0)
      rollbackGame();
  };

  onShuffleClick = () => {
    const { shuffleGame } = this.props;

    shuffleGame(shuffle());
  };

  render() {
    const { gameState, gameHistory, gameIsCompleted } = this.props;

    return (
      <div className={'Game'}>
        <h1>15 PUZZLE</h1>
        <Grid gameState={gameState} onCellClick={this.onCellClick} />
        {
          gameIsCompleted &&
          <div className={'GameCongratulations'}>Congratulations! You did it! 🎉</div>
        }
        <div className={'GameActions'}>
          <button onClick={this.onRollbackClick}>Rollback ({gameHistory.length})</button>
          <button onClick={this.onShuffleClick}>Shuffle</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gameState: gameSelector(state),
  gameHistory: gameHistorySelector(state),
  gameIsCompleted: gameIsCompletedSelector(state),
});

const mapDispatchToProps = {
  moveGame,
  shuffleGame,
  rollbackGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);