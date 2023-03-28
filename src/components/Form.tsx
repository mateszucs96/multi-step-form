import { useForm } from '../hooks/useForm';
import AddOns from './AddOns';
import styles from './form.module.scss';
import PersonalInfo from './PersonalInfo';
import Plans from './Plans';
import Summary from './Summary';
import ThankYou from './ThankYou';

type Props = {
	step: number;
	handleNextStep: () => void;
}

const Form = ({
								step,
								handleNextStep,
							}: Props) => {
	const {
		formInput,
		handleInputChange,
		handlePlanSelect,
		handlePlanToggle,
		handleCheckboxes,
		handleSubmit,
	} =
		useForm();
	return (
		<main>
			<div>
				<form className={styles.infoForm} onSubmit={(e) => {
					handleSubmit(e);
					handleNextStep();
				}} id='form'>
					{step === 1 && (
						<PersonalInfo
							step={1}
							formInput={formInput}
							handleInputChange={handleInputChange}
						/>
					)}
					{step === 2 && <Plans step={2} handlePlanSelect={handlePlanSelect} formInput={formInput}
																isMonthly={formInput.plan.isMonthly}
																handlePlanToggle={handlePlanToggle} />}
					{step === 3 && <AddOns step={3} formInput={formInput} handleCheckboxes={handleCheckboxes} />}
					{step === 4 && <Summary formInput={formInput} />}
					{step === 5 && <ThankYou />}
				</form>
			</div>
		</main>
	);
};

export default Form;
