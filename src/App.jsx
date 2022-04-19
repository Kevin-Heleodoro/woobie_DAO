import { useAddress, useMetamask } from '@thirdweb-dev/react';

const App = () => {
	// thirdweb hooks
	const address = useAddress();
	const connectWithMetamask = useMetamask();
	console.log(`Address: ${address}`);

	// Landing page for users that haven't connected their wallets yet.
	if (!address) {
		return (
			<div className='landing'>
				<h1>Welcome to Woobie DAO</h1>
				<button onClick={connectWithMetamask} className='btn-hero'>
					Connect Wallet
				</button>
			</div>
		);
	}

	// Once wallet is connected page will display below.
	return (
		<div className='landing'>
			<h1>I see you have made it this far.</h1>
		</div>
	);
};

export default App;
