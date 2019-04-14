/*
 * Game duck.
 * Location: state.game
 */

import typeToReducer from 'type-to-reducer';
import { createAction } from 'redux-actions';

// Actions
export const MOVE = createAction('game/MOVE');
export const ROLLBACK = createAction('game/ROLLBACK');

// Action creators
export const moveGame = nextGameState => MOVE(nextGameState);
export const rollbackGame = () => ROLLBACK();

// Selectors
export const gameSelector = (state) => state.game.game;
export const gameHistorySelector = (state) => state.game.history;

// Reducer
export default typeToReducer({
  [MOVE]: (state, { payload }) => {
    return {
      game: payload,
      history: [...state.history, payload],
    };
  },
  [ROLLBACK]: (state, { payload }) => {
    return {
      game: state.history.pop(),
      history: state.history,
    };
  },
}, {
  game: [],
  history: [],
});

