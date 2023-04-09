import { useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import PriceTag from './components/PriceTag';
import ThankYou from './components/ThankYou';


const FORM_STEPS = 5;

function App() {
	const [step, setStep] = useState(1);

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

	return (
		<div className='App'>
			<Header step={step} />
			{step === 5 ? <ThankYou /> : <Form step={step} handleNextStep={handleNextStep} handleChange={handleChange} />}
			<Footer
				step={step}
				handleBack={handleBack}
				handleNextStep={handleNextStep}
			/>
		</div>
	);
}

export default App;
