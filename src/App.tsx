import { MouseEventHandler, useEffect, useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import { useForm } from './hooks/useForm';

const FORM_STEPS = 4;

function App() {
	const [step, setStep] = useState(1);

	const handleNextStep: MouseEventHandler<HTMLButtonElement> = () => {
		if (step >= FORM_STEPS) return;
		setStep((prev) => prev + 1);
	};

	const handleBack: MouseEventHandler<HTMLButtonElement> = () => {
		setStep((prev) => prev - 1);
	};

	return (
		<div className="App">
			<Header step={step} />
			<Form step={step} />
			<Footer
				step={step}
				handleBack={handleBack}
				handleNextStep={handleNextStep}
			/>
		</div>
	);
}

export default App;
