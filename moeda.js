// taxas fixas em relacao ao dolar, nao busca cotacao real de nenhuma api
const paraDolar = {
  USD: 1,
  BRL: 1 / 5.4,
  EUR: 1 / 0.92,
  GBP: 1 / 0.79,
};

function converterMoeda(valor, de, para) {
  if (!paraDolar[de] || !paraDolar[para]) return null;

  const dolares = valor * paraDolar[de];
  return dolares / paraDolar[para];
}

module.exports = { converterMoeda };
