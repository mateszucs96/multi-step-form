import styles from './plan.module.scss';
import { Inputs } from '../hooks/useForm';

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
				<p className={styles.price}>
					$<span>{isMonthly ? price : price * 10}</span>/{isMonthly ? 'mo' : 'yr'}
				</p>
				<p className={styles.yearlyGift}>2 Months free</p>
			</div>
		</div>

	);
};

export default Plan;