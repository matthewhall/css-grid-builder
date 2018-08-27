import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './NodeSettings.scss';

class NodeSettings extends Component {
  static propTypes = {
    nodeData: PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      className: PropTypes.string,
      styles: PropTypes.objectOf(PropTypes.string)
    }),
    onStyleChange: PropTypes.func
  }

  static defaultProps = {
    nodeData: {
      styles: {
        gridColumnEnd: '',
        gridRowStart: '',
        gridRowEnd: '',
        gridArea: '',
        justifySelf: '',
        alignSelf: ''
      }
    }
  }

  render() {
    const { nodeData, onStyleChange } = this.props;

    return (
      <Fragment>
        <h2>Settings for node: {nodeData.id}</h2>

        <div className="field">
          <label htmlFor="text">Text</label>
          <textarea id="text"
              onChange={($event) => {}}
              value={nodeData.text} />
        </div>

        <div className="field-group field-group-rows field-group-rows-2-col">
          <div className="field">
            <label htmlFor="class-name">Class name</label>
            <input type="text"
                name="className"
                id="class-name"
                onChange={($event) => {}}
                value={nodeData.className} />
          </div>

          <div className="field">
            <label htmlFor="grid-column-start">Grid column start</label>
            <input type="text"
                name="gridColumnStart"
                id="grid-column-start"
                onChange={($event) => onStyleChange($event)}
                value={nodeData.styles.gridColumnStart} />
          </div>

          <div className="field">
            <label htmlFor="grid-column-end">Grid column end</label>
            <input type="text"
                name="gridColumnEnd"
                id="grid-column-end"
                onChange={($event) => onStyleChange($event)}
                value={nodeData.styles.gridColumnEnd} />
          </div>

          <div className="field">
            <label htmlFor="grid-row-start">Grid row start</label>
            <input type="text"
                name="gridRowStart"
                id="grid-row-start"
                onChange={($event) => onStyleChange($event)}
                value={nodeData.styles.gridRowStart} />
          </div>

          <div className="field">
            <label htmlFor="grid-row-end">Grid row end</label>
            <input type="text"
                name="gridRowEnd"
                id="grid-row-end"
                onChange={($event) => onStyleChange($event)}
                value={nodeData.styles.gridRowEnd} />
          </div>

          <div className="field">
            <label htmlFor="grid-area">Grid area</label>
            <input type="text"
                name="gridArea"
                id="grid-area"
                onChange={($event) => onStyleChange($event)}
                value={nodeData.styles.gridArea} />
          </div>

          <div className="field">
            <label htmlFor="justify-self">Justify self</label>
            <input type="text"
                name="justifySelf"
                id="justify-self"
                onChange={($event) => onStyleChange($event)}
                value={nodeData.styles.justifySelf} />
          </div>

          <div className="field">
            <label htmlFor="align-self">Align self</label>
            <input type="text"
                name="alignSelf"
                id="align-self"
                onChange={($event) => onStyleChange($event)}
                value={nodeData.styles.alignSelf} />
          </div>
        </div>

        <button className="button button--primary">Done</button>
      </Fragment>
    );
  }
}

export default NodeSettings;
