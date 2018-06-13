import React from 'react';
import classes from './Button.scss';

const Button = props => {
	let btnClasses = classes[props.btnType];
	if (props.btnType === 'Toggle' && props.existingUser) {
		btnClasses = [classes[props.btnType], classes.Active].join(' ');
	}

	return (
		<button className={btnClasses} clicked={props.clicked}>
			{props.existingUser ? 'Sign In' : 'Sign Up'}
		</button>
	);
};

export default Button;
