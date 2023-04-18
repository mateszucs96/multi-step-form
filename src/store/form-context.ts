import React, { ChangeEvent, FormEvent } from 'react';
import exp from 'constants';

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
	handleInputChange: (e: ChangeEvent<HTMLInputElement>) => {
	},
	handlePlanSelect: (e: React.MouseEvent<HTMLDivElement>) => {
	},
	handlePlanToggle: () => {
	},
	handleCheckboxes: (e: ChangeEvent<HTMLInputElement>) => {
	},
	handleSubmit: (e: FormEvent<HTMLFormElement>) => {
	},

});

export default FormContext;

