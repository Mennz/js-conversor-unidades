const readline = require("readline");
const { converterTemperatura } = require("./temperatura");
const { converterDistancia } = require("./distancia");
const { converterPeso } = require("./peso");
const { converterMoeda } = require("./moeda");

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

async function menuTemperatura() {
  console.log("\n-- Temperatura --");
  console.log("Unidades: C (celsius), F (fahrenheit), K (kelvin)");

  const valorTexto = await pergunta("Valor: ");
  const de = (await pergunta("De qual unidade: ")).trim().toUpperCase();
  const para = (await pergunta("Para qual unidade: ")).trim().toUpperCase();

  const valor = Number(valorTexto);
  if (valorTexto.trim() === "" || Number.isNaN(valor)) {
    console.log("Valor invalido");
    return;
  }

  const resultado = converterTemperatura(valor, de, para);
  if (resultado === null) {
    console.log("Unidade invalida");
    return;
  }

  console.log(`${valor}${de} = ${resultado.toFixed(2)}${para}`);
}

async function menuDistancia() {
  console.log("\n-- Distancia --");
  console.log("Unidades: MM, CM, M, KM, MI (milha)");

  const valorTexto = await pergunta("Valor: ");
  const de = (await pergunta("De qual unidade: ")).trim().toUpperCase();
  const para = (await pergunta("Para qual unidade: ")).trim().toUpperCase();

  const valor = Number(valorTexto);
  if (valorTexto.trim() === "" || Number.isNaN(valor)) {
    console.log("Valor invalido");
    return;
  }

  const resultado = converterDistancia(valor, de, para);
  if (resultado === null) {
    console.log("Unidade invalida");
    return;
  }

  console.log(`${valor}${de} = ${resultado.toFixed(4)}${para}`);
}

async function menuPeso() {
  console.log("\n-- Peso --");
  console.log("Unidades: MG, G, KG, LB (libra)");

  const valorTexto = await pergunta("Valor: ");
  const de = (await pergunta("De qual unidade: ")).trim().toUpperCase();
  const para = (await pergunta("Para qual unidade: ")).trim().toUpperCase();

  const valor = Number(valorTexto);
  if (valorTexto.trim() === "" || Number.isNaN(valor)) {
    console.log("Valor invalido");
    return;
  }

  const resultado = converterPeso(valor, de, para);
  if (resultado === null) {
    console.log("Unidade invalida");
    return;
  }

  console.log(`${valor}${de} = ${resultado.toFixed(4)}${para}`);
}

async function menuMoeda() {
  console.log("\n-- Moeda --");
  console.log("Unidades: USD, BRL, EUR, GBP (taxas fixas, nao e cotacao real)");

  const valorTexto = await pergunta("Valor: ");
  const de = (await pergunta("De qual moeda: ")).trim().toUpperCase();
  const para = (await pergunta("Para qual moeda: ")).trim().toUpperCase();

  const valor = Number(valorTexto);
  if (valorTexto.trim() === "" || Number.isNaN(valor)) {
    console.log("Valor invalido");
    return;
  }

  const resultado = converterMoeda(valor, de, para);
  if (resultado === null) {
    console.log("Moeda invalida");
    return;
  }

  console.log(`${valor} ${de} = ${resultado.toFixed(2)} ${para}`);
}

async function main() {
  let sair = false;

  while (!sair) {
    mostrarMenu();
    const opcao = await pergunta("Escolha uma opcao: ");

    switch (opcao.trim()) {
      case "1":
        await menuTemperatura();
        break;
      case "2":
        await menuDistancia();
        break;
      case "3":
        await menuPeso();
        break;
      case "4":
        await menuMoeda();
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
