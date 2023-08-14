import axios from 'axios';
import { FETCH_REPOS_REQUEST, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAILURE } from './actionTypes';

export const fetchRepos = (username) => async (dispatch) => {
  dispatch({ type: FETCH_REPOS_REQUEST });

  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos?type=all&sort=updated`);
    const repos = response.data.sort((a, b) => b.stargazers_count - a.stargazers_count);
    
    dispatch({ type: FETCH_REPOS_SUCCESS, payload: repos });
  } catch (error) {
    dispatch({ type: FETCH_REPOS_FAILURE, payload: error.message });
  }
};
