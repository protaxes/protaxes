
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

const SmesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Accounting & Tax for SMEs</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          ProTaxes provides tailored financial solutions for Small and Medium-sized Enterprises (SMEs) to drive growth, ensure compliance, and improve profitability.
        </p>
      </PageSection>

      <PageSection title="Empowering Your SME's Growth">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Small and Medium-sized Enterprises (SMEs) are the backbone of the economy, and at ProTaxes, we are dedicated to supporting their success. We understand the unique challenges and opportunities faced by SMEs, from managing cash flow and accessing finance to navigating complex tax regulations and planning for expansion.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team offers a comprehensive suite of accounting, tax, and advisory services designed specifically for SMEs. We work as your trusted financial partner, providing proactive advice and practical solutions to help your business achieve its full potential.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="SME Business Meeting" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="Comprehensive Services for SMEs:" className="bg-gray-50">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
          <ListItem><strong>Year-End Accounts:</strong> Preparation of statutory accounts for limited companies, partnerships, and sole traders.</ListItem>
          <ListItem><strong>Corporation Tax:</strong> Compliance, planning, and submission of CT600 returns.</ListItem>
          <ListItem><strong>Management Accounts:</strong> Regular financial reports to monitor performance and aid decision-making.</ListItem>
          <ListItem><strong>Bookkeeping & VAT:</strong> Efficient record-keeping and VAT return services, MTD compliant.</ListItem>
          <ListItem><strong>Payroll Services:</strong> Accurate and timely payroll processing, including auto-enrolment.</ListItem>
          <ListItem><strong>Cash Flow Management & Forecasting:</strong> Helping you maintain healthy cash flow.</ListItem>
          <ListItem><strong>Business Planning & Strategy:</strong> Support for growth strategies, budgeting, and forecasting.</ListItem>
          <ListItem><strong>Tax Planning:</strong> Proactive advice to minimise tax liabilities across all areas (income, corporation, VAT, CGT).</ListItem>
          <ListItem><strong>Access to Finance:</strong> Assistance in preparing information for loan applications or investment.</ListItem>
          <ListItem><strong>Cloud Accounting:</strong> Implementation and support for Xero, QuickBooks, Sage, etc.</ListItem>
          <ListItem><strong>Company Secretarial:</strong> Ensuring compliance with Companies House requirements.</ListItem>
          <ListItem><strong>Business Valuations:</strong> For sales, mergers, or internal purposes.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Why SMEs Choose ProTaxes:">
        <p className="text-gray-700 leading-relaxed mb-6">
          Partnering with ProTaxes gives your SME access to:
        </p>
        <ul className="space-y-3 text-gray-700">
          <ListItem><strong>Dedicated Support:</strong> A consistent point of contact who understands your business.</ListItem>
          <ListItem><strong>Pragmatic Advice:</strong> Solutions tailored to your specific industry and business goals.</ListItem>
          <ListItem><strong>Value for Money:</strong> Competitive fixed fees and a focus on delivering tangible benefits.</ListItem>
          <ListItem><strong>Growth Focus:</strong> We're not just about compliance; we help you identify opportunities for growth.</ListItem>
          <ListItem><strong>Technology Savvy:</strong> Leveraging the latest accounting technology for efficiency and insight.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Grow Your Business with ProTaxes" className="bg-brand-gold-light">
        <p className="text-gray-700 leading-relaxed mb-6 text-center">
          Let ProTaxes handle your financial complexities so you can concentrate on what you do best – running your business. Contact us today for a free consultation to explore how we can support your SME.
        </p>
        <div className="text-center">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Support for Your SME
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default SmesPage;
