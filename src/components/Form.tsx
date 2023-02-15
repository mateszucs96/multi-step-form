import { useForm } from '../hooks/useForm';
import AddOns from './AddOns';
import styles from './form.module.scss';
import PersonalInfo from './PersonalInfo';
import Plan from './Plan';
import Summary from './Summary';

const Form = ({ step }: { step: number }) => {
	const {
		formInput,
		handleInputChange,
		handlePlanSelect,
		handlePlanToggle,
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
					{step === 2 && <Plan step={2} handlePlanSelect={handlePlanSelect} formInput={formInput}
															 isMonthly={formInput.plan.isMonthly}
															 handlePlanToggle={handlePlanToggle} />}
					{step === 3 && <AddOns step={3} />}
					{step === 4 && <Summary />}
				</form>
			</div>
		</main>
	);
};

export default Form;
