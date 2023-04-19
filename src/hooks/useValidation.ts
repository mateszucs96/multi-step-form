import { useEffect, useState } from 'react';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;

export const useValidation = () => {
	const [touched, setTouched] = useState({
		name: false,
		email: false,
		phoneNumber: false,
	});
	const [errors, setErrors] = useState({
		name: {
			isValid: false,
			message: 'Required',
		},
		email: {
			isValid: false,
			message: 'Required',
		},
		phoneNumber: {
			isValid: false,
			message: 'Required',
		},
	});

	const validateEmail = (value: string) => {
		if (!value) {
			setErrors(prevState => ({
				...prevState,
				email: {
					isValid: false,
					message: 'Required',
				},
			}));
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			setErrors(prevState => ({
				...prevState,
				email: {
					isValid: false,
					message: 'Invalid email',
				},

			}));
		} else {
			setErrors(prevState => ({
				...prevState,
				email: {
					isValid: true,
					message: '',
				},
			}));
		}

	};

	const validateName = (value: string) => {
		if (!value) {
			console.log('no');
			setErrors(prevState => ({
				...prevState,
				name: {
					isValid: false,
					message: 'Required',
				},
			}));
		} else {
			setErrors(prevState => ({
				...prevState,
				name: {
					isValid: true,
					message: '',
				},
			}));
		}

	};

	const validatePhoneNumber = (value: string) => {
		if (!value) {
			setErrors(prevState => ({
				...prevState,
				phoneNumber: {
					isValid: false,
					message: 'Required',
				},

			}));
		} else if (!/^(?=.*[0-9])[+0-9]+$/i.test(value)) {
			setErrors(prevState => ({
				...prevState,
				phoneNumber: {
					isValid: false,
					message: 'Invalid phone number',
				},

			}));
		} else {
			setErrors(prevState => ({
				...prevState,
				phoneNumber: {
					isValid: true,
					message: '',
				},
			}));
		}

	};

	useEffect(() => {
		console.log(errors);
	}, [errors]);

	return {
		touched,
		setTouched,
		errors,
		validateName,
		validateEmail,
		validatePhoneNumber,
	};
};