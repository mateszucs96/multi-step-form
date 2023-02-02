import React from 'react';
import SectionHeading from './SectionHeading';
import styles from './addOns.module.scss';

const AddOns = ({ step }: { step: number }) => {
	return (
		<section className={`${styles.AddOnsContainer} ${step} section-container`}>
			<SectionHeading
				title="Pick add-ons"
				info="Add-ons help enhance your gaming experience."
			/>
			<div className={`${styles.onlineService} checkboxContainer`}>
				<input type="checkbox" id="scales" name="scales" />
				<label htmlFor="scales">
					<h3>Online service</h3>
					<p>Access to multiplayer games</p>
				</label>
			</div>
			<div className={`${styles.largerStorage} checkboxContainer`}>
				<input type="checkbox" id="scales" name="scales" />
				<label htmlFor="scales">
					<h3>Larger storage</h3>
					<p>Extra 1TB of cloud save</p>
				</label>
			</div>
			<div className={`${styles.customProfile} checkboxContainer`}>
				<input type="checkbox" id="scales" name="scales" />
				<label htmlFor="scales">
					<h3>Customizable profile</h3>
					<p>Custom theme on your profile</p>
				</label>
			</div>
		</section>
	);
};

export default AddOns;
