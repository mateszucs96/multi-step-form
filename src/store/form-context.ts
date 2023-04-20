import React, { ChangeEvent, FormEvent } from 'react';

const FormContext = React.createContext({
	formInput: {
		info: {
			name: '',
			email: '',
			phoneNumber: '',
		},
		plan: {
			selected: 0,
			isMonthly: true,
		},
		addOns: {
			'Online service': false,
			'Larger storage': false,
			'Customizable profile': false,
		},
	},
	isSubmitted: false,
	handleInputChange: (e: ChangeEvent<HTMLInputElement>): void => undefined,
	handlePlanSelect: (e: React.MouseEvent<HTMLDivElement>): void => undefined,
	handlePlanToggle: (): void => undefined,
	handleCheckboxes: (e: ChangeEvent<HTMLInputElement>): void => undefined,
	handleSubmit: (e: FormEvent<HTMLFormElement>): void => undefined,

});

export default FormContext;

