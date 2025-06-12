
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

const TaxRebateClaimsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Tax Rebate Claims</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Are you due a tax refund? ProTaxes helps individuals and businesses identify and claim overpaid tax from HMRC.
        </p>
      </PageSection>

      <PageSection title="Maximise Your Tax Refund">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many taxpayers in the UK overpay tax each year without even realising it. This can happen for various reasons, such as being on an incorrect tax code, not claiming allowable work-related expenses, or changes in employment circumstances. At ProTaxes, we specialise in helping you identify if you've overpaid tax and guide you through the process of claiming your money back from HMRC.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our experienced tax team has a thorough understanding of the UK tax system and can quickly assess your situation to determine if you are eligible for a tax rebate. We handle all the paperwork and communication with HMRC, making the process simple and stress-free for you.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Tax Rebate Claim Consultation" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="Common Reasons for Tax Overpayment:" className="bg-gray-50">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
          <ListItem>Incorrect PAYE tax code.</ListItem>
          <ListItem>Not claiming allowable work-related expenses (e.g., uniforms, tools, mileage, professional subscriptions).</ListItem>
          <ListItem>Being employed for only part of a tax year.</ListItem>
          <ListItem>Having multiple jobs.</ListItem>
          <ListItem>CIS (Construction Industry Scheme) deductions for subcontractors.</ListItem>
          <ListItem>Redundancy payments that have been incorrectly taxed.</ListItem>
          <ListItem>Overpayment of tax on pension income.</ListItem>
          <ListItem>Gift Aid donations if you are a higher-rate taxpayer.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Our Tax Rebate Claim Process:">
        <ul className="space-y-3 text-gray-700">
          <ListItem><strong>Free Initial Assessment:</strong> We'll discuss your circumstances to see if you might be due a refund – no obligation.</ListItem>
          <ListItem><strong>Information Gathering:</strong> We'll guide you on the information and documents needed to support your claim.</ListItem>
          <ListItem><strong>Claim Calculation & Preparation:</strong> Our experts will calculate the potential rebate and prepare all necessary forms.</ListItem>
          <ListItem><strong>Submission to HMRC:</strong> We submit the claim to HMRC on your behalf and handle any queries.</ListItem>
          <ListItem><strong>Receive Your Rebate:</strong> Once approved, HMRC will issue the refund, typically directly to you or via us.</ListItem>
        </ul>
        <p className="text-gray-700 mt-4">We operate on a "No Win, No Fee" basis for many types of claims, meaning you only pay a fee if your claim is successful. (Terms and conditions apply and will be clearly explained).</p>
      </PageSection>

      <PageSection title="Why Use ProTaxes for Your Tax Rebate?" className="bg-brand-gold-light">
         <div className="space-y-4 text-gray-700">
            <p><strong>Specialist Knowledge:</strong> We are experts in tax legislation and HMRC procedures.</p>
            <p><strong>Maximise Your Claim:</strong> We ensure all eligible reliefs and expenses are included.</p>
            <p><strong>Hassle-Free Service:</strong> We do the hard work, saving you time and effort.</p>
            <p><strong>Fast & Efficient:</strong> We aim to process your claim as quickly as possible.</p>
            <p><strong>Transparent Fees:</strong> Our fee structure is clear and agreed upon upfront.</p>
        </div>
        <div className="text-center mt-8">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Check if You're Due a Tax Refund
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default TaxRebateClaimsPage;
