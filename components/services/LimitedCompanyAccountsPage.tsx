
import React from 'react';

// Re-using PageSection and ListItem components for consistency (assuming they are in a shared utils or defined in each file)
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

const LimitedCompanyAccountsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Limited Company Accounts & Tax</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Comprehensive accounting and corporation tax services for limited companies by ProTaxes. We ensure compliance and help you grow your business.
        </p>
      </PageSection>

      <PageSection title="Streamline Your Company's Finances">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Running a limited company comes with significant financial and administrative responsibilities. At ProTaxes, we provide a full suite of accounting and tax services designed to keep your company compliant with Companies House and HMRC regulations, while also providing valuable insights to drive your business forward.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our experienced accountants work closely with you to understand your business, offering tailored advice and support. From year-end accounts preparation to corporation tax planning and submission, we handle the complexities so you can focus on your core operations.
            </p>
          </div>
           <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Limited Company Accounts Meeting" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="Our Limited Company Services Include:" className="bg-gray-50">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
          <ListItem>Preparation of statutory year-end accounts for submission to Companies House.</ListItem>
          <ListItem>Preparation of company tax returns (CT600) for submission to HMRC.</ListItem>
          <ListItem>Calculation of corporation tax liabilities and advice on payment deadlines.</ListItem>
          <ListItem>Strategic corporation tax planning to minimise liabilities legally.</ListItem>
          <ListItem>Bookkeeping services tailored to your company's needs.</ListItem>
          <ListItem>VAT registration, returns, and advice (if applicable).</ListItem>
          <ListItem>Payroll services for your employees.</ListItem>
          <ListItem>Management accounts to help you monitor performance and make informed decisions.</ListItem>
          <ListItem>Company secretarial services, including statutory filings and record maintenance.</ListItem>
          <ListItem>Advice on dividend planning and director remuneration.</ListItem>
          <ListItem>Business growth advice and financial forecasting.</ListItem>
          <ListItem>Support with HMRC inquiries and investigations.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Benefits of Choosing ProTaxes">
        <ul className="space-y-3 text-gray-700">
          <ListItem><strong>Compliance Peace of Mind:</strong> We ensure your accounts and tax returns are accurate and filed on time, avoiding penalties.</ListItem>
          <ListItem><strong>Tax Efficiency:</strong> Our proactive tax planning helps identify opportunities to reduce your corporation tax bill.</ListItem>
          <ListItem><strong>Time-Saving:</strong> Delegate your accounting and tax burdens to us, freeing up your valuable time.</ListItem>
          <ListItem><strong>Expert Advice:</strong> Access to experienced accountants who understand the challenges and opportunities for limited companies.</ListItem>
          <ListItem><strong>Clarity and Insight:</strong> We provide clear financial reports and explain what the numbers mean for your business.</ListItem>
          <ListItem><strong>Fixed Fees:</strong> Transparent pricing with no hidden surprises, helping you budget effectively.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Partner with ProTaxes for Your Company's Success" className="bg-brand-gold-light">
        <p className="text-gray-700 leading-relaxed mb-6">
          Whether you're a new start-up or an established business, ProTaxes offers the expertise and support you need to manage your limited company's finances effectively. We're committed to helping your business thrive.
        </p>
        <div className="text-center">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Discuss Your Company Accounts
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default LimitedCompanyAccountsPage;
