import { combineReducers } from 'redux';

import {
  ADD_NODE_AT_INDEX,
  SET_SETTINGS_DISPLAY_VALUE
} from './actionTypes';

const initialState = {
  settings: {
    display: 'grid'
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
        display: action.value
      });

    default:
      return state;
  }
}

const nodes = (state = initialState.nodes, action) => {
  switch (action.type) {
    case ADD_NODE_AT_INDEX:
      let index = action.nodeData.index;

      return [
        ...state.slice(0, index),
        action.nodeData.node,
        ...state.slice(index + 1)
      ];

    default:
      return state;
  }
}

export default combineReducers({
  nodes,
  settings
})
