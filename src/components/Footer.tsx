import React, { MouseEventHandler } from 'react';
import styles from './footer.module.scss';

type Props = {
	step: number;
	handleBack: MouseEventHandler<HTMLButtonElement>;
	handleNextStep: MouseEventHandler<HTMLButtonElement>;
};

const Footer = ({ step, handleBack, handleNextStep }: Props) => {
	if (step === 5) return null;
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
				>
					Confirm
				</button>
			)}
		</footer>
	);
};

export default Footer;
