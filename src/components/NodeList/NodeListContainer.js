import { connect } from 'react-redux';

import NodeList from './NodeList';

import {
  addNodeAtIndex,
  removeNodeAtIndex
} from '@/store/actions';

const mapStateToProps = (state) => ({
  lastNodeId: state.nodes.lastNodeId,
  nodes: state.nodes.allNodes,
  settings: state.settings
})

const mapDispatchToProps = (dispatch) => ({
  addNodeAtIndex: (nodeData) => dispatch(addNodeAtIndex(nodeData)),
  removeNodeAtIndex: (index) => dispatch(removeNodeAtIndex(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NodeList)
