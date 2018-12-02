import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Account from '../../atoms/Account';
import Button from '../../atoms/Button';

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
    return classNames('AccountList', className);
  }

  handleLiClick = item => {};

  generateList({ list } = this.props) {
    if (!list) return;
    return list.map(item => {
      return (
        <Fragment>
          <li key={item.id} onClick={() => this.handleLiClick(item)}>
            <Account
              id={item.id}
              balance={item.balance}
              type={item.type}
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
        <div className={className}>
        <Button className='AccountList-button'>Create account</Button>
        {this.generateList()}
        </div>
      </Fragment>
    );
  }
}
