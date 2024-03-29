import {
  FETCH_TRAILER_SUCCESS,
  FETCH_TRAILER_IS_LOADING,
  FETCH_TRAILER_ERROR,
  REMOVE_TRAILER_INFO,
} from './trailerAction';

const initialState = {
  trailer: null,
  isLoading: false,
  error: null,
  isModalOpened: false,
};

const trailerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRAILER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        trailer: action.payload,
      };

    case FETCH_TRAILER_IS_LOADING:
      return {
        ...state,
        isModalOpened: true,
        isLoading: true,
      };

    case FETCH_TRAILER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case REMOVE_TRAILER_INFO:
      return initialState;

    default:
      return state;
  }
};

export default trailerReducer;
