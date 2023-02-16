import { ChangeEvent, useEffect, useState } from 'react';

export const useForm = () => {
	const [formInput, setFormInput] = useState({
		plan: {
			selected: 0,
			isMonthly: true,
		},
		addOns: {},
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
			addOns: {
				'online-service': false,
				'larger-storage': false,
				'custom-profile': false,
			},
		}));
	};
	const handlePlanToggle = () => {
		setFormInput(prevState => ({
			...prevState,
			plan: {
				...prevState.plan,
				isMonthly: !prevState.plan.isMonthly,
			},
		}));
	};

	const handleCheckboxes = (e: ChangeEvent<HTMLInputElement>) => {
		const addOn = e.currentTarget.name;
		const isChecked = e.currentTarget.checked;
		setFormInput(prevState => ({
			...prevState,
			addOns: {
				...prevState.addOns,
				[addOn]: isChecked,
			},
		}));
		console.log(e);
	};

	useEffect(() => {
		console.log(formInput);
	}, [formInput]);

	return {
		formInput,
		handleInputChange,
		handlePlanSelect,
		handlePlanToggle,
		handleCheckboxes,
	};
};
