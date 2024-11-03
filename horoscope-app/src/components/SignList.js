// src/components/SignList.js
import React from 'react';

const signs = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];

const SignList = ({ onSelectSign }) => (
  <div>
    <h1>Select Your Star Sign</h1>
    <ul>
      {signs.map((sign) => (
        <li key={sign} onClick={() => onSelectSign(sign)}>
          {sign}
        </li>
      ))}
    </ul>
  </div>
);

export default SignList;
