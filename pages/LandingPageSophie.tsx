import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import TestimonialCard from '../components/TestimonialCard';
import BenefitItem from '../components/BenefitItem';

const LandingPageSophie: React.FC = () => {
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
                  Votre concessionnaire vous charge-t-il trop cher?
                </h1>
                <p className="text-xl md:text-2xl font-light text-gray-300 mb-8 max-w-2xl">
                  Obtenez un bilan de santé 100% GRATUIT pour vos freins.
                </p>
                 <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-brand-orange">
                    <h3 className="text-lg text-gray-200">
                    "Les concessionnaires adorent les 'inspections' à 150$. Oubliez ça. Obtenez un diagnostic honnête de nos experts certifiés. Zéro obligation. Zéro jargon. <strong className="font-bold text-brand-orange">Juste la vérité.</strong>"
                    </h3>
                </div>
              </div>
              <div className="max-w-md mx-auto w-full">
                <LeadForm
                  title="Obtenez votre bilan GRATUIT"
                  buttonText="Obtenez mon bilan honnête"
                  reassuranceText="Garanti 100% gratuit. Sans obligation. Pas de vente sous pression."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Below the Fold: Desire */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-4">Prenez les devants. Évitez les grosses factures.</h2>
            <p className="text-lg text-brand-secondary mb-16 max-w-3xl mx-auto">Notre bilan honnête vous donne le contrôle financier et la tranquillité d'esprit.</p>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-12 max-w-4xl mx-auto text-left">
              <BenefitItem title="Détectez les problèmes AVANT">
                Évitez qu'ils ne deviennent des catastrophes coûteuses.
              </BenefitItem>
              <BenefitItem title="Obtenez un plan d'entretien clair">
                Nous vous disons ce qui est urgent et ce qui peut attendre, sans pression.
              </BenefitItem>
              <BenefitItem title="Validez (ou contestez) le devis">
                Notre bilan est 100% gratuit et sans engagement pour vous donner un 2e avis de confiance.
              </BenefitItem>
               <BenefitItem title="Économisez 10% sur les pièces">
                Si une maintenance préventive est nécessaire, vous obtenez un rabais.
              </BenefitItem>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark text-center mb-16">Nos clients apprécient notre transparence :</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <TestimonialCard quote="Fatigué de me faire avoir par le concessionnaire. L'équipe de MGC m'a donné l'heure juste. Honnêtes et professionnels. Je ne vais plus ailleurs." author="David R., Terrebonne" />
              <TestimonialCard quote="L'inspection gratuite m'a permis d'économiser sur une réparation que mon autre garage jugeait 'urgente'. Merci pour l'honnêteté. Je recommande MGC." author="Michel P." />
              <TestimonialCard quote="Ils m'ont expliqué clairement ce qui devait être fait maintenant et ce qui pouvait attendre 6 mois. J'ai enfin un garage de confiance à Mascouche. Ça n'a pas de prix." author="Sophie L." />
            </div>
          </div>
        </section>

        {/* Final Action */}
        <section className="bg-brand-orange">
            <div className="container mx-auto px-6 py-16 text-center">
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">La tranquillité d'esprit n'a pas de prix. Surtout quand elle est gratuite.</h3>
                <button onClick={() => window.scrollTo({top:0, behavior: 'smooth'})} className="bg-white text-brand-dark font-bold text-xl py-4 px-10 rounded-md hover:bg-gray-200 transition-colors duration-300 shadow-lg transform hover:scale-105 flex items-center justify-center mx-auto gap-2">
                    <span>RÉSERVEZ VOTRE BILAN DE SANTÉ GRATUIT!</span>
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageSophie;
