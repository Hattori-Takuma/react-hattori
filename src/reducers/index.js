import { INCREMENT, DECREMENT, RESET, ADD_EVENT, ALL_DELET, POINT_DELET, BUTTON } from '../actions/index'


const reducer = (state = [], action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    case ADD_EVENT:
      const event = { title: action.title, body: action.body, comment: action.comment };
      const id = state.length + 1;
      return [...state, { id, ...event }];
    case ALL_DELET:

      return [];

    case POINT_DELET:
      const point = state.filter(state => state.id !== action.id);

      return point

    case BUTTON:
      if (state.count % 3 === 0) { return { ...state, count: state.count + 10 } } else { return state }
  }


};

export default reducer;
