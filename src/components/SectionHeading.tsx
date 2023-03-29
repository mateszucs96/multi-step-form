import styles from './sectionHeading.module.scss';

type Props = {
	title: string;
	info: string;
};

const SectionHeading = ({ title, info }: Props) => {
	return (
		<div className={styles.sectionHeading}>
			<h1>{title}</h1>
			<p>{info}</p>
		</div>
	);
};

export default SectionHeading;
