import { connect } from 'react-redux';

import CoreSettings from './CoreSettings';

import {
  setSettingsDisplayValue,
  setCoreGridSettingsValues
} from '@/store/actions';

const mapStateToProps = (state) => ({
  settings: state.settings
})

const mapDispatchToProps = (dispatch) => ({
  setNodeListDisplayStyle: (value) => dispatch(setSettingsDisplayValue(value)),
  setCoreGridSettingsStyles: (values) => dispatch(setCoreGridSettingsValues(values))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoreSettings)
