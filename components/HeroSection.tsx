
import React from 'react';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-6 h-6 text-green-500 ${className}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M5 13l4 4L19 7"></path>
  </svg>
);

const HighlightedText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-brand-gold px-2 py-1 rounded text-gray-800">{children}</span>
);

const HeroSection: React.FC = () => {
  const features = [
    'Expert Guidance & Support',
    'Client-Focused Service',
    'Competitive Fixed Fees',
    'Technology Driven Solutions',
  ];

  return (
    <section className="relative bg-white pt-12 pb-12 lg:pt-16 lg:pb-16 overflow-hidden">
      {/* Decorative gold shape on the left */}
      <div 
        className="absolute top-0 left-0 h-full w-3/5 lg:w-1/2 bg-brand-gold-light transform -skew-x-12 -ml-20 lg:-ml-32" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          <div className="lg:col-span-7 xl:col-span-6">
            <div>
              <h1 className="text-4xl font-extrabold text-brand-text sm:text-5xl md:text-6xl">
                Welcome to <HighlightedText>ProTaxes</HighlightedText> Accountants & Tax Consultants
              </h1>
              <p className="mt-6 text-lg text-gray-600 sm:text-xl">
                <HighlightedText>London's Premier Accounting Solutions.</HighlightedText> At ProTaxes Ltd, we are dedicated to providing top-notch accounting services to businesses and individuals in London. Our expertise, innovation, and client-centric approach set us apart, helping our clients exceed their financial expectations and achieve growth and prosperity.
              </p>
              <ul className="mt-8 space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="flex-shrink-0 mr-2 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 sm:flex sm:space-x-4">
                <a
                  href="#/contact" 
                  className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors duration-150 ease-in-out transform hover:scale-105"
                >
                  Get Started Today &rsaquo;
                </a>
                <a
                  href="#/services-page" 
                  className="mt-4 sm:mt-0 inline-block px-8 py-3 border-2 border-brand-gold text-brand-gold font-semibold rounded-md hover:bg-brand-gold hover:text-white transition-colors duration-150 ease-in-out transform hover:scale-105"
                >
                  Our Services &rsaquo;
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-5 xl:col-span-6">
            <img
              className="w-full rounded-lg shadow-xl object-cover h-[450px]"
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Professional accounting team collaborating in a modern office"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
