import { combineReducers } from 'redux';

const intitalState = [];

const listings = (state = intitalState, action) => {
  switch (action.type) {
    case 'UPDATE_LISTINGS_STATE':
      const updatedState = [
        ...state, ...action.listings
      ]
      return updatedState;
    default:
      return state;
  }
};



const reducers = combineReducers({
  listings
});

export default reducers;