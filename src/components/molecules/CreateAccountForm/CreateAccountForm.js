import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextInput from '../TextInput';
import Form from '../Form';
import Button from '../../atoms/Button';
import './styles.css';

export default class CreateAccountForm extends Component {
  render() {
    return (
      <Form>
        <select className='CreateAccountForm-input CreateAccountForm-select'>
        <option value='credit'>Credit</option>
        <option value='deposit'>Deposit</option>
        </ select>
        <TextInput
          className='CreateAccountForm-input'
          errorText='Error'
          placeholder='Code'
          type='text'
          name='code'
        />
        <Button className='CreateAccountForm-button'>Create</Button>
      </Form>
    );
  }
}
