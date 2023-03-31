import styles from './addOns.module.scss';
import React, { ChangeEvent } from 'react';
import { Inputs } from '../hooks/useForm';

type Props = {
	name: string;
	description: string;
	price: number;
	formInput: Inputs;
	handleCheckboxes: (e: ChangeEvent<HTMLInputElement>) => void;
}
const AddOn = ({ name, description, price, formInput, handleCheckboxes }: Props) => {
	return (
		<div className={`${styles.onlineService} ${styles.checkboxContainer}`}>
			<div className={styles.checkbox}>
				<input type='checkbox' id={name} name={name} checked={formInput.addOns[`${name as keyof Inputs['addOns']}`]}
							 onChange={handleCheckboxes} />
				<label htmlFor={name}>
					<h3 className={styles.title}>{name}</h3>
					<p className={styles.description}>{description}</p>
				</label>
			</div>

			<p
				className={styles.price}>+${formInput.plan.isMonthly ? price : price * 10}/{formInput.plan.isMonthly ? 'mo' : 'yr'}
			</p>
		</div>
	);
};

export default AddOn;