import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Block from '../../atoms/Block';

import './styles.css';

export default class ItemList extends Component {
  static propTypes = {
    className: PropTypes.string,
    emptyGroupsText: PropTypes.string,
    groupList: PropTypes.array,
    onSelectGroup: PropTypes.func,
  };

  static defaultProps = {};

  getClassName({ className } = this.props) {
    return classNames('BlockList', className);
  }

  handleLiClick = item => {};

  generateList({ list } = this.props) {
    if (!list) return;
    return list.map(item => {
      return (
        <Fragment>
          <li key={item.id} onClick={() => this.handleLiClick(item)}>
            <Block
              date={item.date}
              hash={item.hash}
              miner={item.miner}
            />
          </li>
        </Fragment>
      );
    });
  }

  render() {
    const className = this.getClassName();
    return (
      <Fragment>
        <div className={className}>{this.generateList()}</div>
      </Fragment>
    );
  }
}
