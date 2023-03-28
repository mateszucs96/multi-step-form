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
		<div className={`${styles.onlineService} checkboxContainer`}>
			<input type='checkbox' id={name} name={name}
						 checked={formInput.addOns[`${name as keyof Inputs['addOns']}`]}
						 onChange={handleCheckboxes} />
			<label htmlFor='online-service'>
				<h3>{name}</h3>
				<p>{description}</p>
			</label>
			<p>+{formInput.plan.isMonthly ? price : price * 10}$</p>
		</div>
	);
};

export default AddOn;