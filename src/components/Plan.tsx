import styles from './plan.module.scss';
import SectionHeading from './SectionHeading';
import iconAdvanced from '../assets/images/icon-advanced.svg';
import iconArcade from '../assets/images/icon-arcade.svg';
import iconPro from '../assets/images/icon-pro.svg';

const Plan = ({ step }: { step: number }) => {
	return (
		<section className={`${styles.PlanContainer} ${step} section-container`}>
			<SectionHeading
				title="Select your plan"
				info="You have the option of monthly or yearly billing."
			/>
			<div className={styles.plans}>
				<div className={styles.planCard}>
					<img src={iconArcade} alt="Arcade-icon" />
					<div>
						<h3>Arcade</h3>
						<p>
							$<span>9</span>/mo
						</p>
					</div>
				</div>
				<div className={styles.planCard}>
					<img src={iconAdvanced} alt="Advanced-icon" />
					<div>
						<h3>Advanced</h3>
						<p>
							$<span>9</span>/mo
						</p>
					</div>
				</div>
				<div className={styles.planCard}>
					<img src={iconPro} alt="Pro-icon" />
					<div>
						<h3>Proc</h3>
						<p>
							$<span>9</span>/mo
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Plan;
