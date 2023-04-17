import { useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import ThankYou from './components/ThankYou';
import { useForm } from './hooks/useForm';


const FORM_STEPS = 4;

function App() {
	const [step, setStep] = useState(1);
	const {
		formInput,
		isSubmitted,
		handleInputChange,
		handlePlanSelect,
		handlePlanToggle,
		handleCheckboxes,
		handleSubmit,
	} = useForm();

	const handleNextStep = () => {
		if (step >= FORM_STEPS) return;
		setStep((prev) => prev + 1);
	};

	const handleBack = () => {
		setStep((prev) => prev - 1);
	};

	const handleChange = () => {
		setStep(2);
	};

	/*	const handleSubmit = () => {
			setIsSubmitted(true);
		};*/

	return (
		<div className='App'>
			<Header step={step} />
			{isSubmitted ? <ThankYou /> :
				<Form formInput={formInput} handleInputChange={handleInputChange} handlePlanSelect={handlePlanSelect}
							handlePlanToggle={handlePlanToggle} handleCheckboxes={handleCheckboxes} handleSubmit={handleSubmit}
							step={step} handleNextStep={handleNextStep} handleChange={handleChange} />}
			<Footer
				step={step}
				handleBack={handleBack}
				handleNextStep={handleNextStep}
				handleSubmit={handleSubmit}
				isSubmitted={isSubmitted}
			/>
		</div>
	);
}

export default App;
