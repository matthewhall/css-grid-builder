import { combineReducers } from 'redux';

import {
  ADD_NODE_AT_INDEX,
  REMOVE_NODE_AT_INDEX,
  SET_SETTINGS_DISPLAY_VALUE,
  SET_CORE_GRID_SETTINGS_CSS_VALUES
} from './actionTypes';

const initialState = {
  settings: {
    'display': 'grid',
    'gridGap': '10px',
    'gridTemplateColumns': '',
    'gridTemplateRows': ''
  },
  nodes: [
    {
      text: 'div',
      id: Date.now()
    }
  ]
};

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
      return [
        ...state.slice(0, action.nodeData.index),
        action.nodeData.node,
        ...state.slice(action.nodeData.index + 1)
      ];

    case REMOVE_NODE_AT_INDEX:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    default:
      return state;
  }
}

export default combineReducers({
  nodes,
  settings
})
