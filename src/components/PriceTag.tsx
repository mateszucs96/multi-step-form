import styles from './summary.module.scss';

type Props = {
	isMonthly: boolean;
	price: number;
	fontColor: string;
	fontWeight: string;
}

const PriceTag = ({ isMonthly, price, fontColor, fontWeight }: Props) => {
	return (
		<p className={styles.price} style={{ color: fontColor, fontWeight: fontWeight }}>
			$<span>{isMonthly ? price : price * 10}</span>/{isMonthly ? 'mo' : 'yr'}
		</p>
	);
};

export default PriceTag;