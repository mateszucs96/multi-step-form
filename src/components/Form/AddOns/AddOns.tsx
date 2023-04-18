import React from 'react';
import SectionHeading from '../../Header/SectionHeading';
import styles from './addOns.module.scss';
import { ADDONS } from '../../../store/options';
import AddOn from './AddOn';


const AddOns = () => {
	return (
		<section className={`${styles.AddOnsContainer} section-container`}>
			<SectionHeading
				title='Pick add-ons'
				info='Add-ons help enhance your gaming experience.'
			/>
			<div className={styles.addOns}>
				{ADDONS.map((addon, i) => (
					<AddOn key={i} name={addon.title} description={addon.description} price={addon.price} />
				))}
			</div>
		</section>
	);
};

export default AddOns;
