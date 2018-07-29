import { combineReducers } from 'redux';

import {
  ADD_NODE,
  SET_SETTINGS_DISPLAY_VALUE
} from './actionTypes';

const initialState = {
  settings: {
    display: 'grid'
  },
  nodes: [{
    text: 'div',
    id: 0
  }]
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
    case ADD_NODE:
      return [
        ...state,
        action.node
      ];

    default:
      return state;
  }
}

export default combineReducers({
  nodes,
  settings
})
