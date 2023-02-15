import styles from './plan.module.scss';
import SectionHeading from './SectionHeading';
import iconAdvanced from '../assets/images/icon-advanced.svg';
import iconArcade from '../assets/images/icon-arcade.svg';
import iconPro from '../assets/images/icon-pro.svg';
import React, { MouseEventHandler, useState } from 'react';

const Plan = ({ step }: { step: number }) => {
	const [selectedCard, setSelectedCard] = useState<number | null>(null);


	const handleSelectedCard = (idx: number) => {
		selectedCard === idx ? setSelectedCard(null) : setSelectedCard(idx);
	};


	return (
		<section className={`${styles.PlanContainer} ${step} section-container`}>
			<SectionHeading
				title='Select your plan'
				info='You have the option of monthly or yearly billing.'
			/>
			<div className={styles.plans}>
				<div className={`${styles.planCard} ${selectedCard === 1 ? styles.selected : ''}`}
					/* eslint-disable-next-line no-mixed-spaces-and-tabs */
						 onClick={() => handleSelectedCard(1)}>

					<img src={iconArcade} alt='Arcade-icon' />
					<div>
						<h3>Arcade</h3>
						<p>
							$<span>9</span>/mo
						</p>
					</div>
				</div>
				<div className={`${styles.planCard} ${selectedCard === 2 ? styles.selected : ''}`}
					/* eslint-disable-next-line no-mixed-spaces-and-tabs */
						 onClick={() => handleSelectedCard(2)}>
					<img src={iconAdvanced} alt='Advanced-icon' />
					<div>
						<h3>Advanced</h3>
						<p>
							$<span>9</span>/mo
						</p>
					</div>
				</div>
				<div className={`${styles.planCard} ${selectedCard === 3 ? styles.selected : ''}`}
					/* eslint-disable-next-line no-mixed-spaces-and-tabs */
						 onClick={() => handleSelectedCard(3)}>
					<img src={iconPro} alt='Pro-icon' />
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
