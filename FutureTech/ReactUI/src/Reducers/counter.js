const INIT_STATE = {value: 0  };

export default (state = INIT_STATE, action) => {
  console.log("state");
  switch (action.type) {
    case 'INCREMENT':      
      return { ...state, value: 2 };
    case 'DECREMENT':
      return { ...state, value: 3 };
    default:
      return state;
  }
}
