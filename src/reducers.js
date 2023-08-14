import { FETCH_REPOS_REQUEST, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAILURE } from './actionTypes';

const initialState = {
  repos: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload, error: null };
    case FETCH_REPOS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
