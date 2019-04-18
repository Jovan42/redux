import {
  ADD_ARTICLE,
  FOUND_BAD_WORD,
  DATA_REQUEST
} from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function badWord(payload) {
  return { type: FOUND_BAD_WORD, payload };
}

export function getData() {
  return { type: DATA_REQUEST };
}
