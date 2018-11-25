import React from 'react';
import { storiesOf } from '@storybook/react';
import SignInForm from './SignInForm';

storiesOf('2. Molecules / SignInForm', module).add('Form', () => {
	return (
		<div style={{ marginTop: '50px', width: 'calc(100% - 155px)' }}>
			<SignInForm
				header='Hello!'
				paragraph='Please sign in to continue'
				buttonLabel='Sign in'
				errorMessage='The email or password is not valid'
				emailPlaceholder='Email'
				emailValidationMessage='Email invalid'
				passwordPlaceholder='Password'
				passwordValidationMessage='Password invalid'
			/>
		</div>
	);
});
