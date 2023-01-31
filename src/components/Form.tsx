import React, { MouseEventHandler, useEffect, useState } from 'react';
import AddOns from './AddOns';
import styles from './form.module.scss';
import PersonalInfo from './PersonalInfo';
import Plan from './Plan';
import Summary from './Summary';

const FORM_STEPS = 4;

const Form = () => {
	const [step, setStep] = useState(1);

	const handleNextStep: MouseEventHandler<HTMLButtonElement> = () => {
		if (step >= FORM_STEPS) return;
		setStep((prev) => prev + 1);
	};

	useEffect(() => {
		console.log(step);
	}, [step]);

	return (
		<main>
			<div>
				<form className={styles.infoForm}>
					<PersonalInfo />
					<Plan />
					<AddOns />
					<Summary />
				</form>
				<button type="button" onClick={handleNextStep}>
					Next step
				</button>
			</div>
		</main>
	);
};

export default Form;
