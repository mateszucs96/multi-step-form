import { useContext, useState } from 'react';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import ThankYou from './components/ThankYou';
import formContext from './store/form-context';
import { useValidation } from './hooks/useValidation';

const FORM_STEPS = 4;

function App() {
	const [step, setStep] = useState(1);
	const formCtx = useContext(formContext);
	const { touched, setTouched, errors, validateName, validateEmail, validatePhoneNumber } = useValidation();

	const handleNextStep = () => {
		if (step >= FORM_STEPS) return;
		setTouched({
			name: true,
			email: true,
			phoneNumber: true,
		});
		if (Object.entries(errors).some((errors) => !errors[1].isValid)) return;
		if (step === 1) {


			validateEmail(formCtx.formInput.info.email);
			validateName(formCtx.formInput.info.name);
			validatePhoneNumber(formCtx.formInput.info.phoneNumber);
		}
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
			{formCtx.isSubmitted ? <ThankYou /> :
				<Form step={step} handleChange={handleChange} errors={errors}
							validateName={validateName} validateEmail={validateEmail} validatePhoneNumber={validatePhoneNumber}
							touched={touched} setTouched={setTouched} />}
			<Footer
				step={step}
				handleBack={handleBack}
				handleNextStep={handleNextStep}
			/>
		</div>
	);
}

export default App;
