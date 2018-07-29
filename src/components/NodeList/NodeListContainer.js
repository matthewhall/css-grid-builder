import { connect } from 'react-redux';

import NodeList from './NodeList';

const mapStateToProps = (state) => ({
  settings: state.settings
})

export default connect(mapStateToProps)(NodeList)
