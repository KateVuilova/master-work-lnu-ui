import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextInput from '../TextInput';
import Form from '../Form';
import Button from '../../atoms/Button';
import './styles.css';

export default class CreateTransactionForm extends Component {
  render() {
    return (
      <Form>
        <TextInput
          className='CreateTransactionForm-input'
          errorText='Error'
          placeholder='From account'
          type='text'
          name='from'
        />
        <TextInput
          className='CreateTransactionForm-input'
          errorText='Error'
          placeholder='To account'
          type='text'
          name='to'
        />
        <TextInput
          className='CreateTransactionForm-input'
          errorText='Error'
          placeholder='Money'
          type='text'
          name='money'
        />
        <TextInput
          className='CreateTransactionForm-input'
          errorText='Error'
          placeholder='Description'
          type='text'
          name='description'
        />
        <Button className='CreateTransactionForm-button'>Send</Button>
      </Form>
    );
  }
}
