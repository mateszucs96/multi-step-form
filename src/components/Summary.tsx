import SectionHeading from './SectionHeading';
import { ADDONS, PLANS } from '../store/options';
import { Inputs } from '../hooks/useForm';

type Props = {
	formInput: Inputs;

}
const Summary = ({ formInput }: Props) => {
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
		<>
			<div>
				<SectionHeading
					title='Finishing up'
					info='Double-check everything looks OK before confirming.'
				/>
			</div>
			<div>

				{formInput.plan.selected === 1 &&
					<p>Arcade<span>{formInput.plan.isMonthly ? '(Monthly)' : '(Yearly)'}</span></p>}
				{formInput.plan.selected === 2 &&
					<p>Advanced<span>{formInput.plan.isMonthly ? '(Monthly)' : '(Yearly)'}</span></p>}
				{formInput.plan.selected === 3 && <p>Pro<span>{formInput.plan.isMonthly ? '(Monthly)' : '(Yearly)'}</span></p>}
				<ul>
					{Object.entries(formInput.addOns).map(([key, value], i) => (
						value &&
						<li className='plan' key={i}>
							{key}
						</li>
					))}
				</ul>
			</div>
			<h2>Total <span>{formInput.plan.isMonthly ? '(per month)' : '(per year)'}</span></h2>
			<p>{'$' + getTotalPrice()}<span>{formInput.plan.isMonthly ? '/mo' : '/yr'}</span></p>
		</>
	);
};

export default Summary;
