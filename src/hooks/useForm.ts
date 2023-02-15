import { ChangeEvent, useEffect, useState } from 'react';

export const useForm = () => {
	const [isMonthly, setIsMonthly] = useState(true);
	const [formInput, setFormInput] = useState({
		plan: 0,
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormInput({ ...formInput, [e.currentTarget.name]: e.currentTarget.value });
	};

	const handlePlanSelect = (e: React.MouseEvent<HTMLDivElement>) => {
		setFormInput({ ...formInput, plan: Number(e.currentTarget.dataset.attr) });
	};
	const handlePlanToggle = (e: React.MouseEvent<HTMLDivElement>) => {
		setIsMonthly(prevState => !prevState);
	};
	useEffect(() => {
		console.log(formInput);
	}, [formInput]);

	return {
		isMonthly,
		formInput,
		handleInputChange,
		handlePlanSelect,
		handlePlanToggle,
	};
};
