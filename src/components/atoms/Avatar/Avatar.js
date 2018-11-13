import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import constants from './constants';
import './styles.css';

const { AVATAR_SIZES } = constants;

export default class Avatar extends PureComponent {

	static AVATAR_SIZES = AVATAR_SIZES;

	constructor (props) {
		super(props);

		this.state = {
			isImgValid: false,
		};
	}

	getClassName ({ size, border, className }) {
		return classNames({
			Avatar: true,
			'Avatar-22': size === AVATAR_SIZES.AVATAR_22,
			'Avatar-28': size === AVATAR_SIZES.AVATAR_28,
			'Avatar-44': size === AVATAR_SIZES.AVATAR_44,
			'Avatar-50': size === AVATAR_SIZES.AVATAR_50,
			'Avatar-60': size === AVATAR_SIZES.AVATAR_60,
			'Avatar-70': size === AVATAR_SIZES.AVATAR_70,
			'Avatar-80': size === AVATAR_SIZES.AVATAR_80,
			'Avatar-196': size === AVATAR_SIZES.AVATAR_196,
			'Avatar-border': border,
		}, className);
	}

	checkImg (img) {
		if (!img) return;
		const image = new Image();
		image.onload = () => {
			if (this._isMounted) {
				this.setState({ isImgValid: image.width > 1 });
			}
		};
		image.src = img;
		return image.width > 1;
	}

	componentDidMount () {
		this._isMounted = true;
	}

	componentWillUnmount () {
		this._isMounted = false;
	}

	UNSAFE_componentWillMount () {
		this.checkImg(this.props.img);
	}

	UNSAFE_componentWillReceiveProps (nextProps) {
		if (this.props.img !== nextProps.img) {
			this.setState({ isImgValid: false });
			this.checkImg(nextProps.img);
		}
	}

	render () {
		const {
			initials,
			img,
			color,
		} = this.props;

		const style = { backgroundImage: `url(${img})` };

		const bgColor = {
			backgroundColor: color && (color.startsWith('#') ? `${color}` : `#${color}`),
		};

		return (
			<div
				className={this.getClassName(this.props)}
				style={this.state.isImgValid === false ? bgColor : style}>
				{this.state.isImgValid === false ? initials : ''}
			</div>
		);
	}
}

Avatar.defaultProps = {
	size: AVATAR_SIZES.AVATAR_50,
	border: false,
};

Avatar.propTypes = {
	border: PropTypes.bool,
	className: PropTypes.string,
	color: PropTypes.string,
	img: PropTypes.string,
	initials: PropTypes.string.isRequired,
	size: PropTypes.string,
};
