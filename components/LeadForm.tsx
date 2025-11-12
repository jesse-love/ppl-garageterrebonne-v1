import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LeadFormProps {
  title: string;
  buttonText: string;
  reassuranceText: string;
}

const ActionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);


const LeadForm: React.FC<LeadFormProps> = ({ title, buttonText, reassuranceText }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      // In a real application, you would send the lead data to a backend here.
      console.log({ name, phone });
      navigate('/merci');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl w-full">
      <h3 className="font-heading text-2xl font-bold text-center text-brand-dark mb-6">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="sr-only">Prénom</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Prénom"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange text-lg"
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">Téléphone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Téléphone (Requis)"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange text-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-brand-orange text-white font-bold text-xl py-4 rounded-md hover:bg-orange-600 transition-all duration-300 shadow-lg transform hover:scale-110 flex items-center justify-center"
        >
          <span>{buttonText}</span>
          <ActionIcon />
        </button>
      </form>
      <p className="text-center text-sm text-gray-500 mt-5">{reassuranceText}</p>
    </div>
  );
};

export default LeadForm;