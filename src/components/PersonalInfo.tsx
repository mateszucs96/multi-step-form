// import { ChangeEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';
import styles from './personalInfo.module.scss';
import SectionHeading from './SectionHeading';

const PersonalInfo = ({
	step,
	formInput,
	handleEmailInput,
	handleNameInput,
	handlePhoneInput,
}: {
	step: number;
}) => {
	// const [nameInput, setNameInput] = useState('');
	// const [emailInput, setEmailInput] = useState('');
	// const [phoneInput, setPhoneInput] = useState('');

	// const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
	// 	setNameInput(e.target.value);
	// 	console.log(nameInput);
	// };
	// const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
	// 	setEmailInput(e.target.value);
	// 	console.log(emailInput);
	// };
	// const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
	// 	setPhoneInput(e.target.value);
	// 	console.log(phoneInput);
	// };

	return (
		<section
			className={`${styles.personalInfoContainer} ${step} section-container`}
		>
			<SectionHeading
				title="Personal Info"
				info="Please provide your name, email address, and phone number."
			/>
			<div className={styles.inputs}>
				<div className={`${styles.nameInput} input-container`}>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						placeholder="e.g. Stephen King"
						onChange={handleNameInput}
						value={formInput.name}
					/>
				</div>
				<div className={`${styles.emailInput} input-container`}>
					<label htmlFor="email">Email address</label>
					<input
						type="text"
						placeholder="e.g. stephenking@lorem.com"
						onChange={handleEmailInput}
						value={formInput.email}
					/>
				</div>
				<div className={`${styles.phoneInput} input-container`}>
					<label htmlFor="phone">Phone number</label>
					<input
						type="text"
						placeholder="e.g. +1 234 567 890"
						onChange={handlePhoneInput}
						value={formInput.phoneNumber}
					/>
				</div>
			</div>
		</section>
	);
};

export default PersonalInfo;
