import React, { MouseEventHandler } from 'react';
import styles from './footer.module.scss';

type Props = {
	step: number;
	handleBack: MouseEventHandler<HTMLButtonElement>;
	handleNextStep: MouseEventHandler<HTMLButtonElement>;
};

const Footer = ({ step, handleBack, handleNextStep }: Props) => {
	return (
		<footer className={styles.footer}>
			{step !== 1 && (
				<button
					type="button"
					className={styles.backButton}
					onClick={handleBack}
				>
					Go Back
				</button>
			)}
			{step !== 4 && (
				<button
					type="button"
					className={styles.nextButton}
					onClick={handleNextStep}
				>
					Next step
				</button>
			)}
		</footer>
	);
};

export default Footer;
