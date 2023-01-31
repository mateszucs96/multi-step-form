import styles from './personalInfo.module.scss';
import SectionHeading from './SectionHeading';

const Plan = () => {
	return (
		<div>
			<SectionHeading
				title="Select your plan"
				info="You have the option of monthly or yearly billing."
			/>
		</div>
	);
};

export default Plan;
