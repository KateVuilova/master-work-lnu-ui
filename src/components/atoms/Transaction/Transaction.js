import React, { Component } from 'react';
import './styles.css';

export default class Transaction extends Component {
  state = {
    open: false,
  };

  render() {
    const {
      id,
      amount,
      status,
      date,
      description,
      fromAccount,
      toAccount,
      sentTime,
      processedTime,
      blockId,
    } = this.props;
    return (
      <div className='Transaction-wrapper'>
        <div
          className='Transaction'
          onClick={() => {
            this.setState({ open: !this.state.open });
          }}
        >
          <div className='Transaction-left'>
            <span>Id: </span>
            {id}
          </div>
          <div className='Transaction-middle'>
            <span>Amount: </span>
            {amount}
          </div>
          <div className='Transaction-right'>
            <div className='Transaction-status'>
              <span>Status: </span>
              {status}
            </div>
            <div className='Transaction-data'>
              <span>Date: </span>
              {date}
            </div>
          </div>
        </div>
        {this.state.open && (
          <div className='Transaction-details'>
            <p>
              <span>Description: </span>
			  {description}
            </p>
            <p>
              <span>FromAccount: </span>
			  {fromAccount}
            </p>
            <p>
              <span>ToAccount: </span>
			  {toAccount}
            </p>
            <p>
              <span>SentTime: </span>
			  {sentTime}
            </p>
            <p>
              <span>ProcessedTime: </span>
			  {processedTime}
            </p>
            <p>
              <span>BlockId: </span>
			  {blockId}
            </p>
          </div>
        )}
      </div>
    );
  }
}
