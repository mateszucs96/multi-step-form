/* eslint-disable no-mixed-spaces-and-tabs */
import styles from './plan.module.scss';
import SectionHeading from './SectionHeading';
import iconAdvanced from '../assets/images/icon-advanced.svg';
import iconArcade from '../assets/images/icon-arcade.svg';
import iconPro from '../assets/images/icon-pro.svg';
import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';

type Props = {
	step: number;
	isMonthly: boolean;
	formInput: {
		name?: string,
		email?: string,
		phoneNumber?: string,
		plan: number
	};
	handlePlanSelect: (e: React.MouseEvent<HTMLDivElement>) => void;
	handlePlanToggle: (e: React.MouseEvent<HTMLDivElement>) => void;
}
const Plan = ({ step, formInput, handlePlanSelect, isMonthly, handlePlanToggle }: Props) => {
	return (
		<section className={`${styles.PlanContainer} ${step} section-container`}>
			<SectionHeading
				title='Select your plan'
				info='You have the option of monthly or yearly billing.'
			/>
			<div className={styles.plans}>
				<div className={`${styles.planCard} ${formInput.plan === 1 ? styles.selected : ''} `}
						 onClick={(e) => {
							 handlePlanSelect(e);
						 }} data-attr='1'>

					<img src={iconArcade} alt='Arcade-icon' />
					<div>
						<h3>Arcade</h3>
						<p>
							$<span>9</span>/mo
						</p>
					</div>
				</div>
				<div className={`${styles.planCard} ${formInput.plan === 2 ? styles.selected : ''}`}
						 onClick={(e) => {
							 handlePlanSelect(e);
						 }} data-attr='2'>
					<img src={iconAdvanced} alt='Advanced-icon' />
					<div>
						<h3>Advanced</h3>
						<p>
							$<span>12</span>/mo
						</p>
					</div>
				</div>
				<div className={`${styles.planCard} ${formInput.plan === 3 ? styles.selected : ''}`}
					/* eslint-disable-next-line no-mixed-spaces-and-tabs */
						 onClick={(e) => {
							 handlePlanSelect(e);
						 }} data-attr='3'>
					<img src={iconPro} alt='Pro-icon' />
					<div>
						<h3>Pro</h3>
						<p>
							$<span>15</span>/mo
						</p>
					</div>
				</div>
				<div className={styles.toggleContainer}>
					<p className={`${isMonthly ? styles.active : ''}`}>Monthly</p>
					<div className={`${styles.toggle}`} style={{ justifyContent: isMonthly ? 'flex-start' : 'flex-end' }}
							 onClick={(e) => {
								 handlePlanToggle(e);

							 }
							 }>
						<div className={styles.circle}></div>
					</div>
					<p className={`${isMonthly ? '' : styles.active}`}>Yearly</p>
				</div>
			</div>
		</section>
	);
};

export default Plan;
