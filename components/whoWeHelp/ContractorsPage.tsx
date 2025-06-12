
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

const ContractorsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Accounting & Tax for Contractors</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          ProTaxes offers specialised financial and tax services for independent contractors and freelancers, helping you navigate IR35, optimise earnings, and ensure compliance.
        </p>
      </PageSection>

      <PageSection title="Supporting Your Contracting Career">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Contracting offers flexibility and rewarding opportunities, but it also comes with unique financial and tax considerations. At ProTaxes, we understand the specific needs of contractors and freelancers across various industries. Our expert team provides tailored advice to help you manage your finances efficiently, comply with complex legislation like IR35 (off-payroll working rules), and maximise your take-home pay.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you operate as a sole trader, through your own limited company (Personal Service Company - PSC), or via an umbrella company, we offer solutions designed for your way of working.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Contractor working on laptop" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="Our Contractor Services Include:" className="bg-gray-50">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
          <ListItem><strong>Limited Company (PSC) Formation & Management:</strong> Setup, accounts, corporation tax, and director payroll.</ListItem>
          <ListItem><strong>IR35 Advice & Contract Reviews:</strong> Helping you understand your IR35 status and its implications.</ListItem>
          <ListItem><strong>Self-Assessment Tax Returns:</strong> For sole trader contractors or directors of PSCs.</ListItem>
          <ListItem><strong>Bookkeeping & Cloud Accounting:</strong> Streamlined record-keeping using Xero, QuickBooks, etc.</ListItem>
          <ListItem><strong>VAT Registration & Returns:</strong> Advice on flat rate schemes and MTD compliance.</ListItem>
          <ListItem><strong>Expense Claims Optimisation:</strong> Ensuring you claim all allowable business expenses.</ListItem>
          <ListItem><strong>Dividend Planning:</strong> Tax-efficient profit extraction for PSC directors.</ListItem>
          <ListItem><strong>Payroll Services for PSCs:</strong> Managing director salaries and RTI submissions.</ListItem>
          <ListItem><strong>Pensions Advice for Contractors:</strong> Guidance on tax-efficient pension contributions.</ListItem>
          <ListItem><strong>Dealing with HMRC Enquiries:</strong> Support and representation if needed.</ListItem>
          <ListItem><strong>Advice on Umbrella Company Options:</strong> If this is a more suitable route.</ListItem>
          <ListItem><strong>CIS Returns & Refunds:</strong> For contractors in the construction industry.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Why Contractors Choose ProTaxes:">
        <p className="text-gray-700 leading-relaxed mb-6">
          ProTaxes is the preferred choice for many contractors because:
        </p>
        <ul className="space-y-3 text-gray-700">
          <ListItem><strong>Specialist Contractor Accountants:</strong> We have in-depth knowledge of contractor-specific issues.</ListItem>
          <ListItem><strong>IR35 Expertise:</strong> Clear and practical advice on navigating off-payroll working rules.</ListItem>
          <ListItem><strong>Fixed Fee Packages:</strong> Transparent pricing with no hidden costs, tailored to contractor needs.</ListItem>
          <ListItem><strong>Proactive Tax Planning:</strong> We help you structure your affairs tax-efficiently.</ListItem>
          <ListItem><strong>Responsive Service:</strong> Quick turnaround times and accessible advisors.</ListItem>
          <ListItem><strong>Technology Driven:</strong> Utilising modern accounting tools for your convenience.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Focus on Your Contracts, We'll Handle the Finances" className="bg-brand-gold-light">
        <p className="text-gray-700 leading-relaxed mb-6 text-center">
          Maximise your contracting potential with ProTaxes. Contact us today for a free consultation to discuss your specific requirements and how we can support you.
        </p>
        <div className="text-center">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Contractor Accounting Enquiry
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default ContractorsPage;
