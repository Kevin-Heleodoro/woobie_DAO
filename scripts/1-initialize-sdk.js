import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';

// configuring .env to store environmental variables
import dotenv from 'dotenv';
dotenv.config();

// checks to make sure .env is hooked up
if (!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY === '') {
	console.log('🛑 Private Key not found 🛑 ');
}
if (!process.env.ALCHEMY_API_URL || process.env.ALCHEMY_API_URL === '') {
	console.log('🛑 Alchemy API URL not found 🛑 ');
}
if (!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS === '') {
	console.log('🛑 Wallet Address not found 🛑 ');
}

const provider = new ethers.providers.JsonRpcProvider(
	process.env.ALCHEMY_API_URL
);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const sdk = new ThirdwebSDK(wallet);

// One of those good ol' IIFEs you've heard so much about
(async () => {
	try {
		const address = await sdk.getSigner().getAddress();
		console.log(`1 => SDK initialized by address: ${address}`);
	} catch (err) {
		console.error(`1 => Failed to get apps from the sdk ${err}`);
		process.exit(1);
	}
})();

export default sdk;
// node scripts/1-initialize-sdk.js
// Error #1 in ErrorLog
