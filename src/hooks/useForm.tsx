import { ChangeEvent, FormEvent, useState } from 'react';

export type Inputs = {
	info: {
		name: string;
		email: string;
		phoneNumber: string;
	}
	plan: {
		selected: number | null;
		isMonthly: boolean;
	}
	addOns: {
		'Online service': boolean,
		'Larger storage': boolean,
		'Customizable profile': boolean,
	}
}

export const useForm = () => {
	const [formInput, setFormInput] = useState<Inputs>({
		info: {
			name: '',
			email: '',
			phoneNumber: '',
		},
		plan: {
			selected: null,
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
		const name = e.currentTarget.name;
		const value = e.currentTarget.value;
		setFormInput(prevState => ({
			...prevState,
			info: {
				...prevState.info,
				[name]: value,
			},
		}));
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
		console.log(formInput);
	};

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
