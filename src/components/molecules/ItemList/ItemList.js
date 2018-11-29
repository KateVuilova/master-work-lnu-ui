import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Transaction from '../../atoms/Transaction';

import './styles.css';

export default class ItemList extends Component {
  static propTypes = {
    className: PropTypes.string,
    emptyGroupsText: PropTypes.string,
    groupList: PropTypes.array,
    onSelectGroup: PropTypes.func,
  };

  static defaultProps = {};

  state = {
    expandedItems: [],
  };

  onClick = ({ event, props }) => console.log(event, props);

  getClassName({ className } = this.props) {
    return classNames('ItemList', className);
  }

  getInnerClassName({ className } = this.props) {
    return classNames('ItemList-inner', className);
  }

  handleLiClick = item => {
    if (item.children && !this.state.expandedItems.includes(item.id)) {
      this.setState({
        expandedItems: [...this.state.expandedItems, item.id],
      });
    } else if (item.children && this.state.expandedItems.includes(item.id)) {
      const expItems = [...this.state.expandedItems].filter(
        expItem => expItem !== item.id,
      );
      this.setState({ expandedItems: expItems });
    }
  };

  generateList({ list } = this.props) {
    if (!list) return;
    return list.map(item => {
      return (
        <Fragment>
          <li key={item.id} onClick={() => this.handleLiClick(item)}>
            <Transaction
              id={item.id}
              amount={item.amount}
              status={item.status}
              date={item.date}
              description={item.description}
              fromAccount={item.fromAccount}
              toAccount={item.toAccount}
              sentTime={item.sentTime}
              processedTime={item.processedTime}
              blockId={item.blockId}
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
