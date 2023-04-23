import styles from './addOns.module.scss';
import React, { ChangeEvent, useContext } from 'react';
import { Inputs } from '../../../hooks/useForm';
import PriceTag from '../../PriceTag';
import formContext from '../../../store/form-context';

type Props = {
	name: string;
	description: string;
	price: number;
};
const AddOn = ({ name, description, price }: Props) => {
	const board = [];
	const formCtx = useContext(formContext);
	return (
		<div className={`${styles.onlineService} ${styles.checkboxContainer}`}>
			<div className={styles.checkbox}>
				<input
					type="checkbox"
					id={name}
					name={name}
					checked={
						formCtx.formInput.addOns[`${name as keyof Inputs['addOns']}`]
					}
					onChange={formCtx.handleCheckboxes}
				/>
				<label htmlFor={name}>
					<h3 className={styles.title}>{name}</h3>
					<p className={styles.description}>{description}</p>
				</label>
			</div>
			<div style={{ display: 'flex' }}>
				<span>+</span>
				<PriceTag
					isMonthly={formCtx.formInput.plan.isMonthly}
					price={price}
					fontColor={'#483EFF'}
				/>
			</div>
		</div>
	);
};

export default AddOn;
