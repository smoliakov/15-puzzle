export const isFinished = (gameState = []) => {
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