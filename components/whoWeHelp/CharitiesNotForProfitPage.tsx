
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

const CharitiesNotForProfitPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Accounting for Charities & Not-for-Profit</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          ProTaxes offers specialist financial, governance, and compliance services for charities, social enterprises, and not-for-profit organisations.
        </p>
      </PageSection>

      <PageSection title="Supporting Your Mission with Financial Expertise">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Charities and not-for-profit organisations play a vital role in society, but they also face unique financial and regulatory challenges. At ProTaxes, we are committed to supporting these organisations by providing expert accounting, assurance, and advisory services tailored to the specific requirements of the third sector.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team understands the importance of transparency, accountability, and effective governance in the not-for-profit world. We help you manage your finances efficiently, comply with Charity Commission and other regulatory body requirements, and demonstrate your impact to stakeholders.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Charity and Community Work" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="Our Services for the Not-for-Profit Sector:" className="bg-gray-50">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
          <ListItem><strong>Charity Accounts Preparation:</strong> Compliance with SORP (Statement of Recommended Practice) and relevant accounting standards.</ListItem>
          <ListItem><strong>Independent Examination & Audit:</strong> Providing assurance on your financial statements, tailored to your charity's size and requirements.</ListItem>
          <ListItem><strong>Gift Aid Claims & Optimisation:</strong> Maximising income from Gift Aid donations.</ListItem>
          <ListItem><strong>VAT Advice for Charities:</strong> Navigating complex VAT rules, including partial exemption and reliefs.</ListItem>
          <ListItem><strong>Fund Accounting & Restricted Funds Management:</strong> Ensuring proper tracking and reporting of different fund types.</ListItem>
          <ListItem><strong>Trustee Training & Support:</strong> Guidance on financial responsibilities and governance best practices.</ListItem>
          <ListItem><strong>Risk Management:</strong> Helping trustees identify and manage financial and operational risks.</ListItem>
          <ListItem><strong>Internal Controls Review:</strong> Assessing and improving financial systems and controls.</ListItem>
          <ListItem><strong>Budgeting & Forecasting:</strong> Assisting with financial planning and sustainability.</ListItem>
          <ListItem><strong>Charity Registration & Formation:</strong> Support for setting up new charities or social enterprises.</ListItem>
          <ListItem><strong>Trading Subsidiaries:</strong> Advice on setting up and managing trading arms of charities.</ListItem>
          <ListItem><strong>Payroll Services:</strong> For charity employees, including compliance with relevant regulations.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Why Charities Choose ProTaxes:">
        <p className="text-gray-700 leading-relaxed mb-6">
          ProTaxes is a trusted partner for the not-for-profit sector because:
        </p>
        <ul className="space-y-3 text-gray-700">
          <ListItem><strong>Sector Specialism:</strong> Deep understanding of charity accounting, SORP, and regulatory requirements.</ListItem>
          <ListItem><strong>Commitment to Your Mission:</strong> We are passionate about supporting organisations that make a difference.</ListItem>
          <ListItem><strong>Pragmatic and Cost-Effective Solutions:</strong> We provide value for money and practical advice.</ListItem>
          <ListItem><strong>Governance Focus:</strong> We help strengthen your financial governance and accountability.</ListItem>
          <ListItem><strong>Accessible and Supportive Team:</strong> We work collaboratively with trustees and management.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Empowering Your Organisation's Impact" className="bg-brand-gold-light">
        <p className="text-gray-700 leading-relaxed mb-6 text-center">
          Ensure your charity or not-for-profit organisation has robust financial management. Contact ProTaxes today for a consultation tailored to your specific needs.
        </p>
        <div className="text-center">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Charity & Not-for-Profit Enquiry
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default CharitiesNotForProfitPage;
