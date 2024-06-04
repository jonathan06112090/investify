'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ReturnCalculator() {
  const [year, setYear] = useState(4);
  const [startCapital, setStartCapital] = useState(10000);
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [returnRate, setReturnRate] = useState(4);

  const calculateReturn = () => {
    let futureValue = startCapital * (1+(returnRate/100)) ** year + ((monthlyInvestment*12)*((1+(returnRate/100)) ** year - 1 )/(returnRate/100));
    futureValue = parseFloat(futureValue.toFixed(2));
    return futureValue ;
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <h2 className="text-xl font-semibold">Return Calculator</h2>
        <p className="text-gray-500">Calculate your return on investment</p>
      </div>
      <div className="text-right">
        <label className="block">
          Year {year}
          <input type="range" name="range" min="0" max="70" onChange={e => setYear(Number(e.target.value))} 
          />
        </label>
        <label className="block mt-4">
          Start capital {startCapital}
          <input type="range" name="range" min="0" max="1000000" onChange={e => setStartCapital(Number(e.target.value))} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </label>
        <label className="block mt-4">
          Monthly investment {monthlyInvestment}
          <input type="range" name="range" min="0" max="50000" onChange={e => setMonthlyInvestment(Number(e.target.value))} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </label>
        <label className="block mt-4">
          Return in a year in % {returnRate}
          <input type="range" name="range" min="1" max="15" onChange={e => setReturnRate(Number(e.target.value))} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </label>

        <div className="mt-4 text-lg font-semibold">
          Return : {calculateReturn()} kr
        </div>
      </div>
    </div>
  )
}
