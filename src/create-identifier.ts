import { agent } from './veramo/setup.js' // use .js extension when importing local modules

async function main() {
  // process.argv[0] es la ruta al ejecutable de Node.js
  // process.argv[1] es la ruta al script que se está ejecutando
  // por lo tanto, los argumentos personalizados comienzan en process.argv[2]
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

