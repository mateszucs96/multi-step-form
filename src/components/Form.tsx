import AddOns from './AddOns';
import styles from './form.module.scss';
import PersonalInfo from './PersonalInfo';
import Plans from './Plans';
import Summary from './Summary';
import { useContext } from 'react';
import formContext from '../store/form-context';
import ThankYou from './ThankYou';

type Props = {
	step: number;
	handleNextStep: () => void;
	handleChange: () => void;
}

const Form = ({
								step,
								handleChange,
							}: Props) => {
	const formCtx = useContext(formContext);
	return (<main>
		<div>
			<form className={styles.infoForm} onSubmit={(e) => {
				formCtx.handleSubmit(e);

			}} id='form'>
				{step === 1 && (<PersonalInfo
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
