const stateHandler = {
  getState: () => {
    if (!window.history.state) {
      return {};
    }
    return window.history.state;
  },
  setState: stateObj => {
    window.localStorage.setItem('state', JSON.stringify(stateObj));
    window.history.pushState(stateObj, '');
    window.dispatchEvent(new Event('statechange'));
  },
  setStateFromStorage: () => {
    if (window.localStorage.getItem('state') !== null) {
      const stateObj = JSON.parse(window.localStorage.getItem('state'));
      const oldState = stateHandler.getState();
      window.history.pushState({ ...oldState, ...stateObj }, '');
      window.dispatchEvent(new Event('statechange'));
    }
  },
  saveSearchToState: search => {
    const stateObj = stateHandler.getState();
    stateObj.lastSearch = search;
    stateObj.page = 1;
    stateHandler.setState(stateObj);
  },
};

export default stateHandler;
