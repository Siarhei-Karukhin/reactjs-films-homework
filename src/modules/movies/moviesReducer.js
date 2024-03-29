import {
  SET_MOVIES_CONDITION,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_IS_LOADING,
  FETCH_MOVIES_ERROR,
  FETCH_GENRES_SUCCESS,
} from './moviesAction';

const initialState = {
  condition: 'Trending',
  movies: [],
  isLoading: false,
  error: null,
  genres: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES_CONDITION:
      return {
        ...state,
        condition: action.payload,
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };

    case FETCH_MOVIES_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
