'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '@/compoents/MaxWidthWrapper';

export default function ReturnCalculator() {
  const [year, setYear] = useState(10);
  const [startCapital, setStartCapital] = useState(10000);
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [returnRate, setReturnRate] = useState(7);

  const calculateReturn = () => {
    let futureValue = startCapital * (1+(returnRate/100)) ** year + ((monthlyInvestment*12)*((1+(returnRate/100)) ** year - 1 )/(returnRate/100));
    futureValue = parseFloat(futureValue.toFixed(2));
    return futureValue ;
  };

  const calculateReturn2 = () => {
    let futureValue2 = calculateReturn() - (startCapital + (monthlyInvestment*12)* (year - 1)) ;
    futureValue2 = parseFloat(futureValue2.toFixed(2));
    return futureValue2 ;
  };

  
  

  return (
    <MaxWidthWrapper className="mb-8 mt-24 text-center max-w-5xl">
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <h2 className="text-xl font-semibold text-blue-600">AfkastBeregner</h2>
        <p className="text-gray-500">Beregn dit investeringsafkast</p>
      </div>
      <div className="text-right">
        <label className="block">
          År {year}
          <input type="number" name="year" min="0" max="70" value={year} onChange={e => setYear(Number(e.target.value))}  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </label>
        <label className="block mt-4">
          Startkapital {startCapital}
          <input type="number" name="startCapital" min="0" max="1000000" value={startCapital} onChange={e => setStartCapital(Number(e.target.value))} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </label>
        <label className="block mt-4">
          Månedlig investering {monthlyInvestment}
          <input type="number" name="monthlyInvestment" min="0" max="50000" value={monthlyInvestment} onChange={e => setMonthlyInvestment(Number(e.target.value))} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </label>
        <label className="block mt-4">
          Afkast på et år i % {returnRate}
          <input type="number" name="returnRate" min="1" max="15" value={returnRate} onChange={e => setReturnRate(Number(e.target.value))} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </label>

        <div className="mt-4 text-lg font-semibold text-green-600">
          Resultat : {calculateReturn().toLocaleString('da-DK', { style: 'currency', currency: 'DKK' })}
        </div>
        <div className="mt-4 text-lg font-semibold text-green-600">
          Resultat : {calculateReturn2().toLocaleString('da-DK', { style: 'currency', currency: 'DKK' })}
        </div>
      </div>
    </div>
    </MaxWidthWrapper>
  )
}


