import styles from './plan.module.scss';
import { Inputs } from '../hooks/useForm';
import PriceTag from './PriceTag';
import React from 'react';

type Props = {
	isMonthly: boolean;
	id: number;
	title: string;
	price: number;
	formInput: Inputs;
	handlePlanSelect: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Plan = ({ id, title, price, formInput, handlePlanSelect, isMonthly }: Props) => {

	return (
		<div className={`${styles.planCard} ${formInput.plan.selected === id ? styles.selected : ''} `}
				 onClick={(e) => {
					 handlePlanSelect(e);
					 console.log(e.currentTarget.dataset);
				 }} data-attr={id}>
			<img src={`src/assets/images/icon-${title.toLowerCase()}.svg`} alt='Arcade-icon' />
			<div className={styles.planInfo}>
				<h3 className={styles.title}>{title}</h3>
				<PriceTag isMonthly={isMonthly} price={price} fontColor={'#9699AA'} />
				{!isMonthly ? <p className={styles.yearlyGift}>2 Months free</p> : ''}
			</div>
		</div>

	);
};

export default Plan;