import formContext from './form-context';
import FormContext from './form-context';
import React, { ChangeEvent, ReactNode, useState } from 'react';
import { useForm } from '../hooks/useForm';

const FormProvider = ({ children }) => {
	const {
		formInput,
		handleInputChange,
		handleCheckboxes,
		handleSubmit,
		handlePlanToggle,
		handlePlanSelect,
		isSubmitted,
	} = useForm();

	const formContext = {
		formInput,
		handleInputChange,
		handlePlanSelect,
		handlePlanToggle,
		handleCheckboxes,
		handleSubmit,
		isSubmitted,
	};

	return <FormContext.Provider value={formContext}>
		{children}
	</FormContext.Provider>;
};

export default FormProvider;