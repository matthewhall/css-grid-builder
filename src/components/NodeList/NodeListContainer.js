import { connect } from 'react-redux';

import NodeList from './NodeList';

import { addNodeAtIndex } from '@/store/actions';

const mapStateToProps = (state) => ({
  nodes: state.nodes,
  settings: state.settings
})

const mapDispatchToProps = (dispatch) => ({
  addNodeAtIndex: (nodeData) => dispatch(addNodeAtIndex(nodeData))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NodeList)
