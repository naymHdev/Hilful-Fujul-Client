const logger = (store) => (next) => (action) => {
  const currentState = store.getState();
  console.log(currentState);
};

export default logger;
