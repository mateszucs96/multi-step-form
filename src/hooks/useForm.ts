import { ChangeEvent, useEffect, useState } from 'react';

export const useForm = () => {
	const [formInput, setFormInput] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		plan: {},
	});

	const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
		setFormInput({ ...formInput, name: e.target.value });
	};
	const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
		setFormInput({ ...formInput, email: e.target.value });
	};
	const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
		setFormInput({ ...formInput, phoneNumber: e.target.value });
	};

	useEffect(() => {
		console.log(formInput);
	}, [formInput]);

	return {
		formInput,
		setFormInput,
		handleNameInput,
		handleEmailInput,
		handlePhoneInput,
	};
};
