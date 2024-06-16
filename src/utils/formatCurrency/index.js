export const formatCurrency = (value) =>
  new Intl.NumberFormat("pt-BR").format(value);
