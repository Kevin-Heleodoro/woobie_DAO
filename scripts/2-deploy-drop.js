import { AddressZero } from '@ethersproject/constants';
import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const app = sdk.getAppModule()(async () => {
	try {
		console.log('start of try block');
		const editionDropAddress = await sdk.deployer.deployEditionDrop({
			// collection name
			name: 'WoobieDao Membership',
			// description
			description: 'A DAO to get those poor privates some woobies',
			// image
			image: readFileSync('./scripts/assets/Woobie.png'),
			// address that will be receiving the proceeds from sales,
			// since it is a free mint, the address will be 0x0,
			// can set own address in order to charge.
			primary_sale_recipient: AddressZero,
		});
		console.log(`editiondropAddress`);

		// return address and initiliazes contract on thirdweb sdk
		const editionDrop = sdk.getEditionDrop(editionDropAddress);
		console.log(`editiondrop`);

		// get metadata of contract
		const metadata = await editionDrop.metadata.get();
		console.log('metadata');

		console.log(
			`2 => Successfully deployed editionDrop contract, address: ${editionDropAddress}`
		);
		console.log(`2 => editionDrop metadata: ${metadata}`);
	} catch (err) {
		console.error(`2 => Failed to deploy editionDrop contract ${err}`);
	}
})();

// node scripts/2-deploy-drop.js
// Error #2
