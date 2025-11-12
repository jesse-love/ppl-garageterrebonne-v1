import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import TestimonialCard from '../components/TestimonialCard';
import BenefitItem from '../components/BenefitItem';

const LandingPageMartin: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col antialiased">
      <Header />
      <main className="flex-grow">
        {/* Above the Fold */}
        <section className="bg-brand-dark text-white">
          <div className="container mx-auto px-6 py-20 md:py-28">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="text-center md:text-left">
                <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                  Temps de changer vos pneus?
                </h1>
                <p className="text-xl md:text-2xl font-light text-gray-300 mb-8 max-w-2xl">
                  Ajoutez une Inspection de Freins GRATUITE (Valeur 99$).
                </p>
                <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-brand-orange">
                    <h3 className="text-lg text-gray-200">
                    "Pourquoi faire deux voyages au garage? Pendant que vos pneus sont changés, nos experts inspecteront vos freins gratuitement. <strong className="font-bold text-brand-orange">Repartez en toute sécurité pour la nouvelle saison.</strong>"
                    </h3>
                </div>
              </div>
              <div className="max-w-md mx-auto w-full">
                <LeadForm
                  title='Réservez votre "Combo" Pneus + Freins!'
                  buttonText='Réservez mon combo'
                  reassuranceText="Inspection gratuite avec votre changement de pneus. Service rapide garanti."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Below the Fold: Desire */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-4">Soyez prêt pour la route. C'est simple, rapide et intelligent.</h2>
            <p className="text-lg text-brand-secondary mb-16 max-w-3xl mx-auto">Faites tout en un seul rendez-vous. C'est la solution la plus efficace à Terrebonne.</p>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-12 max-w-4xl mx-auto text-left">
              <BenefitItem title="Économisez du temps">
                Faites tout en un seul rendez-vous. C'est la solution la plus efficace à Terrebonne.
              </BenefitItem>
              <BenefitItem title="C'est logique">
                Les roues sont déjà enlevées pour les pneus. C'est le moment idéal pour une inspection visuelle complète de vos freins.
              </BenefitItem>
              <BenefitItem title="Repartez en sécurité">
                Après vos pneus, les freins sont l'élément de sécurité #1 à vérifier avant l'hiver (ou l'été).
              </BenefitItem>
              <BenefitItem title="Économisez 10% sur les pièces">
                Si vos plaquettes ou disques sont usés, obtenez 10% de rabais sur les pièces de remplacement.
              </BenefitItem>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark text-center mb-16">Nos clients adorent l'efficacité de notre service saisonnier :</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <TestimonialCard quote="Je vais chez MGC pour mes pneus chaque saison. Le service est rapide, et l'inspection gratuite des freins m'a donné la paix d'esprit pour l'hiver." author="Martin V., Terrebonne" />
                <TestimonialCard quote="Super service! J'ai pu faire mon changement de pneus et une vérification en même temps. Équipe efficace et honnête." author="Isabelle D., Mascouche" />
                <TestimonialCard quote="Ils ont remarqué que mes plaquettes de frein étaient presque finies pendant mon changement de pneus. Ça m'a sauvé un autre voyage! Je recommande." author="Patrick G." />
            </div>
          </div>
        </section>

        {/* Final Action */}
        <section className="bg-brand-orange">
          <div className="container mx-auto px-6 py-16 text-center">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Soyez prêt pour la nouvelle saison. Ne laissez rien au hasard.</h3>
            <button onClick={() => window.scrollTo({top:0, behavior: 'smooth'})} className="bg-white text-brand-dark font-bold text-xl py-4 px-10 rounded-md hover:bg-gray-200 transition-colors duration-300 shadow-lg transform hover:scale-105 flex items-center justify-center mx-auto gap-2">
                <span>RÉSERVEZ VOTRE CHANGEMENT DE PNEUS + INSPECTION GRATUITE!</span>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageMartin;
