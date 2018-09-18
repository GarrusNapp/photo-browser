import {
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  UPDATE_CATEGORY,
  FAVORITE,
  REMOVE_FAVORITE,
  SHOW,
  Sorting
} from "./types";
import { unsplash, toJson } from "../../utils/unsplash";

export function addCategory(searchQuery) {
  return function(dispatch) {
    return unsplash.search
      .photos(searchQuery, 1)
      .then(toJson)
      .then(result => {
        dispatch({
          type: ADD_CATEGORY,
          payload: { title: searchQuery, result }
        });
        dispatch({ type: SHOW, payload: searchQuery });
      })
      .catch(e => console.log(e));
  };
}

export function updateCategory(searchQuery, page) {
  return function(dispatch) {
    return unsplash.search
      .photos(searchQuery, page)
      .then(toJson)
      .then(result => {
        dispatch({
          type: UPDATE_CATEGORY,
          payload: { title: searchQuery, result }
        });
      })
      .catch(e => console.log(e));
  };
}

export function removeCategory(category, event) {
  event.stopPropagation();
  return function(dispatch) {
    dispatch({ type: SHOW, payload: "" });
    dispatch({ type: REMOVE_CATEGORY, payload: category });
  };
}
export function sortCategory(category, sortingMode) {
  return function(dispatch) {
    dispatch({
      type: Sorting.LIKES_COUNT,
      payload: { title: category, sortingMode }
    });
  };
}

export function favorite(category, id) {
  return function(dispatch) {
    dispatch({ type: FAVORITE, payload: { title: category, favorite: id } });
  };
}

export function removeFavorite(category, id) {
  return function(dispatch) {
    dispatch({
      type: REMOVE_FAVORITE,
      payload: { title: category, favorite: id }
    });
  };
}
