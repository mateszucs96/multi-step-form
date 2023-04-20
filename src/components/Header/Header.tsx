import styles from './header.module.scss';
import Step from './Step';

const Header = ({ stepHook }: { stepHook: [number, React.Dispatch<React.SetStateAction<number>>] }) => {
	const [step, _] = stepHook;
	return (
		<header className={styles.header}>
			<div className={styles.steps}>
				<div className={styles.stepContainer}>
					<Step stepNumber={1} step={step} />
					<div className={styles.stepLabel}>
						<p>STEP 1</p>
						<h3>YOUR INFO</h3>
					</div>
				</div>
				<div className={styles.stepContainer}>
					<Step stepNumber={2} step={step} />
					<div className={styles.stepLabel}>
						<p>STEP 2</p>
						<h3>SELECT PLAN</h3>
					</div>
				</div>
				<div className={styles.stepContainer}>
					<Step stepNumber={3} step={step} />
					<div className={styles.stepLabel}>
						<p>STEP 3</p>
						<h3>ADD-ONS</h3>
					</div>
				</div>
				<div className={styles.stepContainer}>
					<Step stepNumber={4} step={step} />
					<div className={styles.stepLabel}>
						<p>STEP 4</p>
						<h3>SUMMARY</h3>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
