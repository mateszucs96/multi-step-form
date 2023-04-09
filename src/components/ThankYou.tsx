import icon from '../assets/images/icon-thank-you.svg';
import styles from './thankYou.module.scss';

const ThankYou = () => {
	return (
		<section className={`${styles.thankYouSection}  section-container`}>
			<img src={icon} />
			<div>
				<h1>Thank you!</h1>
				<p>
					Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
					please feel free to email us at support@loremgaming.com.
				</p>
			</div>
		</section>

	);
};

export default ThankYou;