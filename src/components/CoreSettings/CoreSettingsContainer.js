import { connect } from 'react-redux';

import CoreSettings from './CoreSettings';

import { setSettingsDisplayValue } from '@/store/actions';

const mapStateToProps = (state) => ({
  settings: state.settings
})

const mapDispatchToProps = (dispatch) => ({
  setNodeListDisplayStyle: (value) => dispatch(setSettingsDisplayValue(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoreSettings)
