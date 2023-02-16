import React, { ChangeEvent } from 'react';
import SectionHeading from './SectionHeading';
import styles from './addOns.module.scss';

type Props = {
	formInput: {
		name?: string,
		email?: string,
		phoneNumber?: string,
		plan: {
			selected: number,
			isMonthly: boolean,
		};
		addOns: {
			'online-service': boolean,
			'larger-storage': boolean,
			'custom-profile': boolean,
		}
	};
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
				<div className={`${styles.onlineService} checkboxContainer`}>
					<input type='checkbox' id='online-service' name='online-service'
								 checked={formInput.addOns['online-service'] || false}
								 onChange={handleCheckboxes} />
					<label htmlFor='online-service'>
						<h3>Online service</h3>
						<p>Access to multiplayer games</p>
					</label>
				</div>
				<div className={`${styles.largerStorage} checkboxContainer`}>
					<input type='checkbox' id='larger-storage' name='larger-storage'
								 checked={formInput.addOns['larger-storage'] || false}
								 onChange={handleCheckboxes} />
					<label htmlFor='larger-storage'>
						<h3>Larger storage</h3>
						<p>Extra 1TB of cloud save</p>
					</label>
				</div>
				<div className={`${styles.customProfile} checkboxContainer`}>
					<input type='checkbox' id='custom-profile' name='custom-profile'
								 checked={formInput.addOns['custom-profile'] || false}
								 onChange={handleCheckboxes} />
					<label htmlFor='custom-profile'>
						<h3>Customizable profile</h3>
						<p>Custom theme on your profile</p>
					</label>
				</div>
			</div>
		</section>
	);
};

export default AddOns;
