import { combineReducers } from 'redux';

const initialState = {
  settings: {
    display: 'grid'
  }
};

const settings = (state = initialState.settings, action) => {
  switch (action.type) {
    case 'SET_SETTINGS_DISPLAY_VALUE':
      return Object.assign({}, state, {
        display: action.value
      });

    default:
      return state;
  }
}

export default combineReducers({
  settings
})
