import axios from "axios";
import { setAlert } from "./alert";
import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from "./types";

//GET Posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get("/api/posts");
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Add Like
export const addLike = Id => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/like/${Id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { Id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Remove Like
export const removeLike = Id => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/unlike/${Id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { Id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
