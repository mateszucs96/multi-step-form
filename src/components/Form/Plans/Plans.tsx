/* eslint-disable no-mixed-spaces-and-tabs */
import styles from './plans.module.scss';
import SectionHeading from '../../Header/SectionHeading';
import { PLANS } from '../../../store/options';
import React, { useContext } from 'react';
import Plan from './Plan';
import formContext from '../../../store/form-context';

const Plans = () => {
	const formCtx = useContext(formContext);
	return (
		<section className={`${styles.PlanContainer} section-container`}>
			<SectionHeading
				title="Select your plan"
				info="You have the option of monthly or yearly billing."
			/>
			<div className={styles.planCards}>
				{PLANS.map((plan, i) => (
					<Plan
						key={i}
						id={plan.id}
						title={plan.title}
						price={plan.price}
						formInput={formCtx.formInput}
						isMonthly={formCtx.formInput.plan.isMonthly}
						handlePlanSelect={formCtx.handlePlanSelect}
					/>
				))}
			</div>

			<div className={styles.toggleContainer}>
				<p
					className={`${formCtx.formInput.plan.isMonthly ? styles.active : ''}`}
				>
					Monthly
				</p>
				<div
					className={`${styles.toggle}`}
					style={{
						justifyContent: formCtx.formInput.plan.isMonthly
							? 'flex-start'
							: 'flex-end',
					}}
					onClick={(e) => {
						formCtx.handlePlanToggle();
					}}
				>
					<div className={styles.circle}></div>
				</div>
				<p
					className={`${formCtx.formInput.plan.isMonthly ? '' : styles.active}`}
				>
					Yearly
				</p>
			</div>
		</section>
	);
};

export default Plans;
