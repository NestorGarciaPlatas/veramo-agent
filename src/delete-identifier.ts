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

  // Buscar el identificador utilizando el alias
  const identifiers = await agent.didManagerFind({
    alias: alias,
  });

  // Comprobar si se ha encontrado algún identificador
  if (identifiers.length === 0) {
    console.error(`No se encontró ningún identificador con el alias "${alias}"`);
    process.exit(1);
  }

  // Como puede haber varios identificadores con el mismo alias,
  // sólo vamos a eliminar el primer identificador encontrado
  const identifier = identifiers[0];

  // Eliminar el identificador
  await agent.didManagerDelete({
    did: identifier.did,
  });

  console.log(`Identificador con el alias "${alias}" eliminado`);
}

main().catch(console.log);
