import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

const initialState = {
  favourites: [],
  count: 0,
}

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {...state, favourites: [...state.favourites, action.payload]}
    case "REMOVE_FROM_FAVOURITES":
      return {...state, favourites: state.favourites.filter(cat => cat.id !== action.payload)}
    default:
      return state

  }
}

export const store = createStore(storeReducer, composeWithDevTools(
  applyMiddleware()
))