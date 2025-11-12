import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import TestimonialCard from '../components/TestimonialCard';
import BenefitItem from '../components/BenefitItem';

const LandingPageAlex: React.FC = () => {
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
                  Bruit de freins suspect?
                </h1>
                <p className="text-xl md:text-2xl font-light text-gray-300 mb-8 max-w-2xl">
                  Obtenez votre inspection 100% GRATUITE à Terrebonne.
                </p>
                <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-brand-orange">
                  <h3 className="text-lg text-gray-200">
                    "Les concessionnaires vous facturent 150$ juste pour regarder votre auto. Oubliez ça. Obtenez un diagnostic honnête et gratuit de nos experts certifiés, et sachez <strong className="font-bold text-brand-orange">exactement</strong> ce qui ne va pas avant de payer un sou."
                  </h3>
                </div>
              </div>
              <div className="max-w-md mx-auto w-full">
                <LeadForm
                  title="OUI! Je veux mon inspection GRATUITE!"
                  buttonText="Obtenez mon inspection gratuite"
                  reassuranceText="Garanti 100% gratuit. Sans obligation. Réponse rapide assurée."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Below the Fold: Desire */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-4">Reprenez la route l'esprit tranquille.</h2>
            <p className="text-lg text-brand-secondary mb-16 max-w-3xl mx-auto">Votre inspection gratuite inclut :</p>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-12 max-w-4xl mx-auto text-left">
              <BenefitItem title="Sachez le vrai problème">
                Recevez un diagnostic précis et honnête, sans jargon.
              </BenefitItem>
              <BenefitItem title="Économisez instantanément">
                Obtenez 10% de rabais sur toutes les pièces nécessaires si une réparation est requise.
              </BenefitItem>
              <BenefitItem title="Conduisez en sécurité">
                Reprenez la route en sachant que vos freins sont 100% sécuritaires.
              </BenefitItem>
              <BenefitItem title="Pas de surprises">
                Nous ne faisons jamais de réparations sans votre approbation claire.
              </BenefitItem>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark text-center mb-16">Ce que nos clients de Terrebonne disent :</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <TestimonialCard quote="Mes freins grinçaient et j'avais peur. Ils m'ont pris le jour-même. Service incroyable. Je recommande à 100%." author="Sophie B., Terrebonne" />
              <TestimonialCard quote="Service rapide et honnête. Ils ont trouvé le problème que mon ancien garage ne voyait pas. Je leur fais confiance les yeux fermés." author="Julie P., Terrebonne" />
              <TestimonialCard quote="J'ai sauvé 200$ par rapport à la soumission du concessionnaire. Mon seul garage maintenant. Merci MGC!" author="Marc L., Mascouche" />
            </div>
          </div>
        </section>

        {/* Final Action */}
        <section className="bg-brand-orange">
          <div className="container mx-auto px-6 py-16 text-center">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Ne risquez pas votre sécurité un jour de plus.</h3>
            <button onClick={() => window.scrollTo({top:0, behavior: 'smooth'})} className="bg-white text-brand-dark font-bold text-xl py-4 px-10 rounded-md hover:bg-gray-200 transition-colors duration-300 shadow-lg transform hover:scale-105 flex items-center justify-center mx-auto gap-2">
                <span>RÉSERVEZ VOTRE INSPECTION GRATUITE</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPageAlex;
