import uuid from 'uuid';
export const reducer = (state, action) => {
  switch(action.type) {
    case 'add':
      const reducerPayload = {description: action.payload};
      const newState = state.concat(reducerPayload);
      console.log(newState);
      return state;
    default:
      return state;
  }
}

export const jayneArray = [
  {
    item: 'wash house',
    completed: false,
    id: uuid(),
  }, 
  {
    item: 'steal car',
    completed: false,
    id: uuid(),
  },
  {
    item: 'graduate Lambda',
    completed: false,
    id: uuid(),
  }
];