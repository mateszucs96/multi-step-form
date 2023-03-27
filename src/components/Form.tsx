import { useForm } from '../hooks/useForm';
import AddOns from './AddOns';
import styles from './form.module.scss';
import PersonalInfo from './PersonalInfo';
import Plans from './Plans';
import Summary from './Summary';

const Form = ({ step }: { step: number }) => {
	const {
		formInput,
		handleInputChange,
		handlePlanSelect,
		handlePlanToggle,
		handleCheckboxes,
	} =
		useForm();
	return (
		<main>
			<div>
				<form className={styles.infoForm}>
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
					{step === 3 && <AddOns step={3} formInput={formInput} handleCheckboxes={handleCheckboxes}
																 isMonthly={formInput.plan.isMonthly} />}
					{step === 4 && <Summary formInput={formInput} />}
				</form>
			</div>
		</main>
	);
};

export default Form;
