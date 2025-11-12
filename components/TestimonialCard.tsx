import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col">
       <svg className="w-10 h-10 text-brand-orange/50 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v10a1 1 0 01-1.667.748L5.5 11.248V14a1 1 0 01-1-1V4a1 1 0 011-1h4.5zM15 3a1 1 0 011 1v10a1 1 0 01-1.667.748L10.5 11.248V14a1 1 0 01-1-1V4a1 1 0 011-1h4.5z" clipRule="evenodd"></path></svg>
      <p className="text-brand-secondary italic mb-4 flex-grow">"{quote}"</p>
      <p className="text-right font-bold text-brand-dark font-heading">- {author}</p>
    </div>
  );
};

export default TestimonialCard;
