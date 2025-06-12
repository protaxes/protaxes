
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

const VatReturnsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">VAT Returns Services</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          ProTaxes provides expert VAT advice, registration, and accurate VAT return preparation and submission to keep your business compliant with HMRC.
        </p>
      </PageSection>

      <PageSection title="Navigating VAT Complexity with Ease">
         <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Value Added Tax (VAT) is one of the most complex tax regimes businesses face. The rules are constantly changing, and errors in VAT returns can lead to significant penalties from HMRC. At ProTaxes, our VAT specialists offer comprehensive services to help your business manage its VAT obligations effectively and efficiently.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you need assistance with VAT registration, choosing the right VAT scheme, preparing and submitting your VAT returns, or require advice on complex VAT transactions, our team is here to help. We ensure your VAT affairs are handled correctly, minimising your risk and potentially identifying VAT saving opportunities.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="VAT Returns Consultation" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="Our VAT Services Include:" className="bg-gray-50">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
          <ListItem>VAT registration and de-registration.</ListItem>
          <ListItem>Advice on the most appropriate VAT scheme for your business (e.g., standard, cash accounting, flat rate).</ListItem>
          <ListItem>Preparation and online submission of quarterly or monthly VAT returns.</ListItem>
          <ListItem>Ensuring compliance with Making Tax Digital (MTD) for VAT requirements.</ListItem>
          <ListItem>Reconciliation of VAT control accounts.</ListItem>
          <ListItem>Advice on VAT implications of specific transactions, including international trade.</ListItem>
          <ListItem>VAT planning and advice to optimise your VAT position.</ListItem>
          <ListItem>Dealing with HMRC VAT enquiries and investigations.</ListItem>
          <ListItem>VAT health checks to identify potential issues or savings.</ListItem>
          <ListItem>Support with correcting VAT errors from previous periods.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Why ProTaxes for VAT Services?">
        <ul className="space-y-3 text-gray-700">
          <ListItem><strong>Expert Knowledge:</strong> Our VAT specialists possess in-depth understanding of current VAT legislation.</ListItem>
          <ListItem><strong>Accuracy & Compliance:</strong> We ensure your VAT returns are accurate and submitted on time, avoiding penalties.</ListItem>
          <ListItem><strong>Risk Minimisation:</strong> Proactive advice to help you manage VAT risks effectively.</ListItem>
          <ListItem><strong>Efficiency:</strong> We streamline the VAT return process, saving you time and administrative burden.</ListItem>
          <ListItem><strong>Potential Savings:</strong> We explore opportunities for VAT recovery and efficient VAT structuring.</ListItem>
          <ListItem><strong>MTD Ready:</strong> We are fully equipped to handle Making Tax Digital for VAT.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Simplify Your VAT with ProTaxes" className="bg-brand-gold-light">
        <p className="text-gray-700 leading-relaxed mb-6">
          Don't let VAT complexities overwhelm you. Partner with ProTaxes for reliable and expert VAT services. Contact us today for a consultation.
        </p>
        <div className="text-center">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Get Expert VAT Advice
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default VatReturnsPage;
