/* eslint-disable indent */
import styles from './personalInfo.module.scss';
import SectionHeading from './SectionHeading';
import { ChangeEvent } from 'react';


type Props = {
	step: number;
	formInput: {
		name?: string,
		email?: string,
		phoneNumber?: string,
		plan: {
			selected: number,
			isMonthly: boolean,
		}
	};

	handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const PersonalInfo = ({
												step,
												formInput,
												handleInputChange,
											}: Props) => {
	return (
		<section
			className={`${styles.personalInfoContainer} ${step} section-container`}
		>
			<SectionHeading
				title='Personal Info'
				info='Please provide your name, email address, and phone number.'
			/>
			<div className={styles.inputs}>
				<div className={`${styles.nameInput} input-container`}>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						placeholder='e.g. Stephen King'
						onChange={handleInputChange}
						value={formInput.name || ''}
					/>
				</div>
				<div className={`${styles.emailInput} input-container`}>
					<label htmlFor='email'>Email address</label>
					<input
						type='text'
						name='email'
						placeholder='e.g. stephenking@lorem.com'
						onChange={handleInputChange}
						value={formInput.email || ''}
					/>
				</div>
				<div className={`${styles.phoneInput} input-container`}>
					<label htmlFor='phone'>Phone number</label>
					<input
						type='text'
						name='phoneNumber'
						placeholder='e.g. +1 234 567 890'
						onChange={handleInputChange}
						value={formInput.phoneNumber || ''}
					/>
				</div>
			</div>
		</section>
	);
};

export default PersonalInfo;
