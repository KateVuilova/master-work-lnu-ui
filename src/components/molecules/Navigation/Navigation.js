import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

export default class Navigation extends Component {
	render () {
		return (
			<ul className='Navigation'>
				<li>
					<NavLink to='home'>Home</NavLink>
				</li>
				<li>
					<NavLink to='logout'>Logout</NavLink>
				</li>
			</ul>
		);
	}
}