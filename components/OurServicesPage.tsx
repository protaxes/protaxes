
import React from 'react';

// Placeholder content for OurServicesPage - this file would contain the detailed services list.
// The previous step might have already created this. If so, this is just to ensure it's here.

const ServiceItem: React.FC<{ title: string; description: string; points?: string[] }> = ({ title, description, points }) => (
  <div className="mb-8 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-2xl font-semibold text-brand-gold-darker mb-3">{title}</h3>
    <p className="text-gray-700 mb-3 leading-relaxed">{description}</p>
    {points && points.length > 0 && (
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    )}
  </div>
);


const OurServicesPage: React.FC = () => {
  const servicesData = [
    {
      title: "Accounting Services",
      description: "Our comprehensive accounting services ensure your financial records are accurate, up-to-date, and compliant. We provide businesses with the insights needed to make informed decisions and achieve financial stability.",
      points: [
        "Bookkeeping and financial statement preparation",
        "Management accounts and reporting",
        "Budgeting and forecasting",
        "Cloud accounting solutions (Xero, QuickBooks, Sage)",
        "Payroll services"
      ]
    },
    {
      title: "Tax Services",
      description: "Navigating the complexities of tax law can be challenging. Our expert tax advisors offer strategic planning and compliance services to minimize your tax liabilities and ensure you meet all statutory requirements.",
      points: [
        "Self Assessment tax returns for individuals and sole traders",
        "Corporation tax planning and returns for limited companies",
        "VAT registration, returns, and advice",
        "Capital Gains Tax (CGT) planning",
        "Inheritance Tax (IHT) planning",
        "HMRC investigation support"
      ]
    },
    {
      title: "Business Startup & Support",
      description: "Starting a new business? We provide end-to-end support, from choosing the right business structure to setting up your accounting systems and ensuring compliance from day one.",
      points: [
        "Company formation and registration",
        "Business plan development",
        "Cash flow projections and financial forecasting",
        "Advice on funding options",
        "Company secretarial services"
      ]
    },
    {
        title: "Specialist Services",
        description: "Beyond core accounting and tax, we offer specialist services tailored to specific needs and industries, including IR35 advice for contractors and property tax for landlords.",
        points: [
          "IR35 contract reviews and advice",
          "Property tax planning for landlords (buy-to-let, HMOs)",
          "Research and Development (R&D) tax credits",
          "Business valuations",
          "Forensic accounting"
        ]
    }
  ];

  return (
    <div className="py-12 lg:py-20 bg-brand-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-brand-text sm:text-4xl">
            Our Comprehensive Accounting and Tax Services
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            At ProTaxes, we offer a wide range of tailored services to meet the diverse needs of individuals, startups, and established businesses in London. Our goal is to provide expert advice and proactive solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map(service => (
            <ServiceItem 
              key={service.title}
              title={service.title}
              description={service.description}
              points={service.points}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServicesPage;
