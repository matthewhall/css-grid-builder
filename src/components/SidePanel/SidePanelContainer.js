import { connect } from 'react-redux';

import SidePanel from './SidePanel';

import { toggleSidePanelOpen } from '@/store/actions';

const mapStateToProps = (state) => ({
  open: state.sidePanel.open
})

const mapDispatchToProps = (dispatch) => ({
  toggleSidePanel: (open) => dispatch(toggleSidePanelOpen(open))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanel)
