import { ChangeEvent, useEffect, useState } from 'react';

export const useForm = () => {
	const [formInput, setFormInput] = useState({
		plan: {
			selected: 0,
			isMonthly: true,
		},
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormInput({ ...formInput, [e.currentTarget.name]: e.currentTarget.value });
	};

	const handlePlanSelect = (e: React.MouseEvent<HTMLDivElement>) => {
		const clicked = Number(e.currentTarget.dataset.attr);
		setFormInput(prevState => ({
			...prevState,
			plan: {
				...prevState.plan,
				selected: clicked,
			},
		}));
	};
	const handlePlanToggle = (e: React.MouseEvent<HTMLDivElement>) => {
		setFormInput(prevState => ({
			...prevState,
			plan: {
				...prevState.plan,
				isMonthly: !prevState.plan.isMonthly,
			},
		}));
	};
	useEffect(() => {
		console.log(formInput);
	}, [formInput]);

	return {
		formInput,
		handleInputChange,
		handlePlanSelect,
		handlePlanToggle,
	};
};
