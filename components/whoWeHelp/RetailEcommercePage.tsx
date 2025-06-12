
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

const RetailEcommercePage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Accounting for Retail & E-commerce</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          ProTaxes offers specialist financial and tax services for retailers, online sellers, and e-commerce businesses, helping you thrive in a competitive market.
        </p>
      </PageSection>

      <PageSection title="Driving Success in the Digital and Physical Marketplace">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The retail and e-commerce sector is dynamic, fast-paced, and highly competitive. Whether you operate a brick-and-mortar store, an online shop, or a multi-channel business, effective financial management is crucial for success. ProTaxes provides expert accounting, tax, and advisory services tailored to the unique needs of retail and e-commerce businesses.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team understands the challenges you face, from managing inventory and cash flow to navigating complex VAT rules for online sales and international trade. We help you stay compliant, optimise profitability, and make informed decisions to grow your business.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="E-commerce Online Shopping" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="Our Services for Retail & E-commerce:" className="bg-gray-50">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
          <ListItem><strong>Inventory Management & Accounting:</strong> Stock valuation, cost of goods sold, and inventory system advice.</ListItem>
          <ListItem><strong>Sales Tax & VAT Compliance:</strong> Including MTD for VAT, distance selling rules, and international VAT for e-commerce.</ListItem>
          <ListItem><strong>Payment Gateway Reconciliation:</strong> Matching sales from platforms like Shopify, Amazon, Stripe, PayPal with bank receipts.</ListItem>
          <ListItem><strong>E-commerce Platform Integration:</strong> Linking accounting software (Xero, QuickBooks) with your online store.</ListItem>
          <ListItem><strong>Cash Flow Management:</strong> Critical for managing stock levels and supplier payments.</ListItem>
          <ListItem><strong>Profitability Analysis:</strong> By product, channel, or customer segment.</ListItem>
          <ListItem><strong>Management Accounts:</strong> Regular reporting to track performance and KPIs.</ListItem>
          <ListItem><strong>Bookkeeping Services:</strong> Tailored to the high transaction volumes of retail.</ListItem>
          <ListItem><strong>Corporation Tax & Self-Assessment:</strong> For retail businesses operating as companies or sole traders.</ListItem>
          <ListItem><strong>Business Advisory:</strong> Pricing strategies, cost control, and expansion planning.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Why Retail & E-commerce Businesses Choose ProTaxes:">
        <p className="text-gray-700 leading-relaxed mb-6">
          ProTaxes understands the retail landscape:
        </p>
        <ul className="space-y-3 text-gray-700">
          <ListItem><strong>Sector Expertise:</strong> Knowledge of retail operations, e-commerce platforms, and online sales tax complexities.</ListItem>
          <ListItem><strong>Technology Integration:</strong> We help you leverage technology for efficient financial management.</ListItem>
          <ListItem><strong>Scalable Solutions:</strong> Our services grow with your business, from start-up to established retailer.</ListItem>
          <ListItem><strong>Focus on Profitability:</strong> We provide insights to help you improve margins and control costs.</ListItem>
          <ListItem><strong>Proactive Support:</strong> Keeping you informed of relevant tax changes and opportunities.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Partner with ProTaxes for Retail Success" className="bg-brand-gold-light">
        <p className="text-gray-700 leading-relaxed mb-6 text-center">
          Navigate the complexities of retail and e-commerce finance with confidence. Contact ProTaxes today for a consultation on how we can support your business.
        </p>
        <div className="text-center">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Retail & E-commerce Enquiry
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default RetailEcommercePage;
