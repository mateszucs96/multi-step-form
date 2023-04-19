/* eslint-disable indent */
import styles from './personalInfo.module.scss';
import SectionHeading from '../../Header/SectionHeading';
import { ChangeEvent, useContext, useEffect } from 'react';
import formContext from '../../../store/form-context';

type Props = {
	setTouched: React.Dispatch<React.SetStateAction<{ name: boolean, email: boolean, phoneNumber: boolean }>>;
}


const PersonalInfo = ({ errors, validateName, validateEmail, validatePhoneNumber, touched, setTouched }: Props) => {
	const formCtx = useContext(formContext);
	useEffect(() => {
		console.log(touched);
	}, [touched]);
	return (
		<section
			className={`${styles.personalInfoContainer} section-container`}
		>
			<SectionHeading
				title='Personal Info'
				info='Please provide your name, email address, and phone number.'
			/>
			<div className={styles.inputs}>
				<div className={`${styles.nameInput} input-container`}>
					<label className={styles.inputLabel} htmlFor='name'>Name</label>
					<p>{!errors.name.isValid && touched.name && errors.name.message}</p>
					<input
						className={styles.input}
						type='text'
						name='name'
						placeholder='e.g. Stephen King'
						onChange={(e) => {
							validateName(e.currentTarget.value.trim());
							formCtx.handleInputChange(e);
							console.log();
						}}
						onBlur={(e) => {
							setTouched(prevState => ({
								...prevState,
								name: true,
							}));
							validateName(e.currentTarget.value.trim());
						}}
						value={formCtx.formInput.info.name || ''}
					/>
				</div>
				<div className={`${styles.emailInput} input-container`}>
					<label className={styles.inputLabel} htmlFor='email'>Email address</label>
					<p>{(!errors.email.isValid && touched.email) && errors.email.message}</p>
					<input
						className={styles.input}
						type='text'
						name='email'
						placeholder='e.g. stephenking@lorem.com'
						onChange={(e) => {
							formCtx.handleInputChange(e);
							validateEmail(e.currentTarget.value.trim());
						}}
						onBlur={(e) => {
							setTouched(prevState => ({
								...prevState,
								email: true,
							}));
							validateEmail(e.currentTarget.value.trim());
						}}

						value={formCtx.formInput.info.email || ''}
					/>
				</div>
				<div className={`${styles.phoneInput} input-container`}>
					<label className={styles.inputLabel} htmlFor='phone'>Phone number</label>
					<p>{(!errors.phoneNumber.isValid && touched.phoneNumber) && errors.phoneNumber.message}</p>
					<input
						className={styles.input}
						type='text'
						name='phoneNumber'
						placeholder='e.g. +1 234 567 890'
						onChange={(e) => {
							formCtx.handleInputChange(e);
							validatePhoneNumber(e.currentTarget.value.trim());
						}}
						onBlur={(e) => {
							setTouched(prevState => ({
								...prevState,
								phoneNumber: true,
							}));
							validatePhoneNumber(e.currentTarget.value.trim());
						}}
						value={formCtx.formInput.info.phoneNumber || ''}
					/>
				</div>
			</div>
		</section>
	);
};

export default PersonalInfo;
