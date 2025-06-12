
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

const BusinessStartUpPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Business Start-up Services</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Turn your business idea into reality with expert guidance and support from ProTaxes. We help new businesses lay strong foundations for success.
        </p>
      </PageSection>

      <PageSection title="Launching Your New Venture with Confidence">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Starting a new business is an exciting journey, but it also comes with many challenges and crucial decisions. ProTaxes offers comprehensive business start-up services to guide you through every step, from initial concept to successful launch and beyond. We provide practical advice and hands-on support to help you avoid common pitfalls and set your business on the path to growth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team understands the unique needs of start-ups. We can help you choose the right business structure, develop a robust business plan, manage your finances effectively, and ensure you comply with all legal and tax obligations from day one.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Business Start-up Meeting" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="Our Business Start-up Support Includes:" className="bg-gray-50">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
          <ListItem>Advice on the most suitable business structure (sole trader, partnership, limited company).</ListItem>
          <ListItem>Company formation and registration with Companies House (for limited companies).</ListItem>
          <ListItem>Registration with HMRC for relevant taxes (e.g., Self-Assessment, Corporation Tax, VAT, PAYE).</ListItem>
          <ListItem>Assistance with opening a business bank account.</ListItem>
          <ListItem>Business plan development and review, including financial projections.</ListItem>
          <ListItem>Cash flow forecasting and budgeting advice.</ListItem>
          <ListItem>Advice on record-keeping requirements and setting up accounting systems (including cloud accounting software).</ListItem>
          <ListItem>Guidance on funding options and access to finance.</ListItem>
          <ListItem>Company secretarial services.</ListItem>
          <ListItem>Ongoing mentoring and support as your business grows.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Key Considerations for New Businesses:">
        <ul className="space-y-3 text-gray-700">
          <ListItem><strong>Business Plan:</strong> A solid business plan is crucial for direction and securing funding.</ListItem>
          <ListItem><strong>Legal Structure:</strong> Choosing the right structure impacts liability, tax, and administration.</ListItem>
          <ListItem><strong>Finance:</strong> Understanding your start-up costs and funding options is key.</ListItem>
          <ListItem><strong>Tax Obligations:</strong> Registering for the correct taxes and understanding your responsibilities.</ListItem>
          <ListItem><strong>Record Keeping:</strong> Implementing good bookkeeping practices from the start.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Let ProTaxes Be Your Start-up Partner" className="bg-brand-gold-light">
        <p className="text-gray-700 leading-relaxed mb-6">
          Embark on your entrepreneurial journey with the backing of experienced professionals. ProTaxes is committed to helping new businesses succeed. Contact us for a free initial consultation to discuss your business idea.
        </p>
        <div className="text-center">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Discuss Your Business Idea
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default BusinessStartUpPage;
