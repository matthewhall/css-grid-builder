import { combineReducers } from 'redux';

import {
  ADD_NODE_AT_INDEX,
  REMOVE_NODE_AT_INDEX,
  SET_SETTINGS_DISPLAY_VALUE,
  SET_CORE_GRID_SETTINGS_CSS_VALUES,
  TOGGLE_SIDE_PANEL_OPEN
} from './actionTypes';

import initialState from './initialState';

const sidePanel = (state = initialState.sidePanel, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_PANEL_OPEN:
      return Object.assign({}, { open: action.value });

    default:
      return state;
  }
}

const settings = (state = initialState.settings, action) => {
  switch (action.type) {
    case SET_SETTINGS_DISPLAY_VALUE:
      return Object.assign({}, state, {
        'display': action.value
      });

    case SET_CORE_GRID_SETTINGS_CSS_VALUES:
      return Object.assign({}, state, action.values);

    default:
      return state;
  }
}

const nodes = (state = initialState.nodes, action) => {
  switch (action.type) {
    case ADD_NODE_AT_INDEX:
      return Object.assign({}, state, {
        lastNodeId: action.nodeData.node.id,
        allNodes: [
          ...state.allNodes.slice(0, action.nodeData.index),
          action.nodeData.node,
          ...state.allNodes.slice(action.nodeData.index + 1)
        ]
      });

    case REMOVE_NODE_AT_INDEX:
      return Object.assign({}, state, {
        allNodes: [
          ...state.allNodes.slice(0, action.index),
          ...state.allNodes.slice(action.index + 1)
        ]
      });

    default:
      return state;
  }
}

export default combineReducers({
  nodes,
  settings,
  sidePanel
})
