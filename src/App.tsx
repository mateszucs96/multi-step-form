import { useContext, useState } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import ThankYou from './components/ThankYou';
import formContext from './store/form-context';

function App() {
	const stepHook = useState(1);
	const formCtx = useContext(formContext);


	return (
		<div className='App'>
			<Header stepHook={stepHook} />
			{formCtx.isSubmitted ?
				<ThankYou /> :
				<Form stepHook={stepHook} />}
		</div>
	);
}

export default App;
