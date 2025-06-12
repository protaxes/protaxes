
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

const BusinessStartUpsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Support for Business Start-ups</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          ProTaxes provides comprehensive accounting and tax support to help your new business thrive from day one. Let us guide you through the critical early stages.
        </p>
      </PageSection>

      <PageSection title="Laying the Foundations for Success">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Starting a new business is an exciting and challenging venture. At ProTaxes, we specialise in helping entrepreneurs navigate the complexities of launching and growing a new enterprise. We offer tailored advice and practical support to ensure you make informed decisions and establish a solid financial footing for your business.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From choosing the right business structure to setting up accounting systems and managing cash flow, our experienced team is here to assist you at every step. We aim to take the stress out of financial administration, allowing you to focus on developing your products, services, and customer base.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Business Start-up Planning" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="Our Start-up Services Include:" className="bg-gray-50">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
          <ListItem><strong>Business Structure Advice:</strong> Helping you choose between sole trader, partnership, LLP, or limited company.</ListItem>
          <ListItem><strong>Company Formation:</strong> Assistance with registering your limited company with Companies House.</ListItem>
          <ListItem><strong>HMRC Registrations:</strong> Ensuring you are registered for all relevant taxes (Self-Assessment, Corporation Tax, VAT, PAYE).</ListItem>
          <ListItem><strong>Business Plan Development:</strong> Support in creating a robust business plan, including financial forecasts.</ListItem>
          <ListItem><strong>Funding Advice:</strong> Guidance on various funding options, including start-up loans and grants.</ListItem>
          <ListItem><strong>Bank Account Setup:</strong> Advice on choosing and setting up a business bank account.</ListItem>
          <ListItem><strong>Accounting System Setup:</strong> Implementing cloud accounting software (e.g., Xero, QuickBooks) and providing training.</ListItem>
          <ListItem><strong>Bookkeeping Services:</strong> Taking care of your day-to-day financial records.</ListItem>
          <ListItem><strong>Cash Flow Management:</strong> Tools and advice to manage your cash flow effectively.</ListItem>
          <ListItem><strong>Payroll Services:</strong> Setting up and running payroll if you plan to employ staff.</ListItem>
          <ListItem><strong>Tax Planning:</strong> Early-stage tax planning to ensure efficiency from the outset.</ListItem>
          <ListItem><strong>Compliance Support:</strong> Ensuring you meet all statutory deadlines and requirements.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Why ProTaxes is Your Ideal Start-up Partner:">
        <p className="text-gray-700 leading-relaxed mb-6">
          We are passionate about helping new businesses succeed. Our team offers:
        </p>
        <ul className="space-y-3 text-gray-700">
          <ListItem><strong>Fixed Fee Packages:</strong> Transparent pricing tailored for start-ups, helping you manage your budget.</ListItem>
          <ListItem><strong>Accessible Expertise:</strong> Direct access to experienced accountants who understand start-up challenges.</ListItem>
          <ListItem><strong>Practical Advice:</strong> We provide clear, actionable advice, not just numbers.</ListItem>
          <ListItem><strong>Proactive Support:</strong> We anticipate your needs and offer timely guidance.</ListItem>
          <ListItem><strong>Long-Term Partnership:</strong> We aim to support your business as it grows and evolves.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Let's Build Your Business Together" className="bg-brand-gold-light">
        <p className="text-gray-700 leading-relaxed mb-6 text-center">
          Ready to turn your business idea into a reality? Contact ProTaxes today for a free initial consultation and find out how we can support your start-up journey.
        </p>
        <div className="text-center">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Discuss Your Start-up Needs
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default BusinessStartUpsPage;
