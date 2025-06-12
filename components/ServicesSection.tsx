
import React from 'react';

const DocumentIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-12 h-12 text-brand-gold ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-12 h-12 text-brand-gold ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ReceiptTaxIcon: React.FC<{ className?: string }> = ({ className }) => ( // Changed from TagIcon for better VAT/Bookkeeping representation
  <svg className={`w-12 h-12 text-brand-gold ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25v-2.625c0-.414.336-.75.75-.75h3.5c.414 0 .75.336.75.75v2.625M9 14.25v3.375c0 .621.504 1.125 1.125 1.125h1.5c.621 0 1.125-.504 1.125-1.125v-3.375M9 14.25h3.75M15 12h3.75M3 6h18M3 10.5h18M3 15h5.25m5.25 0h8.25" />
  </svg>
);


interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-brand-gold-light text-center h-full flex flex-col items-center">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-brand-text mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <DocumentIcon />,
      title: 'Self Assessment Tax Returns',
      description: 'Navigate personal tax effortlessly. We ensure accurate, timely HMRC submissions, maximising your tax efficiency and minimising stress for individuals and sole traders.',
    },
    {
      icon: <BriefcaseIcon />,
      title: 'Limited Company Accounts & Tax',
      description: 'Full accounting solutions for limited companies, including year-end accounts, corporation tax, and strategic advice to support your business growth and compliance.',
    },
    {
      icon: <ReceiptTaxIcon />,
      title: 'VAT & Bookkeeping Services',
      description: 'Stay on top of your finances with our meticulous bookkeeping and VAT return services. We ensure compliance and provide clarity on your financial position.',
    },
  ];

  return (
    <section id="services" className="py-12 lg:py-20 bg-white"> {/* Added ID for navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-brand-text sm:text-4xl">
            Our Core Accounting & Tax Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            ProTaxes offers a comprehensive suite of accounting and tax services tailored to meet your specific needs in London.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
