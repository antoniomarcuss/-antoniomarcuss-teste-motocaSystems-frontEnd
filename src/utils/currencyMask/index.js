export function currencyMask(value) {
  if (!value) return "0,00";

  value = value.replace(/\D/g, "");
  value = (parseInt(value) / 100).toFixed(2);
  value = value.replace(".", ",").replace(/(\d)(?=(\d{3})+,)/g, "$1.");
  return value;
}
