import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

export type Inputs = {
	plan: {
		selected: number;
		isMonthly: boolean;
	}
	addOns: {
		[key: string]: boolean;
	}
}

export const useForm = () => {
	const [formInput, setFormInput] = useState<Inputs>({
		plan: {
			selected: 0,
			isMonthly: true,
		},
		addOns: {
			'Online service': false,
			'Larger storage': false,
			'Customizable profile': false,
		},
	});
	const [isSubmitted, setIsSubmitted] = useState(false);

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
		console.log(e.currentTarget.name);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitted(true);
		console.log(isSubmitted);
	};

	useEffect(() => {
		console.log(formInput);
	}, [formInput]);

	return {
		formInput,
		isSubmitted,
		handleInputChange,
		handlePlanSelect,
		handlePlanToggle,
		handleCheckboxes,
		handleSubmit,
	};
};
