import { useEffect, useState } from 'react';
import { getCryptoRates } from '../api/crypto';

const useCryptoRates = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const data = await getCryptoRates();
        setRates(data);
      } catch (error) {
        console.error('Error fetching rates:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  return { rates, loading };
};

export default useCryptoRates;
