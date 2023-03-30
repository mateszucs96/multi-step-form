/* eslint-disable no-mixed-spaces-and-tabs */
import styles from './plan.module.scss';
import SectionHeading from './SectionHeading';
import { PLANS } from '../store/options';
import React from 'react';
import Plan from './Plan';
import { Inputs } from '../hooks/useForm';

type Props = {
	step: number;
	isMonthly: boolean;
	formInput: Inputs;
	handlePlanSelect: (e: React.MouseEvent<HTMLDivElement>) => void;
	handlePlanToggle: (e: React.MouseEvent<HTMLDivElement>) => void;
}
const Plans = ({ step, formInput, handlePlanSelect, isMonthly, handlePlanToggle }: Props) => {

	return (
		<section className={`${styles.PlanContainer} ${step} section-container`}>
			<SectionHeading
				title='Select your plan'
				info='You have the option of monthly or yearly billing.'
			/>
			<div className={styles.planCards}>
				{PLANS.map((plan, i) => (
					<Plan key={i} id={plan.id} title={plan.title} price={plan.price} formInput={formInput} isMonthly={isMonthly}
								handlePlanSelect={handlePlanSelect} />
				))}
			</div>

			<div className={styles.toggleContainer}>
				<p className={`${formInput.plan.isMonthly ? styles.active : ''}`}>Monthly</p>
				<div className={`${styles.toggle}`} style={{ justifyContent: isMonthly ? 'flex-start' : 'flex-end' }}
						 onClick={(e) => {
							 handlePlanToggle(e);
						 }
						 }>
					<div className={styles.circle}></div>
				</div>
				<p className={`${formInput.plan.isMonthly ? '' : styles.active}`}>Yearly</p>
			</div>

		</section>
	);
};

export default Plans;
