
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

const LandlordsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Property Tax & Accounting for Landlords</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          ProTaxes provides specialist advice for property investors and landlords, helping you manage your portfolio tax-efficiently and comply with all regulations.
        </p>
      </PageSection>

      <PageSection title="Maximising Your Property Investment Returns">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Investing in property can be a lucrative venture, but it comes with a complex web of tax rules and compliance obligations. At ProTaxes, our specialist landlord accountants provide expert advice to help you navigate the intricacies of property tax, optimise your returns, and ensure you meet all legal requirements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you are a first-time landlord, have a growing portfolio of buy-to-let properties, or invest in Houses in Multiple Occupation (HMOs) or commercial property, we offer tailored solutions to meet your specific needs.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Rental Properties" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="Our Landlord & Property Tax Services:" className="bg-gray-50">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
          <ListItem><strong>Rental Income Accounts:</strong> Preparation of rental accounts for Self-Assessment tax returns.</ListItem>
          <ListItem><strong>Allowable Expense Claims:</strong> Ensuring all deductible expenses are claimed to minimise tax (e.g., mortgage interest relief, repairs, agent fees).</ListItem>
          <ListItem><strong>Capital Gains Tax (CGT) Planning:</strong> Advice on CGT implications of selling property and available reliefs.</ListItem>
          <ListItem><strong>Stamp Duty Land Tax (SDLT) Advice:</strong> Guidance on SDLT for property purchases, including higher rates for additional properties.</ListItem>
          <ListItem><strong>Incorporation Advice:</strong> Assessing whether holding property in a limited company is beneficial for you.</ListItem>
          <ListItem><strong>Inheritance Tax (IHT) Planning:</strong> Strategies for passing on property wealth tax-efficiently.</ListItem>
          <ListItem><strong>Making Tax Digital (MTD) for Income Tax:</strong> Preparing you for the upcoming changes for landlords.</ListItem>
          <ListItem><strong>VAT on Property:</strong> Advice for commercial property transactions and conversions.</ListItem>
          <ListItem><strong>Non-Resident Landlord Scheme:</strong> Assistance for landlords living overseas with UK property.</ListItem>
          <ListItem><strong>HMO Licensing & Tax:</strong> Specific advice for Houses in Multiple Occupation.</ListItem>
          <ListItem><strong>Furnished Holiday Lettings (FHLs):</strong> Understanding the unique tax rules for FHLs.</ListItem>
          <ListItem><strong>Property Development Tax:</strong> Guidance for property developers.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Why Landlords Trust ProTaxes:">
        <p className="text-gray-700 leading-relaxed mb-6">
          ProTaxes offers landlords:
        </p>
        <ul className="space-y-3 text-gray-700">
          <ListItem><strong>Specialist Knowledge:</strong> Deep understanding of the ever-changing property tax landscape.</ListItem>
          <ListItem><strong>Proactive Tax Planning:</strong> We help you structure your investments for optimal tax efficiency.</ListItem>
          <ListItem><strong>Clear and Practical Advice:</strong> We explain complex tax rules in an easy-to-understand manner.</ListItem>
          <ListItem><strong>Compliance Assurance:</strong> Ensuring you meet all HMRC deadlines and requirements.</ListItem>
          <ListItem><strong>Portfolio Management Support:</strong> Helping you make informed decisions about your property investments.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Secure Your Property Investment Future" className="bg-brand-gold-light">
        <p className="text-gray-700 leading-relaxed mb-6 text-center">
          Whether you're looking to grow your property portfolio or manage existing investments more effectively, ProTaxes is here to help. Contact us for a consultation.
        </p>
        <div className="text-center">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Landlord & Property Tax Enquiry
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default LandlordsPage;
