import {
  ADD_NODE,
  SET_SETTINGS_DISPLAY_VALUE
} from './actionTypes';

export const setSettingsDisplayValue = (value) => {
  return { type: SET_SETTINGS_DISPLAY_VALUE, value: value };
}

export const addNode = (node) => {
  return { type: ADD_NODE, node: node };
}
