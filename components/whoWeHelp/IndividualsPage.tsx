
import React from 'react';

// Shared PageSection and ListItem components (can be moved to a shared utils file later)
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

const IndividualsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Personal Tax Services for Individuals</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          ProTaxes offers expert, tailored tax advice and compliance services to help individuals manage their personal tax affairs effectively and efficiently.
        </p>
      </PageSection>

      <PageSection title="Your Personal Tax, Simplified">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Navigating the complexities of personal taxation can be overwhelming. At ProTaxes, we understand that every individual's financial situation is unique. Our dedicated team provides clear, proactive, and personalized advice to ensure you meet your tax obligations while taking advantage of all available reliefs and allowances.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you require assistance with your Self-Assessment tax return, need advice on Capital Gains Tax, or planning for inheritance tax, our experts are here to guide you every step of the way. We aim to minimize your tax liabilities legally and give you peace of mind.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Personal Tax Consultation" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="How ProTaxes Can Help You:" className="bg-gray-50">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
          <ListItem><strong>Self-Assessment Tax Returns:</strong> Comprehensive preparation and submission, ensuring accuracy and timeliness.</ListItem>
          <ListItem><strong>Income Tax Planning:</strong> Strategies to optimise your income tax position.</ListItem>
          <ListItem><strong>Capital Gains Tax (CGT):</strong> Advice on disposals of assets, calculation of liabilities, and identifying reliefs.</ListItem>
          <ListItem><strong>Inheritance Tax (IHT) Planning:</strong> Helping you plan for the future and protect your estate.</ListItem>
          <ListItem><strong>Tax Investigations Support:</strong> Expert assistance if you are facing an HMRC inquiry.</ListItem>
          <ListItem><strong>Residence and Domicile Advice:</strong> Guidance for UK residents with international aspects and non-UK domiciliaries.</ListItem>
          <ListItem><strong>Property Tax:</strong> Advice for landlords and those with property income, including buy-to-let.</ListItem>
          <ListItem><strong>Tax Efficient Investments:</strong> Information on schemes like EIS and VCTs (in conjunction with financial advisors).</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Proactive and Personalised Approach">
        <p className="text-gray-700 leading-relaxed mb-6">
          At ProTaxes, we believe in a proactive approach. We don't just file your tax returns; we work with you throughout the year to understand your financial goals and provide ongoing advice. Our services are tailored to your specific circumstances, ensuring you receive the most relevant and beneficial support.
        </p>
        <ul className="space-y-3 text-gray-700">
          <ListItem>Clear explanations of complex tax matters.</ListItem>
          <ListItem>Timely reminders for important deadlines.</ListItem>
          <ListItem>Access to experienced tax professionals.</ListItem>
          <ListItem>Confidential and reliable service.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Partner with ProTaxes for Your Personal Tax Needs" className="bg-brand-gold-light">
        <p className="text-gray-700 leading-relaxed mb-6 text-center">
          Take control of your personal tax affairs with ProTaxes. Contact us today for a confidential, no-obligation discussion about how we can assist you.
        </p>
        <div className="text-center">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Arrange a Personal Tax Consultation
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default IndividualsPage;
