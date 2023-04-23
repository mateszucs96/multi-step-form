import SectionHeading from '../../Header/SectionHeading';
import { ADDONS, PLANS } from '../../../store/options';
import styles from './summary.module.scss';
import PriceTag from '../../PriceTag';
import { useContext } from 'react';
import formContext from '../../../store/form-context';

type Props = {
	handleChange: () => void;
}
const Summary = ({ handleChange }: Props) => {
	const formCtx = useContext(formContext);
	const getTotalPrice = (): number => {
		const planPrices = PLANS
			.filter(el => el.id === formCtx.formInput.plan.selected)
			.reduce((acc, currentValue) => acc + currentValue.price, 0);
		const filteredAddonTitles = Object.keys(formCtx.formInput.addOns).filter(key => formCtx.formInput.addOns[key]);
		const filteredAddons = ADDONS.filter(el => filteredAddonTitles.includes(el.title));

		const addOnPrices = filteredAddons.reduce(
			(accumulator, currentValue) => accumulator + currentValue.price,
			0,
		);
		return formCtx.formInput.plan.isMonthly ? addOnPrices + planPrices : (addOnPrices + planPrices) * 10;
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
							{formCtx.formInput.plan.selected === 1 &&
								<p>Arcade<span>{formCtx.formInput.plan.isMonthly ? '(Monthly)' : '(Yearly)'}</span></p>}
							{formCtx.formInput.plan.selected === 2 &&
								<p>Advanced<span>{formCtx.formInput.plan.isMonthly ? '(Monthly)' : '(Yearly)'}</span></p>}
							{formCtx.formInput.plan.selected === 3 &&
								<p>Pro<span>{formCtx.formInput.plan.isMonthly ? '(Monthly)' : '(Yearly)'}</span></p>}

							<button className={styles.changeButton} type='button' onClick={handleChange}>Change</button>
						</div>


						<PriceTag isMonthly={formCtx.formInput.plan.isMonthly}
											price={PLANS[formCtx.formInput.plan.selected - 1].price}
											fontColor={'#022959'} fontWeight={'700'} />

					</div>

					<ul className={`${styles.addOns} flex-wrapper`}>
						{Object.entries(formCtx.formInput.addOns).map(([key, value], i) => (
							value &&
							<li className='flex-wrapper' key={i}>
								<p>{key}</p>
								<div style={{ display: 'flex' }}>
									<span>+</span>
									<PriceTag isMonthly={formCtx.formInput.plan.isMonthly} price={ADDONS[i].price} fontColor={'#022959'}
														fontWeight={'400'} />
								</div>

							</li>
						))}
					</ul>
				</div>

			</div>
			<div className={`${styles.total} flex-wrapper`}>
				<p>Total <span>{formCtx.formInput.plan.isMonthly ? '(per month)' : '(per year)'}</span></p>
				<p
					className={styles.price}>{'+$' + getTotalPrice()}<span>{formCtx.formInput.plan.isMonthly ? '/mo' : '/yr'}</span>
				</p>
			</div>

		</div>
	);
};

export default Summary;
