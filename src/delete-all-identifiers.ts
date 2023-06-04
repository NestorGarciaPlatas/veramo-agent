import { agent } from './veramo/setup.js' // use .js extension when importing local modules

async function main() {
  // Obtener todos los identificadores
  const identifiers = await agent.didManagerFind({});

  // Eliminar cada identificador
  for (const identifier of identifiers) {
    await agent.didManagerDelete({
      did: identifier.did,
    });
    console.log(`Identificador ${identifier.did} eliminado`);
  }

  console.log('Todos los identificadores han sido eliminados');
}

main().catch(console.log);
