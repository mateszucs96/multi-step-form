import SectionHeading from './SectionHeading';
import { ChangeEvent } from 'react';
import { ADDONS, PLANS, PlansType } from '../store/options';
import AddOns from './AddOns';
import Plans from './Plans';
import { Inputs } from '../hooks/useForm';
import addOns from './AddOns';
import addOn from './AddOn';

type Props = {
	formInput: Inputs;
	step: number,
	handleCheckboxes: (e: ChangeEvent<HTMLInputElement>) => void;
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
