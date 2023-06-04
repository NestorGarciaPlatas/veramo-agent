import { agent } from './veramo/setup.js' // use .js extension when importing local modules

async function main() {
  const alias = process.argv[2];

  if (!alias) {
    console.error('Por favor, proporciona un alias como argumento.');
    process.exit(1);
  }

  const identity = await agent.didManagerCreate({
    alias: alias,
    provider: 'did:ethr:rinkeby',
    kms: 'local',
  });

  console.log(`New identity created for alias ${alias}`);
  console.log(identity);
}

main().catch(console.log);

