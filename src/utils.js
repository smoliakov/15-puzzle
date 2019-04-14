export const isCompleted = gameState => {
  for (let i = 0; i < 15; i++) {
    if (gameState[i] > gameState[i + 1]) return false;
  }
  return true;
};

export const createGameState = () => {
  const gameState = [];
  for (let i = 0; i < 16; i++) {
    gameState.push(i + 1);
  }
  return gameState;
};

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const shuffle = () => {
  const gameState = new Array(16);

  for (let currentValue = 1; currentValue < 17; currentValue++) {
    let currentIndex = getRandomInt(0, 15);
    while (gameState[currentIndex]) currentIndex = getRandomInt(0, 15);
    gameState[currentIndex] = currentValue;
  }

  return gameState;
};

export const canMove = (gameState, index) => {
  const emptyIndex = gameState.indexOf(16);

  return [
    emptyIndex - 4,
    emptyIndex - 1,
    emptyIndex + 1,
    emptyIndex + 4,
  ].includes(index);
};

export const move = (gameState, index) => {
  const emptyIndex = gameState.indexOf(16);

  if (canMove(gameState, index)) {
    const cloneGameState = [...gameState]; // copy
    cloneGameState[emptyIndex] = cloneGameState[index]; // change
    cloneGameState[index] = 16; // set empty

    return cloneGameState;
  }

  return null;
};