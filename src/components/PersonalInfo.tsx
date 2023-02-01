import styles from './personalInfo.module.scss';
import SectionHeading from './SectionHeading';

const PersonalInfo = ({ step }: { step: number }) => {
	return (
		<section className={`${styles.personalInfoContainer} ${step}`}>
			<SectionHeading
				title="Personal Info"
				info="Please provide your name, email address, and phone number."
			/>
			<div className={`${styles.nameInput} input-container`}>
				<label htmlFor="name">Name</label>
				<input type="text" placeholder="e.g. Stephen King" />
			</div>
			<div className={`${styles.emailInput} input-container`}>
				<label htmlFor="email">Email address</label>
				<input type="text" placeholder="e.g. stephenking@lorem.com" />
			</div>
			<div className={`${styles.phoneInput} input-container`}>
				<label htmlFor="phone">Phone number</label>
				<input type="text" placeholder="e.g. +1 234 567 890" />
			</div>
		</section>
	);
};

export default PersonalInfo;
