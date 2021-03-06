import {
  ADD_NODE_AT_INDEX,
  SET_SETTINGS_DISPLAY_VALUE,
  REMOVE_NODE_AT_INDEX,
  SET_CORE_GRID_SETTINGS_CSS_VALUES,
  SET_NODE_GRID_STYLE,
  TOGGLE_SIDE_PANEL_OPEN
} from './actionTypes';

export const setSettingsDisplayValue = (value) => {
  return { type: SET_SETTINGS_DISPLAY_VALUE, value };
}

export const setCoreGridSettingsValues = (values) => {
  return { type: SET_CORE_GRID_SETTINGS_CSS_VALUES, values };
}

export const addNodeAtIndex = (nodeData) => {
  return { type: ADD_NODE_AT_INDEX, nodeData };
}

export const removeNodeAtIndex = (index) => {
  return { type: REMOVE_NODE_AT_INDEX, index };
}

export const setNodeGridStyle = (id, prop, value) => {
  return { type: SET_NODE_GRID_STYLE, id, prop, value };
}

export const toggleSidePanelOpen = (value) => {
  return { type: TOGGLE_SIDE_PANEL_OPEN, value };
}
