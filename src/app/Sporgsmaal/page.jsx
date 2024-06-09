'use client';
import { useState } from 'react';


export default function Questionnaire() {
  const [formState, setFormState] = useState({
    timeHorizon: '',
    riskProfile: '',
    portfolioSize: '',
    age: '',
    previousExperience: '',
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();




    for (let field in formState) {
      if (!formState[field]) {
        alert(`Please fill out the ${field} field.`);
        return;
      }
    }
    
    // Log the form state to the console
    console.log(formState);


    // Here you can handle the form submission. 
    // For example, you might want to send the formState object to your server or to an API.
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="timeHorizon">Tidshorisont:</label>
          <select name="timeHorizon" onChange={handleChange}>
            <option value="lang">Lang</option>
            <option value="lav">Lav</option>
            <option value="mellem">Mellem</option>
            <option value="meget lang">Meget Lang</option>
          </select>
        </div >

        <div className="mb-4">
          <label htmlFor="riskProfile">Risikoprofil:</label>
          <select name="riskProfile" onChange={handleChange}>
            <option value="høj">Høj</option>
            <option value="lav">Lav</option>
            <option value="mellem">Mellem</option>
            <option value="meget højere">Meget Højere</option>
            <option value="meget lille">Meget Lille</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="portfolioSize">Størrelseportefølje i kr:</label>
          <input type="number" name="portfolioSize" onChange={handleChange} />
        </div>

        <div className="mb-4">
          <label htmlFor="age">Alder:</label>
          <input type="number" name="age" onChange={handleChange} />
        </div>

        <div className="mb-4">
          <label htmlFor="previousExperience">Tidligere Erfaring:</label>
          <select name="previousExperience" onChange={handleChange}>
            <option value="lidt">Lidt</option>
            <option value="middel">Middel</option>
            <option value="meget">Meget</option>
          </select>
        </div>

        <button type="submit">Submit</button>
        
      </form>
    </div>
  
  );
}
