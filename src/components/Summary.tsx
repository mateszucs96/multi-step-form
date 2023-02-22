import SectionHeading from './SectionHeading';
import { ChangeEvent } from 'react';

type Props = {
	formInput: {
		name?: string,
		email?: string,
		phoneNumber?: string,
		plan: {
			selected: number,
			isMonthly: boolean,
		};
		addOns: {
			'online-service': boolean,
			'larger-storage': boolean,
			'custom-profile': boolean,
		}
	};
	step: number,
	handleCheckboxes: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Summary = ({ formInput }: Props) => {
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
		</>
	);
};

export default Summary;
