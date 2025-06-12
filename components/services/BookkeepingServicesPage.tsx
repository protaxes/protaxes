
import React from 'react';

// Re-using PageSection and ListItem components
const PageSection: React.FC<{ title?: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
  <section className={`py-8 md:py-12 ${className}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {title && <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-6 md:mb-8 text-center md:text-left">{title}</h2>}
      {children}
    </div>
  </section>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start mb-2">
    <svg className="w-5 h-5 text-brand-gold mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    </svg>
    <span>{children}</span>
  </li>
);

const BookkeepingServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Bookkeeping Services</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Accurate and efficient bookkeeping solutions from ProTaxes to keep your business finances organised and compliant.
        </p>
      </PageSection>

      <PageSection title="The Foundation of Financial Control">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Accurate bookkeeping is the cornerstone of sound financial management for any business. It provides a clear picture of your financial health, enables informed decision-making, and ensures you meet your legal obligations. At ProTaxes, we offer professional bookkeeping services tailored to businesses of all sizes, from sole traders to limited companies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team of experienced bookkeepers can manage your day-to-day financial record-keeping, allowing you to focus on running and growing your business. We utilize modern cloud accounting software like Xero, QuickBooks, and Sage, providing you with real-time access to your financial data.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bookkeeping Services" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="Our Bookkeeping Services Cover:" className="bg-gray-50">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
          <ListItem>Recording all sales and purchase invoices.</ListItem>
          <ListItem>Bank reconciliation and credit card reconciliation.</ListItem>
          <ListItem>Managing petty cash.</ListItem>
          <ListItem>Maintaining sales and purchase ledgers.</ListItem>
          <ListItem>Maintaining nominal ledger.</ListItem>
          <ListItem>Preparation and submission of VAT returns (if applicable).</ListItem>
          <ListItem>Credit control and debt chasing (optional).</ListItem>
          <ListItem>Preparation of management accounts (monthly or quarterly).</ListItem>
          <ListItem>Cash flow forecasting.</ListItem>
          <ListItem>Year-end accounts preparation support.</ListItem>
          <ListItem>Liaison with your accountant (if we are not also your accountants).</ListItem>
          <ListItem>Cloud accounting software setup and training.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Benefits of Outsourcing Your Bookkeeping to ProTaxes:">
        <ul className="space-y-3 text-gray-700">
          <ListItem><strong>Accuracy and Compliance:</strong> Ensure your financial records are accurate and comply with legal requirements.</ListItem>
          <ListItem><strong>Time-Saving:</strong> Free up your time to concentrate on core business activities.</ListItem>
          <ListItem><strong>Cost-Effective:</strong> Often more affordable than hiring an in-house bookkeeper.</ListItem>
          <ListItem><strong>Expertise:</strong> Access to professional bookkeepers with up-to-date knowledge.</ListItem>
          <ListItem><strong>Improved Cash Flow Management:</strong> Better visibility of your income and expenses.</ListItem>
          <ListItem><strong>Informed Decisions:</strong> Reliable financial data to support your business strategy.</ListItem>
          <ListItem><strong>Scalability:</strong> Our services can adapt as your business grows.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Get Your Books in Order with ProTaxes" className="bg-brand-gold-light">
        <p className="text-gray-700 leading-relaxed mb-6">
          Take the stress out of bookkeeping. Contact ProTaxes today for a free consultation to discuss how our professional bookkeeping services can benefit your business.
        </p>
        <div className="text-center">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Request a Bookkeeping Quote
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default BookkeepingServicesPage;
