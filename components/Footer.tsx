import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-brand-secondary text-center py-8">
      <div className="container mx-auto px-6 text-sm">
        <p>© 2024 garageterrebonne.ca | Tous droits réservés | <a href="#" className="underline hover:text-brand-dark transition-colors">Politique de confidentialité</a></p>
        <p className="mt-2 text-xs text-gray-400">Propulsé par MGC</p>
      </div>
    </footer>
  );
};

export default Footer;
