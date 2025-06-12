
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

const CisTaxReturnsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">CIS Tax Returns & Refunds</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Specialist Construction Industry Scheme (CIS) services from ProTaxes for contractors and subcontractors. Ensure compliance and maximise your CIS tax refunds.
        </p>
      </PageSection>

      <PageSection title="Navigating the Construction Industry Scheme (CIS)">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Construction Industry Scheme (CIS) sets out specific rules for payments made by contractors to subcontractors for construction work. It can be complex, and non-compliance can lead to penalties. ProTaxes offers expert CIS services for both contractors and subcontractors to ensure you meet all HMRC requirements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For subcontractors, CIS deductions often result in overpaid tax throughout the year. We specialise in helping subcontractors claim back their CIS tax refunds efficiently. For contractors, we ensure you correctly verify subcontractors and make the right deductions and monthly returns.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Construction Industry Scheme" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="Services for Subcontractors:" className="bg-gray-50">
        <ul className="space-y-3 text-gray-700">
          <ListItem>Registering you for Self-Assessment and CIS with HMRC.</ListItem>
          <ListItem>Reviewing your income and CIS deductions suffered.</ListItem>
          <ListItem>Identifying and claiming all allowable business expenses to reduce your overall tax liability.</ListItem>
          <ListItem>Preparing and filing your annual Self-Assessment tax return.</ListItem>
          <ListItem>Calculating and claiming your CIS tax refund from HMRC.</ListItem>
          <ListItem>Advising on record-keeping for CIS purposes.</ListItem>
          <ListItem>Assistance with applying for Gross Payment Status (if eligible).</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Services for Contractors:">
        <ul className="space-y-3 text-gray-700">
          <ListItem>Registering your business as a contractor under CIS.</ListItem>
          <ListItem>Verifying subcontractors with HMRC.</ListItem>
          <ListItem>Calculating the correct CIS deductions from payments to subcontractors.</ListItem>
          <ListItem>Providing deduction statements to subcontractors.</ListItem>
          <ListItem>Preparing and submitting monthly CIS returns (CIS300) to HMRC.</ListItem>
          <ListItem>Advising on compliance with all CIS regulations.</ListItem>
          <ListItem>Assistance with HMRC CIS enquiries.</ListItem>
        </ul>
      </PageSection>

       <PageSection title="Why Choose ProTaxes for CIS?" className="bg-brand-gold-light">
        <div className="space-y-4 text-gray-700">
            <p><strong>CIS Specialists:</strong> We have in-depth knowledge of the Construction Industry Scheme.</p>
            <p><strong>Maximise Refunds:</strong> For subcontractors, we work to ensure you get the maximum possible tax refund.</p>
            <p><strong>Compliance for Contractors:</strong> We help contractors stay compliant and avoid penalties.</p>
            <p><strong>Efficient Service:</strong> We streamline the process for both subcontractors and contractors.</p>
            <p><strong>Clear Communication:</strong> We explain CIS rules in plain English and keep you informed.</p>
        </div>
        <div className="text-center mt-8">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Get CIS Advice or Claim Your Refund
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default CisTaxReturnsPage;
