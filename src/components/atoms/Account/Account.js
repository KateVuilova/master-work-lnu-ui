import React, { Component } from 'react';
import './styles.css';

export default class Account extends Component {
  render() {
    const {
      id,
      type,
      balance,
    } = this.props;
    return (
        <div
          className='Account'
        >
          <div className='Account-left'>
            <span>Id: </span>
            {id}
          </div>
          <div className='Account-middle'>
            <span>Type: </span>
            {type}
          </div>
          <div className='Account-right'>
            <div className='Account-status'>
              <span>Balance: </span>
              {balance}
            </div>
          </div>
        </div>
    );
  }
}
