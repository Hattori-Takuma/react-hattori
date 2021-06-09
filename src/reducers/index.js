import { INCREMENT, DECREMENT, RESET, ADD_EVENT, } from '../actions/index'


const reducer = (state = [], action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    case ADD_EVENT:
      const event = { title: action.title, body: action.body };
      const id = state.length + 1;
      return [...state, { id, ...event }];




    default:
      return state;
  }
};

export default reducer;
