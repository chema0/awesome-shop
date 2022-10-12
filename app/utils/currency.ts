const DEFAULT_LOCALE = "en-EN";
const DEFAULT_CURRENCY = "USD";

const formatNumber = (number: number | string) => {
  number = Number(number);

  const formatter = new Intl.NumberFormat(DEFAULT_LOCALE, {
    style: "currency",
    currency: DEFAULT_CURRENCY,
  });

  return formatter.format(number);
};

export { formatNumber };
