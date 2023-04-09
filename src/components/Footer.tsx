import React, { MouseEventHandler } from 'react';
import styles from './footer.module.scss';

type Props = {
	step: number;
	isSubmitted: boolean;
	handleBack: MouseEventHandler<HTMLButtonElement>;
	handleNextStep: MouseEventHandler<HTMLButtonElement>;
	handleSubmit: MouseEventHandler<HTMLButtonElement>;
};

const Footer = ({ isSubmitted, step, handleBack, handleNextStep, handleSubmit }: Props) => {
	if (isSubmitted) return null;
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
					className={styles.nextButton}
					onClick={handleNextStep}
				>
					Next step
				</button>
			)}
			{step === 4 && (
				<button
					type='submit'
					className={styles.nextButton}
					form='form'
					onClick={handleSubmit}
				>
					Confirm
				</button>
			)}
		</footer>
	);
};

export default Footer;
