import {
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  UPDATE_CATEGORY,
  FAVORITE,
  REMOVE_FAVORITE,
  Sorting
} from "../actions/types";
import { sorting } from "../../utils/sorting";

const initialState = {};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        [action.payload.title]: { ...action.payload, favorite: [] }
      };
    case REMOVE_CATEGORY:
      const { [action.payload]: value, ...rest } = state;
      return rest;
    case UPDATE_CATEGORY:
      return {
        ...state,
        [action.payload.title]: {
          ...state[action.payload.title],
          result: {
            ...state[action.payload.title].result,
            results: [
              ...state[action.payload.title].result.results,
              ...action.payload.result.results
            ]
          }
        }
      };
    case Sorting.LIKES_COUNT:
    case Sorting.TIME_CREATED:
      return {
        ...state,
        [action.payload.title]: {
          ...state[action.payload.title],
          result: {
            ...state[action.payload.title].result,
            results: [
              ...sorting(
                [...state[action.payload.title].result.results],
                action
              )
            ]
          }
        }
      };
    case FAVORITE:
      return {
        ...state,
        [action.payload.title]: {
          ...state[action.payload.title],
          favorite: [
            ...state[action.payload.title].favorite,
            action.payload.favorite
          ]
        }
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        [action.payload.title]: {
          ...state[action.payload.title],
          favorite: [
            ...state[action.payload.title].favorite.filter(
              el => el !== action.payload.favorite
            )
          ]
        }
      };
    default:
      return state;
  }
};
