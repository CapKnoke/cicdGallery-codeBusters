const stateHandler = {
  getState: () => {
    if (window.localStorage.getItem('state') === null) {
      const stateObj = {
        previousSearches: [],
      };
      window.localStorage.setItem('state', JSON.stringify(stateObj));
    }
    return JSON.parse(window.localStorage.getItem('state'));
  },
  setState: stateObj => {
    window.localStorage.setItem('state', JSON.stringify(stateObj));
  },
};

export default stateHandler;
