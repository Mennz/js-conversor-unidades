function celsiusParaFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

function fahrenheitParaCelsius(f) {
  return ((f - 32) * 5) / 9;
}

function celsiusParaKelvin(c) {
  return c + 273.15;
}

function kelvinParaCelsius(k) {
  return k - 273.15;
}

function converterTemperatura(valor, de, para) {
  if (de === para) return valor;

  // primeiro converte tudo pra celsius, depois pro destino
  let celsius;
  if (de === "C") celsius = valor;
  else if (de === "F") celsius = fahrenheitParaCelsius(valor);
  else if (de === "K") celsius = kelvinParaCelsius(valor);
  else return null;

  if (para === "C") return celsius;
  if (para === "F") return celsiusParaFahrenheit(celsius);
  if (para === "K") return celsiusParaKelvin(celsius);

  return null;
}

module.exports = { converterTemperatura };
