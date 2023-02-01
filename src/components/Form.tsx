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

	const handleBack: MouseEventHandler<HTMLButtonElement> = () => {
		setStep((prev) => prev - 1);
	};

	useEffect(() => {
		console.log(step);
	}, [step]);

	return (
		<main>
			<div>
				<form className={styles.infoForm}>
					{step === 1 && <PersonalInfo step={1} />}
					{step === 2 && <Plan step={2} />}
					{step === 3 && <AddOns step={3} />}
					{step === 4 && <Summary />}
				</form>
				{step !== 1 && (
					<button type="button" onClick={handleBack}>
						Back
					</button>
				)}
				<button type="button" onClick={handleNextStep}>
					Next step
				</button>
			</div>
		</main>
	);
};

export default Form;
