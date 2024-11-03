// src/components/SignDetail.js
import React, { useEffect, useState } from 'react';
import { getDailyHoroscope } from '../api/horoscopeservice';

const SignDetail = ({ sign }) => {
  const [horoscope, setHoroscope] = useState(null);

  useEffect(() => {
    async function fetchHoroscope() {
      const data = await getDailyHoroscope(sign);
      setHoroscope(data);
    }
    fetchHoroscope();
  }, [sign]);

  return (
    <div>
      <h2>{sign}</h2>
      {horoscope ? (
        <p>{horoscope.horoscope}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SignDetail;
