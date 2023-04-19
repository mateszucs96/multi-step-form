import FormContext from './form-context';
import { useForm } from '../hooks/useForm';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
}

const FormProvider = ({ children }: Props) => {
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