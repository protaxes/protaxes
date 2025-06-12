
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

const CreativeIndustriesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Accounting for Creative Industries</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          ProTaxes provides specialist financial and tax advice for individuals and businesses in the creative sector, including media, design, arts, and marketing.
        </p>
      </PageSection>

      <PageSection title="Supporting Your Creative Vision">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The creative industries are dynamic and diverse, with unique financial challenges and opportunities. At ProTaxes, we have a passion for supporting creative professionals and businesses, helping them to thrive financially while they focus on their craft and innovation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're a freelance designer, a film production company, a marketing agency, or an artist, our team offers tailored accounting, tax, and business advisory services. We understand the specific funding models, revenue streams, and tax reliefs relevant to the creative sector.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/3184603/pexels-photo-3184603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Creative Team Collaboration" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="Our Services for the Creative Sector:" className="bg-gray-50">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
          <ListItem><strong>Specialist Tax Reliefs:</strong> Advice on creative industry tax reliefs (e.g., Film Tax Relief, Video Games Tax Relief, Theatre Tax Relief, R&D tax credits for creative tech).</ListItem>
          <ListItem><strong>Project Accounting:</strong> Managing finances for specific creative projects and productions.</ListItem>
          <ListItem><strong>Royalty Accounting & Management:</strong> Tracking and reporting royalty income and payments.</ListItem>
          <ListItem><strong>Funding & Grant Applications:</strong> Assistance with financial aspects of grant applications.</ListItem>
          <ListItem><strong>Cash Flow Management:</strong> Critical for project-based work and fluctuating incomes.</ListItem>
          <ListItem><strong>Intellectual Property (IP):</strong> Advice on tax implications of IP ownership and exploitation (in conjunction with legal experts).</ListItem>
          <ListItem><strong>Accounting for Freelancers & Sole Traders:</strong> Self-Assessment, expense claims, and business advice.</ListItem>
          <ListItem><strong>Limited Company Accounts & Tax:</strong> For creative agencies and production companies.</ListItem>
          <ListItem><strong>VAT Advice:</strong> Including international services and digital products.</ListItem>
          <ListItem><strong>Withholding Tax:</strong> For international earnings and performances.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Why Creatives Partner with ProTaxes:">
        <p className="text-gray-700 leading-relaxed mb-6">
          ProTaxes understands the nuances of the creative world:
        </p>
        <ul className="space-y-3 text-gray-700">
          <ListItem><strong>Industry Knowledge:</strong> We speak your language and understand your sector's specific challenges.</ListItem>
          <ListItem><strong>Tailored Advice:</strong> Our services are customized to your creative discipline and business model.</ListItem>
          <ListItem><strong>Focus on Tax Efficiency:</strong> Maximising available reliefs and allowances specific to creatives.</ListItem>
          <ListItem><strong>Support for Growth:</strong> Helping you scale your creative business or freelance career.</ListItem>
          <ListItem><strong>Network of Contacts:</strong> We can connect you with other professionals relevant to your needs (e.g., legal, funding).</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Let Us Handle the Numbers, You Focus on Creating" className="bg-brand-gold-light">
        <p className="text-gray-700 leading-relaxed mb-6 text-center">
          Empower your creative endeavors with sound financial management. Contact ProTaxes for a consultation tailored to your needs in the creative industry.
        </p>
        <div className="text-center">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Creative Industries Enquiry
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default CreativeIndustriesPage;
