
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

const LargeCorporatesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Financial Services for Large Corporates</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          ProTaxes offers strategic financial, accounting, and tax advisory services to support the complex needs of large corporations and established businesses.
        </p>
      </PageSection>

      <PageSection title="Navigating Corporate Complexity">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Large corporations operate in a dynamic and often challenging environment, facing intricate regulatory landscapes, complex transactions, and the need for robust financial governance. ProTaxes provides high-level expertise and tailored solutions to help large businesses manage their financial obligations, optimise tax strategies, and support strategic objectives.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team has experience working with established businesses, offering a depth of knowledge in areas such as corporate tax, financial reporting, risk management, and international operations. We act as a strategic partner, providing insights that go beyond compliance to add real value to your organisation.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Corporate Business Strategy" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="Specialised Services for Corporates:" className="bg-gray-50">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
          <ListItem><strong>Advanced Corporation Tax Planning:</strong> Including group relief, R&D tax credits, patent box, and capital allowances.</ListItem>
          <ListItem><strong>Financial Reporting & Compliance:</strong> Preparation of complex statutory accounts, adherence to IFRS or UK GAAP.</ListItem>
          <ListItem><strong>Audit Support & Liaison:</strong> Working seamlessly with your internal or external auditors.</ListItem>
          <ListItem><strong>VAT & Indirect Tax Advisory:</strong> Complex VAT issues, partial exemption, international VAT.</ListItem>
          <ListItem><strong>Transfer Pricing:</strong> Ensuring intercompany transactions are at arm's length and appropriately documented.</ListItem>
          <ListItem><strong>Mergers & Acquisitions (M&A) Support:</strong> Due diligence, tax structuring for deals.</ListItem>
          <ListItem><strong>Corporate Restructuring:</strong> Tax implications of reorganisations, demergers, and reconstructions.</ListItem>
          <ListItem><strong>International Tax:</strong> Cross-border transactions, withholding taxes, double tax treaty advice.</ListItem>
          <ListItem><strong>Employee Share Schemes:</strong> Design and implementation of tax-efficient incentive plans.</ListItem>
          <ListItem><strong>Risk Management & Internal Controls:</strong> Advice on strengthening financial governance.</ListItem>
          <ListItem><strong>Outsourced Financial Functions:</strong> Providing support for specific financial roles or projects.</ListItem>
          <ListItem><strong>Sustainability & ESG Reporting Guidance:</strong> Emerging area of corporate reporting.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Strategic Partnership with ProTaxes:">
        <p className="text-gray-700 leading-relaxed mb-6">
          Choosing ProTaxes means partnering with a firm that understands the pressures and priorities of large organisations. We offer:
        </p>
        <ul className="space-y-3 text-gray-700">
          <ListItem><strong>Technical Excellence:</strong> Access to highly skilled professionals with deep expertise.</ListItem>
          <ListItem><strong>Commercial Acumen:</strong> We understand the business context behind the numbers.</ListItem>
          <ListItem><strong>Responsive Service:</strong> Agile and timely support to meet your deadlines.</ListItem>
          <ListItem><strong>Confidentiality and Integrity:</strong> Upholding the highest professional standards.</ListItem>
          <ListItem><strong>Collaborative Approach:</strong> Working closely with your in-house finance teams and other advisors.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Elevate Your Corporate Financial Strategy" className="bg-brand-gold-light">
        <p className="text-gray-700 leading-relaxed mb-6 text-center">
          For expert financial and tax advisory services tailored to the needs of your large corporation, contact ProTaxes. Let's discuss how we can contribute to your continued success.
        </p>
        <div className="text-center">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Corporate Advisory Enquiry
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default LargeCorporatesPage;
