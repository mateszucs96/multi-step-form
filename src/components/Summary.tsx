import SectionHeading from './SectionHeading';
import { ADDONS, PLANS } from '../store/options';
import { Inputs } from '../hooks/useForm';
import styles from './summary.module.scss';
import PriceTag from './PriceTag';

type Props = {
	formInput: Inputs;
	handleChange: () => void;
}
const Summary = ({ formInput, handleChange }: Props) => {
	console.log(Object.keys(formInput.addOns).filter(key => formInput.addOns[key]));
	const getTotalPrice = (): number => {
		const planPrices = PLANS
			.filter(el => el.id === formInput.plan.selected)
			.reduce((acc, currentValue) => acc + currentValue.price, 0);
		const filteredAddonTitles = Object.keys(formInput.addOns).filter(key => formInput.addOns[key]);
		const filteredAddons = ADDONS.filter(el => filteredAddonTitles.includes(el.title));

		const addOnPrices = filteredAddons.reduce(
			(accumulator, currentValue) => accumulator + currentValue.price,
			0,
		);
		return formInput.plan.isMonthly ? addOnPrices + planPrices : (addOnPrices + planPrices) * 10;
	};

	return (

		<div className={`${styles.summaryContainer} section-container`}>
			<SectionHeading
				title='Finishing up'
				info='Double-check everything looks OK before confirming.'
			/>
			<div>
				<div className={styles.selectedItems}>
					<div className={`${styles.plan} flex-wrapper`}>

						<div className={styles.title}>
							{formInput.plan.selected === 1 &&
								<p>Arcade<span>{formInput.plan.isMonthly ? '(Monthly)' : '(Yearly)'}</span></p>}
							{formInput.plan.selected === 2 &&
								<p>Advanced<span>{formInput.plan.isMonthly ? '(Monthly)' : '(Yearly)'}</span></p>}
							{formInput.plan.selected === 3 &&
								<p>Pro<span>{formInput.plan.isMonthly ? '(Monthly)' : '(Yearly)'}</span></p>}

							<button className={styles.changeButton} type='button' onClick={handleChange}>Change</button>
						</div>


						<PriceTag isMonthly={formInput.plan.isMonthly} price={PLANS[formInput.plan.selected - 1].price}
											fontColor={'#022959'} fontWeight={'700'} />

					</div>

					<ul className={`${styles.addOns} flex-wrapper`}>
						{Object.entries(formInput.addOns).map(([key, value], i) => (
							value &&
							<li className='flex-wrapper' key={i}>
								<p>{key}</p>
								<div style={{ display: 'flex' }}>
									<span>+</span>
									<PriceTag isMonthly={formInput.plan.isMonthly} price={ADDONS[i].price} fontColor={'#022959'}
														fontWeight={'400'} />
								</div>

							</li>
						))}
					</ul>
				</div>

			</div>
			<div className={`${styles.total} flex-wrapper`}>
				<p>Total <span>{formInput.plan.isMonthly ? '(per month)' : '(per year)'}</span></p>
				<p className={styles.price}>{'+$' + getTotalPrice()}<span>{formInput.plan.isMonthly ? '/mo' : '/yr'}</span></p>
			</div>

		</div>
	);
};

export default Summary;
