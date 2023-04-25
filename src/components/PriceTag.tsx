import styles from './Form/Summary/summary.module.scss';

type Props = {
	isMonthly: boolean;
	price: number;
	fontColor: string;
};

const PriceTag = ({ isMonthly, price, fontColor }: Props) => {
	return (
		<p className={styles.price} style={{ color: fontColor }}>
			$<span>{isMonthly ? price : price * 10}</span>/{isMonthly ? 'mo' : 'yr'}
		</p>
	);
};

export default PriceTag;
