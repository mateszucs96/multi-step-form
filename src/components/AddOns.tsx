import React from 'react';
import SectionHeading from './SectionHeading';
import styles from './addOns.module.scss';

const AddOns = ({ step }: { step: number }) => {
	return (
		<section className={`${styles.AddOnsContainer} ${step}`}>
			<SectionHeading
				title="Pick add-ons"
				info="Add-ons help enhance your gaming experience."
			/>
		</section>
	);
};

export default AddOns;
