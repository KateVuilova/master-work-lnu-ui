import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ELIPSIS = '...';
const REDUCTION = 3;

export default class MultilineEllipsis extends Component {

	static propTypes = {
		textContent: PropTypes.string,
	}

	static defaultProps = {
		textContent: '',
	}

	el = React.createRef();

	state = {
		textContent: this.props.textContent,
	};

	componentDidMount () {
		this.computeEllipsis();
	}

	componentDidUpdate ({ textContent }) {
		if (this.props.textContent !== textContent) {
			this.updateTextContent(this.props.textContent, () => this.computeEllipsis());
		}
	}

	computeEllipsis () {
		window.requestAnimationFrame(() => {

			const el = this.el.current;

			if (!el) return;
			const parentHeight = el.parentElement.clientHeight;
			// Keep replacing the last word with `...` until the span no longer exceeds its parent.
			while ((el.offsetHeight - parentHeight) > 6) this.setEllipsis(el);
			this.updateTextContent(this.props.textContent);
		});
	}

	setEllipsis (el) {
		/* Remove 3 characters at a time (remove 6, add 3 with ELIPSIS).
		   This is just to improve performance. */
		const lengthToShortenBy = REDUCTION + ELIPSIS.length;
		const shortenedString = el.textContent.slice(0, -lengthToShortenBy).trim();
		el.textContent = `${shortenedString}${ELIPSIS}`;
	}

	updateTextContent (textContent, onComplete) {
		this.setState({ textContent }, onComplete);
	}

	render () {
		return (
			<span
				className='MultilineEllipsis'
				ref={this.el}
				title={this.props.textContent}
			>
				{this.state.textContent}
			</span>
		);
	}

}
