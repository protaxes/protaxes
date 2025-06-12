
import React from 'react';

const CheckIconMini: React.FC = () => (
  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M5 13l4 4L19 7"></path>
  </svg>
);

const AwardIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" />
        <path d="M12 15L8 17.5L9 13L6 10.5L10.5 10L12 6L13.5 10L18 10.5L15 13L16 17.5L12 15Z" />
    </svg>
);


interface InfoCardProps {
  title: string;
  items?: string[];
  description?: string;
  linkText: string;
  linkHref: string;
  icons?: React.ReactNode[];
}

const InfoCard: React.FC<InfoCardProps> = ({ title, items, description, linkText, linkHref, icons }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col h-full">
      <h3 className="text-xl font-bold text-brand-text mb-4">{title}</h3>
      {items && (
        <ul className="space-y-2 mb-4 text-gray-600 flex-grow">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckIconMini />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {description && <p className="text-gray-600 mb-4 flex-grow">{description}</p>}
      {icons && <div className="flex space-x-2 my-4">{icons}</div>}
      <a href={linkHref} className="mt-auto text-brand-gold-darker font-semibold hover:underline">
        {linkText} &rsaquo;
      </a>
    </div>
  );
};

const InfoCardsSection: React.FC = () => {
  const cardsData = [
    {
      title: 'Who We Help',
      items: [
        'Individuals (Self Assessment)',
        'Sole Traders & Partnerships',
        'Limited Companies',
        'Contractors & Freelancers (IR35)',
        'Landlords & Start-ups',
      ],
      linkText: 'Explore our client focus',
      linkHref: '#who-we-help', 
    },
    {
      title: 'Why Choose ProTaxes',
      items: [
        'Expertise and Experience',
        'Client-Centric Approach',
        'Comprehensive Services',
        'Technology-Driven Solutions',
        'Competitive & Transparent Pricing',
      ],
      linkText: 'Discover the ProTaxes difference',
      linkHref: '#about-us', // Assuming an #about-us section exists or will be added to the homepage
    },
    {
      title: 'Ready to Transform Your Finances?',
      description: 'Join many successful London businesses and individuals transforming their finances with ProTaxes.',
      icons: [
        <AwardIcon key="award1" className="text-blue-600" />,
        <AwardIcon key="award2" className="text-yellow-500" />
      ],
      linkText: 'Book Your Free Consultation Today',
      linkHref: '#/contact', 
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-brand-gold-light"> {/* Removed id="who-we-help" as it's added in App.tsx wrapper */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              items={card.items}
              description={card.description}
              linkText={card.linkText}
              linkHref={card.linkHref}
              icons={card.icons}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
