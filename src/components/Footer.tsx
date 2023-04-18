import React, { MouseEventHandler, useContext } from 'react';
import styles from './footer.module.scss';
import formContext from '../store/form-context';

type Props = {
	step: number;
	handleBack: MouseEventHandler<HTMLButtonElement>;
	handleNextStep: MouseEventHandler<HTMLButtonElement>;
};

const Footer = ({ step, handleBack, handleNextStep }: Props) => {
	const formCtx = useContext(formContext);
	if (formCtx.isSubmitted) return null;
	return (
		<footer className={styles.footer}>
			{step !== 1 && (
				<button
					type='button'
					className={styles.backButton}
					onClick={handleBack}
				>
					Go Back
				</button>
			)}
			{step !== 4 && (
				<button
					type='button'
					className={`${styles.nextButton} button`}
					onClick={handleNextStep}
				>
					Next Step
				</button>
			)}
			{step === 4 && (
				<button
					type='submit'
					className={`${styles.confirmButton} button`}
					form='form'
					onClick={formCtx.handleSubmit}
				>
					Confirm
				</button>
			)}
		</footer>
	);
};

export default Footer;
