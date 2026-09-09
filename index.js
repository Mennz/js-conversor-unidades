const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pergunta(texto) {
  return new Promise((resolve) => rl.question(texto, resolve));
}

function mostrarMenu() {
  console.log("\n=== Conversor de Unidades ===");
  console.log("1 - Temperatura");
  console.log("2 - Distancia");
  console.log("3 - Peso");
  console.log("4 - Moeda");
  console.log("0 - Sair");
}

async function main() {
  let sair = false;

  while (!sair) {
    mostrarMenu();
    const opcao = await pergunta("Escolha uma opcao: ");

    switch (opcao.trim()) {
      case "1":
        console.log("Temperatura ainda nao implementada");
        break;
      case "2":
        console.log("Distancia ainda nao implementada");
        break;
      case "3":
        console.log("Peso ainda nao implementado");
        break;
      case "4":
        console.log("Moeda ainda nao implementada");
        break;
      case "0":
        sair = true;
        break;
      default:
        console.log("Opcao invalida");
    }
  }

  console.log("Ate mais!");
  rl.close();
}

main();
