import { useContext, useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import ThankYou from './components/ThankYou';
import formContext from './store/form-context';

const FORM_STEPS = 4;

function App() {
	const [step, setStep] = useState(1);
	const formCtx = useContext(formContext);

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
	console.log(formCtx.isSubmitted);

	return (
		<div className='App'>
			<Header step={step} />
			{formCtx.isSubmitted ? <ThankYou /> :
				<Form step={step} handleNextStep={handleNextStep} handleChange={handleChange} />}
			<Footer
				step={step}
				handleBack={handleBack}
				handleNextStep={handleNextStep}
			/>
		</div>
	);
}

export default App;
