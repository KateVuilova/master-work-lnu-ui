import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import { CheckIcon } from '../../../icons';

import './styles.css';

export default class CheckboxField extends Component {

	static propTypes = {
		checked: PropTypes.bool,
		children: PropTypes.any,
		className: PropTypes.string,
		name: PropTypes.string,
		onInputChange: PropTypes.func,
	}

	getClassName = (className) => {
		return classnames({
			CheckboxField: true,
		}, className);
	}

	render () {
		const { children, className, name, onInputChange, checked } = this.props;
		return (
			<label className={this.getClassName(className)}>
				<Fragment>
					<input type='checkbox'
						name={name}
						onChange={onInputChange}
						checked={checked}
					/>
					<span className='CheckboxField-checkmark'>
						{/* <CheckIcon /> */}
					</span>
				</Fragment>
				{children}
			</label>
		);
	}

}
