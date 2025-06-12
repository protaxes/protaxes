
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

const TechnologySectorPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Accounting for the Technology Sector</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          ProTaxes offers specialist financial and tax services for tech start-ups, SaaS companies, software developers, and IT consultancies.
        </p>
      </PageSection>

      <PageSection title="Fueling Your Technological Innovation">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The technology sector is fast-paced, innovative, and constantly evolving. At ProTaxes, we provide expert accounting, tax, and advisory services tailored to the unique needs of technology businesses. Whether you're a budding tech start-up, a growing SaaS provider, or an established IT consultancy, we can help you navigate the financial complexities and maximise your growth potential.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team understands the specific challenges faced by tech companies, including R&D investment, intellectual property, international expansion, and accessing funding. We stay ahead of industry trends and tax changes to provide proactive and relevant advice.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Technology Company Meeting" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="Our Services for Technology Businesses:" className="bg-gray-50">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
          <ListItem><strong>R&D Tax Credits:</strong> Maximising claims for research and development expenditure.</ListItem>
          <ListItem><strong>Patent Box Regime:</strong> Advice on reducing corporation tax on profits from patented inventions.</ListItem>
          <ListItem><strong>SaaS Accounting:</strong> Revenue recognition, deferred income, and key SaaS metrics.</ListItem>
          <ListItem><strong>Intellectual Property (IP) Valuation & Tax:</strong> Guidance on tax implications of IP.</ListItem>
          <ListItem><strong>Funding Support:</strong> Assistance with SEIS/EIS schemes, grant applications, and investor readiness.</ListItem>
          <ListItem><strong>Employee Share Option Schemes (ESOS):</strong> Designing tax-efficient incentive plans for tech talent.</ListItem>
          <ListItem><strong>International Tax Structuring:</strong> For companies expanding globally or with overseas operations.</ListItem>
          <ListItem><strong>Transfer Pricing:</strong> For intercompany transactions in multinational tech groups.</ListItem>
          <ListItem><strong>VAT on Digital Services:</strong> Compliance for cross-border digital sales.</ListItem>
          <ListItem><strong>Outsourced CFO Services:</strong> Strategic financial guidance for growing tech companies.</ListItem>
          <ListItem><strong>Business Valuations:</strong> For funding rounds, mergers, acquisitions, or exits.</ListItem>
          <ListItem><strong>Cloud Accounting Solutions:</strong> Implementation and optimisation of systems like Xero and QuickBooks.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Why Tech Companies Choose ProTaxes:">
        <p className="text-gray-700 leading-relaxed mb-6">
          ProTaxes is the ideal partner for tech businesses due to our:
        </p>
        <ul className="space-y-3 text-gray-700">
          <ListItem><strong>Sector Specialism:</strong> Deep understanding of the technology industry's unique financial landscape.</ListItem>
          <ListItem><strong>Focus on Innovation:</strong> Expertise in R&D tax credits and other tech-specific incentives.</ListItem>
          <ListItem><strong>Growth-Oriented Advice:</strong> We support your scaling journey with strategic financial planning.</ListItem>
          <ListItem><strong>Agile and Responsive Service:</strong> We match the fast pace of the tech sector.</ListItem>
          <ListItem><strong>Network and Connections:</strong> Access to our network within the tech ecosystem.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Innovate and Grow with ProTaxes" className="bg-brand-gold-light">
        <p className="text-gray-700 leading-relaxed mb-6 text-center">
          Let ProTaxes provide the expert financial backbone for your technology venture. Contact us today for a consultation to discuss how we can help your tech business succeed.
        </p>
        <div className="text-center">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Tech Sector Accounting Enquiry
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default TechnologySectorPage;
