import AddOns from './AddOns/AddOns';
import styles from './form.module.scss';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Plans from './Plans/Plans';
import Summary from './Summary/Summary';
import { useContext } from 'react';
import formContext from '../../store/form-context';
import ThankYou from '../ThankYou';
import { useValidation } from '../../hooks/useValidation';

type Props = {
	step: number;
	handleNextStep: () => void;
	handleChange: () => void;
	setTouched: React.Dispatch<React.SetStateAction<{ name: boolean, email: boolean, phoneNumber: boolean }>>;
}

const Form = ({
								step,
								handleChange,
								errors,
								validateName,
								validateEmail,
								validatePhoneNumber,
								touched,
								setTouched,
							}: Props) => {
	const formCtx = useContext(formContext);

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
				</form>
			</div>
		</main>);
};

export default Form;
