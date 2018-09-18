import { SHOW } from "./types";

export function showCategory(item) {
  return function(dispatch) {
    dispatch({type: SHOW, payload: item})
  }
}
