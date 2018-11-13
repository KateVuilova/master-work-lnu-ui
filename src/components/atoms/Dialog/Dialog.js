import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

// import { CloseIcon } from '../../../icons';

import './styles.css';

export class Dialog extends Component {

	isDialogSupported = window.HTMLDialogElement;
	dialogRef = this.props.forwardedRef || React.createRef();

	componentDidMount () {
		if (!this.isDialogSupported) this.loadPolyfill();
		this.currentDialog().addEventListener('close', this.props.onClose);
	}

	componentWillUnmount () {
		this.currentDialog().removeEventListener('close', this.props.onClose);
	}

	currentDialog () {
		return this.dialogRef.current;
	}

	handleClick = () => {
		this.closeModal();
	};

	closeModal () {
		this.currentDialog().close();
	}

	showModal () {
		this.currentDialog().showModal();
	}

	async loadPolyfill () {
		const dialogPolyfill = await import('dialog-polyfill');
		const currentDialog = this.currentDialog();
		if (!currentDialog) return;
		dialogPolyfill.registerDialog(currentDialog);
	}

	renderModal ({ className, children }) {
		const { closeButton = true } = this.props;
		return (
			<dialog
				className={className}
				ref={this.dialogRef}>
				{closeButton &&
					<button
						className='Dialog-close-button'
						onClick={this.handleClick}
					>
						{/* <CloseIcon /> */}
					</button>}
				{children}
			</dialog>
		);
	}

	render () {
		return (
			!this.isDialogSupported
				? ReactDOM.createPortal(
					this.renderModal(this.props),
					document.body)
				: this.renderModal(this.props)
		);
	}
}

Dialog.defaultProps = {
	onClose: () => {},
};

Dialog.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	closeButton: PropTypes.bool,
	forwardedRef: PropTypes.any,
	onClose: PropTypes.func,
};

/* eslint-disable-next-line react/no-multi-comp */
const _Dialog = (props, ref) => <Dialog {...props} forwardedRef={ref} />;
_Dialog.displayName = 'Dialog';

// NOTE: Resolves an issue where enzyme@^3.3.0 and enzyme-adapter-react-16@^1.1.1 don't support `forwardRef`.
export default process.env.NODE_ENV === 'test' ? Dialog : React.forwardRef(_Dialog);
