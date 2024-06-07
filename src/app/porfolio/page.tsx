'use client';
import MaxWidthWrapper from '@/compoents/MaxWidthWrapper';
import React, { useState } from 'react';
import { Chart } from "react-google-charts";

const Portfolio = () => {
  const [numberN, setNumberN] = useState<number>(0);
  const [sharesPrice, setSharesPrice] = useState<number>(0);
  const [sharesNN, setSharesNN] = useState<number>(0);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [chartCountryData, setChartCountryData] = useState<any[]>([]);
  const [chartAkktierData, setChartAkktierData] = useState<any[]>([]);
  const [isTextVisible, setIsTextVisible] = useState(false);


  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCountryData = [...chartCountryData, [selectedCountry, numberN * sharesPrice ]];
    setChartCountryData(newCountryData);
    const newChartAkktierData = [...chartAkktierData, [sharesNN, numberN * sharesPrice ]];
    setChartAkktierData(newChartAkktierData);
    setNumberN(0);
    setSelectedCountry("");
    setSharesPrice(0);
    setSharesNN(0);

  };

  return (
    <>
      <MaxWidthWrapper className="mb-8 mt-24 text-center max-w-5xl">
      <form
        className="w-2/3 mx-auto text-center "
        onSubmit={handleSubmit}
      >
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

        <input
          className="w-full bg-white text-teal-600 rounded-full py-2 px-4 mb-4 border-2 border-teal-600 text-xl"
          placeholder="oo"
          value={sharesNN}
          onChange={(e) => setSharesNN(parseFloat(e.target.value))}
          required
        />
        
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
      <h1>Return: {numberN.toLocaleString('da-DK')} kr</h1>
      </MaxWidthWrapper>
    </>
  );
};

export default Portfolio;
