import { connect } from 'react-redux';

import NodeList from './NodeList';

import { addNode } from '@/store/actions';

const mapStateToProps = (state) => ({
  nodes: state.nodes,
  settings: state.settings
})

const mapDispatchToProps = (dispatch) => ({
  addNode: (node) => dispatch(addNode(node))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NodeList)
