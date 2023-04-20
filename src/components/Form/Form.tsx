import AddOns from './AddOns/AddOns';
import styles from './form.module.scss';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Plans from './Plans/Plans';
import Summary from './Summary/Summary';
import { useContext } from 'react';
import formContext from '../../store/form-context';
import { useValidation } from '../../hooks/useValidation';
import ButtonWrapper from '../Button/ButtonWrapper';


const FORM_STEPS = 4;

const Form = ({ stepHook }: { stepHook: [number, React.Dispatch<React.SetStateAction<number>>] }) => {
	const formCtx = useContext(formContext);
	const [step, setStep] = stepHook;
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
		<main>
			<div>
				<form className={styles.infoForm} onSubmit={(e) => {
					formCtx.handleSubmit(e);
				}} id='form'>
					{step === 1 && (<PersonalInfo errors={errors} validateName={validateName} validateEmail={validateEmail}
																				validatePhoneNumber={validatePhoneNumber} touched={touched}
																				setTouched={setTouched}
					/>)}
					{step === 2 &&
						<Plans />}
					{step === 3 && <AddOns />}
					{step === 4 && <Summary handleChange={handleChange} />}
					<ButtonWrapper step={step} handleNextStep={handleNextStep} handleBack={handleBack} />
				</form>
			</div>
		</main>);
};

export default Form;
