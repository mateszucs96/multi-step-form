import { useState } from 'react';

export const useValidation = () => {
	const [emailError, setEmailError] = useState('');
	const [nameError, setNameError] = useState('');
	const [phoneNumberError, setPhoneNumberError] = useState('');

	function validateEmail(value) {
		let error;
		if (!value) {
			error = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error = 'Invalid email address';
		}
		setEmailError(error);
	}

	function validateName(value) {
		let error;
		if (!value) {
			error = 'Required';
		}
		setNameError(error);
		return nameError;
	}

	function validatePhoneNumber(value) {
		let error;
		if (!value) {
			error = 'Required';
		} else if (!/^(?=.*[0-9])[+0-9]+$/i.test(value)) {
			error = 'Invalid phone number';
		}
		setPhoneNumberError(error);
	}

	return {
		nameError,
		emailError,
		phoneNumberError,
		validateName,
		validateEmail,
		validatePhoneNumber,
	};
};