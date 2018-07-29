import {
  ADD_NODE_AT_INDEX,
  SET_SETTINGS_DISPLAY_VALUE
} from './actionTypes';

export const setSettingsDisplayValue = (value) => {
  return { type: SET_SETTINGS_DISPLAY_VALUE, value };
}

export const addNodeAtIndex = (nodeData) => {
  return { type: ADD_NODE_AT_INDEX, nodeData };
}
