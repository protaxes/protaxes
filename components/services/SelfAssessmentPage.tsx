
import React from 'react';

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

const SelfAssessmentPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Self-Assessment Tax Returns</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Expert handling of your personal tax affairs by ProTaxes, ensuring compliance and maximising your tax efficiency.
        </p>
      </PageSection>

      <PageSection title="Hassle-Free Self-Assessment Services">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Filing a Self-Assessment tax return can be a daunting and time-consuming task. At ProTaxes, our dedicated team simplifies this process for individuals across various sectors, including sole traders, company directors, landlords, and high-net-worth individuals. We ensure your tax return is accurate, complete, and submitted to HMRC on time, avoiding any potential penalties.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our experts stay up-to-date with the latest tax legislation, identifying all eligible allowances and reliefs to minimise your tax liability legally. We provide clear explanations and proactive advice, giving you peace of mind and more time to focus on what matters to you.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/6863259/pexels-photo-6863259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Self-Assessment Tax Return Consultation" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="Who Needs to File a Self-Assessment?" className="bg-gray-50">
        <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
          You typically need to send a Self-Assessment tax return if you are:
        </p>
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
          <ListItem>Self-employed as a sole trader and earned more than £1,000.</ListItem>
          <ListItem>A partner in a business partnership.</ListItem>
          <ListItem>A company director (unless all income is PAYE and there are no other declarations).</ListItem>
          <ListItem>Earning £100,000 or more annually.</ListItem>
          <ListItem>Receiving income from renting out property.</ListItem>
          <ListItem>Receiving other untaxed income, such as tips or commission.</ListItem>
          <ListItem>Claiming expenses or allowances.</ListItem>
          <ListItem>Liable for Capital Gains Tax.</ListItem>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-6 max-w-3xl">
          If you're unsure whether you need to file, ProTaxes can provide clarity and guidance.
        </p>
      </PageSection>

      <PageSection title="Our Self-Assessment Service Includes:">
        <ul className="space-y-3 text-gray-700">
          <ListItem>Registration with HMRC for Self-Assessment if required.</ListItem>
          <ListItem>Comprehensive review of your income and expenditure to ensure all declarable income is included and all allowable expenses are claimed.</ListItem>
          <ListItem>Calculation of your tax liability or any tax refund due.</ListItem>
          <ListItem>Preparation and submission of your tax return to HMRC online.</ListItem>
          <ListItem>Advising you on the tax payments due and their deadlines.</ListItem>
          <ListItem>Dealing with HMRC on your behalf for any queries related to your tax return.</ListItem>
          <ListItem>Proactive tax planning advice for future tax years.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Why Choose ProTaxes for Your Self-Assessment?" className="bg-brand-gold-light">
        <div className="space-y-4 text-gray-700">
            <p><strong>Expertise:</strong> Our qualified accountants have extensive experience in personal taxation.</p>
            <p><strong>Accuracy:</strong> We meticulously prepare your returns to ensure accuracy and compliance.</p>
            <p><strong>Efficiency:</strong> Save time and avoid stress by letting us handle the complexities.</p>
            <p><strong>Value:</strong> We aim to identify all possible tax savings, potentially reducing your tax bill.</p>
            <p><strong>Support:</strong> We offer ongoing support and advice throughout the year, not just at tax return time.</p>
        </div>
        <div className="text-center mt-8">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Contact Us for Self-Assessment Help
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default SelfAssessmentPage;
