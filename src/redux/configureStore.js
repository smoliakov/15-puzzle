import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { save, load } from 'redux-localstorage-simple';

import rootReducer from './index';

const logger = createLogger({ collapsed: true });

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    load(),
    applyMiddleware(
      logger,
      save(),
    ),
  );

  if (module.hot) {
    module.hot.accept('./index', () => {
      const nextRootReducer = require('./index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}