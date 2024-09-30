import API from './index';

// Fetch live crypto rates from the backend
export const getCryptoRates = async () => {
  try {
    const response = await API.get('/crypto/rates/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Convert crypto to fiat
export const convertCrypto = async (fromCurrency, toCurrency, amount) => {
  try {
    const response = await API.post('/crypto/convert/', {
      from_currency: fromCurrency,
      to_currency: toCurrency,
      amount: amount,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
