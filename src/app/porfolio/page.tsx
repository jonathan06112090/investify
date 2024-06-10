'use client';
import MaxWidthWrapper from '@/compoents/MaxWidthWrapper';
import { buttonVariants } from '@/compoents/ui/button';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

const Portfolio = () => {
  const [numberN, setNumberN] = useState<number>(0);
  const [sharesPrice, setSharesPrice] = useState<number>(0);
  const [sharesNN, setSharesNN] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [chartCountryData, setChartCountryData] = useState<any[]>([]);
  const [chartAkktierData, setChartAkktierData] = useState<any[]>([]);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [totalValue, setTotalValue] = useState<number>(0);

  const { user, error, isLoading } = useUser();

  useEffect(() => {
    const total = chartAkktierData.reduce((acc, [name, value]) => acc + value, 0);
    setTotalValue(total);
  }, [chartAkktierData]);


  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCountryData = [...chartCountryData, [selectedCountry, numberN * sharesPrice]];
    setChartCountryData(newCountryData);
    const newChartAkktierData = [...chartAkktierData, [sharesNN, numberN * sharesPrice]];
    setChartAkktierData(newChartAkktierData);
    setNumberN(0);
    setSelectedCountry("");
    setSharesPrice(0);
    setSharesNN("");
  };

  return (
    <>
      <MaxWidthWrapper className="mb-8 mt-24 text-center max-w-5xl">
        <form
          className="w-2/3 mx-auto text-center "
          onSubmit={handleSubmit}
        > 
          <p>Antal aktier</p> 
          <input
            className="w-full bg-white text-teal-600 rounded-full py-2 px-4 mb-4 border-2 border-teal-600 text-xl"
            placeholder="Indtast beløb"
            value={numberN}
            onChange={(e) => setNumberN(parseFloat(e.target.value))}
            required
            type="number"
            step="0.01"
            max={1000000000} 
          />
          <p>Navn på aktie</p> 
          <input
            className="w-full bg-white text-teal-600 rounded-full py-2 px-4 mb-4 border-2 border-teal-600 text-xl"
            placeholder="Navn"
            value={sharesNN}
            onChange={(e) => setSharesNN((e.target.value))}
            required
          />
          <p>Området/Land</p>
          <select
            className="w-full bg-white text-teal-600 rounded-full py-2 px-4 mb-4 border-2 border-teal-600 text-xl"
            value={selectedCountry}
            onChange={handleSelectChange}
          >
            <option value="">Vælg land</option>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            <option value="DK">DK</option>
          </select>
          <p>Pris aktiepris (Midler tidigt)</p>
          <input
            className="w-full bg-white text-teal-600 rounded-full py-2 px-4 mb-4 border-2 border-teal-600 text-xl"
            placeholder="Pris aktiepris (Midler tidigt)"
            value={sharesPrice}
            onChange={(e) => setSharesPrice(parseFloat(e.target.value))}
            required
            type="number"
            step="0.01"
            max={1000000}
          />
          <button type="submit" className="rounded py-2 px-4 mb-4">Opdater diagram</button>
        </form>
        <button className='rounded py-2 px-4' onClick={() => setIsTextVisible(!isTextVisible)}>
          {isTextVisible ? 'Skjul kage-diagram' : 'Se kage-diagram'}
        </button>
        <br />
        {isTextVisible ? (
          <Chart
            chartType="PieChart"
            data={[['Task', 'Hours per Day'], ...chartCountryData]}
            width={"100%"}
            height={"800px"}
          />
        ) : (
          <Chart
            chartType="PieChart"
            data={[['Task', 'Hours per Day'], ...chartAkktierData]}
            width={"100%"}
            height={"800px"}
          />
        )}
        <h1>Porteføljestørrelsen: kr {totalValue.toFixed(2)}</h1>
      </MaxWidthWrapper>
    </>
  );
};

export default Portfolio;
