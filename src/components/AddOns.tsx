import React, { ChangeEvent } from 'react';
import SectionHeading from './SectionHeading';
import styles from './addOns.module.scss';
import { ADDONS } from '../store/options';
import AddOn from './AddOn';
import { Inputs } from '../hooks/useForm';

type Props = {
	formInput: Inputs;
	step: number,
	handleCheckboxes: (e: ChangeEvent<HTMLInputElement>) => void;
}
const AddOns = ({ formInput, step, handleCheckboxes }: Props) => {
	return (
		<section className={`${styles.AddOnsContainer} ${step} section-container`}>
			<SectionHeading
				title='Pick add-ons'
				info='Add-ons help enhance your gaming experience.'
			/>
			<div className={styles.addOns}>
				{ADDONS.map((addon, i) => (
					<AddOn key={i} name={addon.title} description={addon.description} price={addon.price} formInput={formInput}
								 handleCheckboxes={handleCheckboxes} />
				))}
			</div>
		</section>
	);
};

export default AddOns;
