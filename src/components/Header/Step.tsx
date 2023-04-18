const Step = ({ step, stepNumber }: { step: number; stepNumber: number }) => {
	return (
		<div className={`step-number ${step === stepNumber && 'active'}`}>
			<p>{stepNumber}</p>
			
		</div>
	);
};

export default Step;
