import styles from './header.module.scss';
import Step from './Step';

const Header = ({ step }: { step: number }) => {
	return (
		<header className={styles.header}>
			<div className={styles.steps}>
				<Step stepNumber={1} step={step} />
				<Step stepNumber={2} step={step} />
				<Step stepNumber={3} step={step} />
				<Step stepNumber={4} step={step} />
			</div>
		</header>
	);
};

export default Header;
