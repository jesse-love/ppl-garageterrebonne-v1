import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThankYouPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col antialiased">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="container mx-auto px-6 text-center bg-white p-12 md:p-16 rounded-lg shadow-xl max-w-3xl">
          <svg className="w-24 h-24 text-green-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-dark mb-4">Merci!</h1>
          <p className="text-lg md:text-xl text-brand-secondary mb-8">
            Votre demande a été soumise avec succès. Un de nos experts vous appellera d'ici 5 minutes pour confirmer votre rendez-vous.
          </p>
          <Link
            to="/offre"
            className="inline-block bg-brand-dark text-white font-bold py-3 px-8 rounded-md hover:bg-gray-800 transition-colors duration-300 text-lg"
          >
            Retour à l'accueil
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
