const paraGramas = {
  MG: 0.001,
  G: 1,
  KG: 1000,
  LB: 453.592,
};

function converterPeso(valor, de, para) {
  if (!paraGramas[de] || !paraGramas[para]) return null;

  const gramas = valor * paraGramas[de];
  return gramas / paraGramas[para];
}

module.exports = { converterPeso };
