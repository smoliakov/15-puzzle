/*
 * Game duck.
 * Location: state.game
 */

import typeToReducer from 'type-to-reducer';
import { createAction } from 'redux-actions';

import { isCompleted } from '../utils';

// Actions
export const MOVE = createAction('game/MOVE');
export const SHUFFLE = createAction('game/SHUFFLE');
export const ROLLBACK = createAction('game/ROLLBACK');

// Action creators
export const moveGame = nextGameState => MOVE(nextGameState);
export const shuffleGame = gameState => SHUFFLE(gameState);
export const rollbackGame = () => ROLLBACK();

// Selectors
export const gameSelector = (state) => state.game.state;
export const gameHistorySelector = (state) => state.game.history;
export const gameIsCompletedSelector = (state) => state.game.isCompleted;

// Reducer
export default typeToReducer({
  [MOVE]: (state, { payload }) => {
    const currentGameState = state.state;

    return {
      state: payload,
      history: [...state.history, currentGameState],
      isCompleted: isCompleted(payload),
    };
  },
  [ROLLBACK]: state => {
    const clonedHistory = [...state.history];
    const prevGameState = clonedHistory.pop();

    return {
      state: prevGameState,
      history: clonedHistory,
      isCompleted: isCompleted(prevGameState),
    };
  },
  [SHUFFLE]: (state, { payload }) => {
    return {
      state: payload,
      history: [],
      isCompleted: isCompleted(payload),
    };
  },
}, {
  state: [],
  history: [],
  isCompleted: false,
});

