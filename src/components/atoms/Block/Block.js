import React, { Component } from 'react';

import './styles.css';

export default class Block extends Component {
  render() {
    const {
    date,
    hash,
    miner,
  } = this.props;
    return (
      <div className='Block'>
        <div>
          <span>Date: </span>{date}
        </div>
        <div>
          <span>Hash: </span>{hash}
        </div>
        <div>
          <span>Miner: </span>{miner}
        </div>
      </div>
    );
  }
}
