import styles from './plan.module.scss';
import { Inputs } from '../../../hooks/useForm';
import PriceTag from '../../PriceTag';
import React from 'react';
import arcadeIcon from '../../../public/assets/images/icon-arcade.svg';
import advancedIcon from '../../../public/assets/images/icon-advanced.svg';
import proIcon from '../../../public/assets/images/icon-pro.svg';

const images = [arcadeIcon, advancedIcon, proIcon];

type Props = {
	isMonthly: boolean;
	id: number;
	title: string;
	price: number;
	formInput: Inputs;
	handlePlanSelect: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const Plan = ({
	id,
	title,
	price,
	formInput,
	handlePlanSelect,
	isMonthly,
}: Props) => {
	return (
		<div
			className={`${styles.planCard} ${
				formInput.plan.selected === id ? styles.selected : ''
			} `}
			onClick={(e) => {
				handlePlanSelect(e);
				console.log(e.currentTarget.dataset);
			}}
			data-attr={id}
		>
			<img src={images[id - 1]} alt={`${title} icon`} />
			<div className={styles.planInfo}>
				<h3 className={styles.title}>{title}</h3>
				<PriceTag isMonthly={isMonthly} price={price} fontColor={'#9699AA'} />
				{!isMonthly ? <p className={styles.yearlyGift}>2 Months free</p> : ''}
			</div>
		</div>
	);
};

export default Plan;
