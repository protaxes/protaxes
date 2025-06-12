
import React from 'react';

// Shared PageSection and ListItem components
const PageSection: React.FC<{ title?: string; children: React.ReactNode; className?: string; textClassName?: string }> = ({ title, children, className, textClassName = "text-brand-text" }) => (
  <section className={`py-8 md:py-12 ${className}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {title && <h2 className={`text-2xl md:text-3xl font-bold ${textClassName} mb-6 md:mb-8 text-center md:text-left`}>{title}</h2>}
      {children}
    </div>
  </section>
);

const ListItem: React.FC<{ children: React.ReactNode; iconColor?: string }> = ({ children, iconColor = "text-brand-gold" }) => (
  <li className="flex items-start mb-2">
    <svg className={`w-5 h-5 ${iconColor} mr-2 mt-1 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    </svg>
    <span className="text-gray-700">{children}</span>
  </li>
);

const HealthcareProfessionalsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Accounting for Healthcare Professionals</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          ProTaxes provides specialist accounting and tax services for doctors, dentists, consultants, locums, and other healthcare practitioners.
        </p>
      </PageSection>

      <PageSection title="Dedicated Financial Support for the Healthcare Sector">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Healthcare professionals face unique financial complexities, from managing practice income and expenses to navigating NHS pensions and private practice considerations. At ProTaxes, our team of specialist accountants understands the specific needs of the healthcare sector. We provide tailored financial advice and support to help you achieve your professional and personal financial goals.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you are a GP, hospital consultant, dentist, locum, or run a private clinic, we offer comprehensive services to manage your accounting, tax, and financial planning effectively.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Healthcare Professional" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="Our Services for Healthcare Professionals:" className="bg-gray-50">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
          <ListItem><strong>Practice Accounts:</strong> Preparation of annual accounts for GP practices, dental practices, and private clinics.</ListItem>
          <ListItem><strong>Personal Tax Returns (Self-Assessment):</strong> For individual practitioners, including locums and consultants.</ListItem>
          <ListItem><strong>NHS Pension Scheme Advice:</strong> Guidance on annual allowance, lifetime allowance, and superannuation certificates.</ListItem>
          <ListItem><strong>Income Tax Planning:</strong> Strategies to optimise income from various sources (NHS, private practice).</ListItem>
          <ListItem><strong>Expense Claims:</strong> Ensuring all allowable professional expenses are claimed.</ListItem>
          <ListItem><strong>Limited Company Accounts:</strong> For practitioners operating through a limited company.</ListItem>
          <ListItem><strong>Locum Accountant Services:</strong> Specific support for locum doctors and dentists.</ListItem>
          <ListItem><strong>Partnership Accounts & Tax:</strong> For healthcare professionals in partnership structures.</ListItem>
          <ListItem><strong>Incorporation Advice:</strong> Assessing the benefits of incorporating your practice or private work.</ListItem>
          <ListItem><strong>Bookkeeping & Cloud Accounting:</strong> Streamlined financial record-keeping.</ListItem>
          <ListItem><strong>Succession Planning & Valuations:</strong> For practice sales, mergers, or retirement planning.</ListItem>
          <ListItem><strong>VAT Advice:</strong> Particularly relevant for dispensing practices or those with private income streams.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Why Healthcare Professionals Choose ProTaxes:">
        <p className="text-gray-700 leading-relaxed mb-6">
          ProTaxes offers the healthcare sector:
        </p>
        <ul className="space-y-3 text-gray-700">
          <ListItem><strong>Specialist Expertise:</strong> In-depth knowledge of healthcare finance, NHS contracts, and pensions.</ListItem>
          <ListItem><strong>Tailored Solutions:</strong> Services designed to meet the specific needs of medical and dental professionals.</ListItem>
          <ListItem><strong>Proactive Advice:</strong> Helping you plan for tax changes and financial opportunities.</ListItem>
          <ListItem><strong>Confidentiality and Trust:</strong> We handle your sensitive financial information with the utmost care.</ListItem>
          <ListItem><strong>Time-Saving:</strong> Allowing you to focus on patient care while we manage your finances.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Your Financial Health is Our Priority" className="bg-brand-gold-light">
        <p className="text-gray-700 leading-relaxed mb-6 text-center">
          Secure your financial future with expert advice from ProTaxes. Contact us today for a confidential discussion about your accounting and tax needs as a healthcare professional.
        </p>
        <div className="text-center">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Healthcare Professionals Enquiry
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default HealthcareProfessionalsPage;
