'use client';
import { useState } from 'react';

// Reusable form field component
const FormField = ({ label, name, type, options, handleChange }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    {type === 'select' ? (
      <select name={name} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        name={name}
        onChange={handleChange}
        className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    )}
  </div>
);

// Main Questionnaire component
export default function Questionnaire() {
  // State to manage form data
  const [formState, setFormState] = useState({
    timeHorizon: '',
    riskProfile: '',
    portfolioSize: '',
    age: '',
    previousExperience: '',
  });

  // Handle change in form fields
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    for (let field in formState) {
      if (!formState[field]) {
        alert(`Please fill out the ${field} field.`);
        return;
      }
    }

    // Log the form state to the console (can be replaced with API call)
    console.log(formState);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <form onSubmit={handleSubmit} className="w-full">
        <FormField
          label="Tidshorisont"
          name="timeHorizon"
          type="select"
          options={[
            { value: 'lang', label: 'Lang' },
            { value: 'lav', label: 'Lav' },
            { value: 'mellem', label: 'Mellem' },
            { value: 'meget lang', label: 'Meget Lang' },
          ]}
          handleChange={handleChange}
        />
        <FormField
          label="Risikoprofil"
          name="riskProfile"
          type="select"
          options={[
            { value: 'høj', label: 'Høj' },
            { value: 'lav', label: 'Lav' },
            { value: 'mellem', label: 'Mellem' },
            { value: 'meget højere', label: 'Meget Højere' },
            { value: 'meget lille', label: 'Meget Lille' },
          ]}
          handleChange={handleChange}
        />
        <FormField
          label="Størrelseportefølje i kr"
          name="portfolioSize"
          type="number"
          handleChange={handleChange}
        />
        <FormField
          label="Alder"
          name="age"
          type="number"
          handleChange={handleChange}
        />
        <FormField
          label="Tidligere Erfaring"
          name="previousExperience"
          type="select"
          options={[
            { value: 'lidt', label: 'Lidt' },
            { value: 'middel', label: 'Middel' },
            { value: 'meget', label: 'Meget' },
          ]}
          handleChange={handleChange}
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-black font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
