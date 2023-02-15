import { ChangeEvent, useEffect, useState } from 'react';

export const useForm = () => {
	const [isMonthly, setIsMonthly] = useState(true);
	const [formInput, setFormInput] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		plan: 0,
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

	const handlePlanSelect = (e: React.MouseEvent<HTMLDivElement>) => {
		setFormInput({ ...formInput, plan: Number(e.currentTarget.dataset.attr) });
	};
	const handlePlanToggle = (e: React.MouseEvent<HTMLDivElement>) => {
		setIsMonthly(prevState => !prevState);
	};

	useEffect(() => {
		console.log(formInput);
		console.log(isMonthly);
	}, [formInput, isMonthly]);

	return {
		isMonthly,
		formInput,
		setFormInput,
		handleNameInput,
		handleEmailInput,
		handlePhoneInput,
		handlePlanSelect,
		handlePlanToggle,
	};
};
