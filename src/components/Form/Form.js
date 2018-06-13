import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Aux from '../../hoc/Aux/Aux';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import classes from './Form.scss';

class Form extends Component {
	state = {
		form: {
			companyID: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					name: 'companyName',
					placeholder: 'Your company...',
				},
				label: 'Company Name',
				value: '',
				validation: {
					required: true,
					minLength: 3,
				},
				valid: false,
				changed: false,
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					name: 'email',
					placeholder: 'Your email...',
				},
				label: 'Email',
				value: '',
				validation: {
					regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line no-useless-escape
					required: true,
				},
				valid: false,
				changed: false,
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					name: 'password',
					placeholder: 'Your password...',
				},
				label: 'Password',
				value: '',
				validation: {
					regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{8,25}$/, // eslint-disable-line no-useless-escape
					required: true,
				},
				valid: false,
				changed: false,
			},
			terms: {
				elementType: 'checkbox',
				elementConfig: {
					type: 'checkbox',
					name: 'terms',
				},
				validation: {
					required: true,
				},
				checked: false,
				changed: false,
				triggerCheckError: false,
			},
		},
		isFormValid: false,
	};

	inputChanged = (event, inputId) => {
		const updatedForm = { ...this.state.form };
		const updatedInput = { ...updatedForm[inputId] };

		updatedInput.value = event.target.value;

		switch (inputId) {
			case 'companyID':
				updatedInput.valid =
					updatedInput.value.length >= updatedInput.validation.minLength;
				break;

			case 'email':
			case 'password':
				updatedInput.valid = updatedInput.validation.regex.test(
					updatedInput.value
				);
				break;

			case 'terms':
				updatedInput.checked = event.target.checked;
				break;

			default:
				updatedInput.valid = updatedInput.valid;
		}

		updatedInput.changed = true;
		updatedForm[inputId] = updatedInput;

		let formValid = false;
		if (this.props.existingUser) {
			formValid = updatedForm.email.valid && updatedForm.password.valid;
		} else {
			formValid =
				updatedForm.companyID.valid &&
				updatedForm.email.valid &&
				updatedForm.password.valid &&
				updatedForm.terms.checked;
		}

		this.setState({
			form: updatedForm,
			isFormValid: formValid,
		});
	};

	formSubmit = event => {
		event.preventDefault();

		const updatedForm = { ...this.state.form };
		const updatedFormTerms = { ...updatedForm.terms };

		if (updatedFormTerms.checked === false && !this.props.existingUser) {
			updatedFormTerms.triggerCheckError = true;
			updatedFormTerms.changed = false;
			updatedForm.terms = updatedFormTerms;

			this.setState({
				form: updatedForm,
			});
		}

		if (!this.state.isFormValid) {
			return;
		}

		const userEmail = this.state.form.email.value;
		const userPassword = this.state.form.password.value;

		if (this.props.existingUser) {
			this.props.onSignInUser(userEmail, userPassword, this.props.history);
		}

		if (!this.props.existingUser) {
			const newUserData = {};

			for (let formElement in this.state.form) {
				switch (formElement) {
					case 'companyID':
						newUserData[formElement] = this.state.form[formElement].value
							.trim()
							.replace(/\s/g, '-')
							.toLowerCase();
						break;
					case 'terms':
						newUserData[formElement] = this.state.form[formElement].checked;
						break;
					default:
						newUserData[formElement] = this.state.form[formElement].value;
				}
			}

			this.props.onSignUpUser(newUserData);
		}
	};

	render() {
		const formElements = [];

		for (let key in this.state.form) {
			formElements.push({
				id: key,
				config: this.state.form[key],
			});
		}

		let formMessageAlert =
			'You account has been created successfully. Please sign in.';

		if (this.props.userNotFound && this.props.existingUser) {
			formMessageAlert = 'Email or password is invalid. Please try again.';
		}

		return (
			<Aux>
				{(this.props.userSignUpSuccess && this.props.existingUser) ||
				(this.props.userNotFound && this.props.existingUser) ? (
					<p className={classes.FormMessageAlert}>{formMessageAlert}</p>
				) : null}

				<form className={classes.Form} onSubmit={this.formSubmit}>
					{formElements.map(formElement => (
						<Input
							key={formElement.id}
							label={formElement.config.label}
							existingUser={this.props.existingUser}
							elementType={formElement.config.elementType}
							elementConfig={formElement.config.elementConfig}
							value={formElement.config.value}
							invalid={!formElement.config.valid}
							shouldValidate={formElement.config.validation.required}
							changed={formElement.config.changed}
							checkBoxError={formElement.config.triggerCheckError}
							inputChanged={event => this.inputChanged(event, formElement.id)}
						/>
					))}

					<Button existingUser={this.props.existingUser} btnType="Submit" />

					{this.props.existingUser ? (
						<p className={classes.FormLink}>
							<a href="/#">Forgot Password?</a>
						</p>
					) : null}

					{!this.props.existingUser ? (
						<p className={classes.FormLink}>
							<a href="/#">Haven't recieved confirmation e-mail?</a>
						</p>
					) : null}
				</form>
			</Aux>
		);
	}
}

const mapStateToProps = state => {
	return {
		userSignInSuccess: state.signInSucess,
		userSignUpSuccess: state.signUpSuccess,
		existingUser: state.isExistingUser,
		userNotFound: state.userNotFound,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSignInUser: (email, password, history) =>
			dispatch(actions.signInUser(email, password, history)),
		onSignUpUser: newUserData => dispatch(actions.signUpUser(newUserData)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);
