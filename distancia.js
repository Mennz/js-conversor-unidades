const paraMetros = {
  MM: 0.001,
  CM: 0.01,
  M: 1,
  KM: 1000,
  MI: 1609.34,
};

function converterDistancia(valor, de, para) {
  if (!paraMetros[de] || !paraMetros[para]) return null;

  const metros = valor * paraMetros[de];
  return metros / paraMetros[para];
}

module.exports = { converterDistancia };
