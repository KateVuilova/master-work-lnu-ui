/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' fillRule='evenodd'>
		<path stroke='currentColor' strokeWidth='3' d='M9.859 9.859C4.274 15.443 1.5 22.129 1.5 30c0 7.871 2.774 14.557 8.359 20.141C15.443 55.726 22.129 58.5 30 58.5c7.871 0 14.557-2.774 20.141-8.359C55.726 44.557 58.5 37.871 58.5 30c0-7.871-2.774-14.557-8.359-20.141C44.557 4.274 37.871 1.5 30 1.5c-7.871 0-14.557 2.774-20.141 8.359z' />
		<path fill='currentColor' d='M33.478 30.977l10.78 10.78a1.768 1.768 0 1 1-2.5 2.501l-12.031-12.03c-.69-.69-.69-1.81 0-2.501l12.03-12.03a1.768 1.768 0 1 1 2.501 2.5l-10.78 10.78z' />
		<path fill='currentColor' d='M17.697 41.757a1.768 1.768 0 1 0 2.5 2.501l12.03-12.03c.692-.69.692-1.81 0-2.501l-12.03-12.03a1.768 1.768 0 1 0-2.5 2.5l10.78 10.78-10.78 10.78z' />
	</g>
);

export default class ErrorIcon extends PureComponent {

	render () {

		return (
			<SVGWrapper width={60} height={60}>
				{paths()}
			</SVGWrapper>
		);
	}

}
