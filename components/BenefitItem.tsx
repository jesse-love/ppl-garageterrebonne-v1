import React from 'react';

interface BenefitItemProps {
  title: string;
  children: React.ReactNode;
}

const CheckIcon: React.FC = () => (
  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);


const BenefitItem: React.FC<BenefitItemProps> = ({ title, children }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 pt-1">
        <CheckIcon />
      </div>
      <div>
        <h4 className="text-lg font-bold text-brand-dark font-heading">{title}</h4>
        <p className="text-brand-secondary mt-1">{children}</p>
      </div>
    </div>
  );
};

export default BenefitItem;
