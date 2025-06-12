
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

const PayrollServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageSection className="bg-brand-gold-light text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text mb-4">Payroll Services</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Reliable, compliant, and efficient payroll solutions for your business by ProTaxes. Let us handle the complexities of payroll administration.
        </p>
      </PageSection>

      <PageSection title="Efficient and Compliant Payroll Management">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Managing payroll can be a complex and time-consuming task for any business, with ever-changing legislation and strict HMRC reporting requirements. Errors in payroll can lead to unhappy employees and costly penalties. ProTaxes offers comprehensive payroll services to ensure your employees are paid accurately and on time, every time, while keeping your business fully compliant.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our dedicated payroll team stays abreast of all current PAYE, National Insurance, and auto-enrolment pension regulations. We can manage all aspects of your payroll, whether you have a few employees or a large workforce, freeing you to focus on your core business activities.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img src="https://images.pexels.com/photos/1601775/pexels-photo-1601775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Payroll Services" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-96" />
          </div>
        </div>
      </PageSection>

      <PageSection title="Our Payroll Services Include:" className="bg-gray-50">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
          <ListItem>Processing weekly, fortnightly, or monthly payrolls.</ListItem>
          <ListItem>Calculation of PAYE tax, National Insurance contributions (employee and employer).</ListItem>
          <ListItem>Processing statutory payments (SSP, SMP, SPP, SAP).</ListItem>
          <ListItem>Handling student loan deductions, attachment of earnings orders, etc.</ListItem>
          <ListItem>Production of payslips (electronic or printed).</ListItem>
          <ListItem>Submission of Real Time Information (RTI) reports to HMRC (FPS, EPS).</ListItem>
          <ListItem>Administration of auto-enrolment pension schemes, including employee assessments and contributions.</ListItem>
          <ListItem>Preparation of year-end P60 forms for employees.</ListItem>
          <ListItem>Processing new starters and leavers (P45s).</ListItem>
          <ListItem>Bespoke payroll reports tailored to your needs.</ListItem>
          <ListItem>Dealing with HMRC payroll queries on your behalf.</ListItem>
          <ListItem>Advice on salary sacrifice schemes and other payroll-related benefits.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Benefits of Outsourcing Payroll to ProTaxes:">
        <ul className="space-y-3 text-gray-700">
          <ListItem><strong>Compliance Guaranteed:</strong> Stay compliant with all HMRC regulations and avoid penalties.</ListItem>
          <ListItem><strong>Cost Savings:</strong> Reduce overheads associated with in-house payroll staff and software.</ListItem>
          <ListItem><strong>Time Efficiency:</strong> Free up valuable time for you and your staff.</ListItem>
          <ListItem><strong>Accuracy:</strong> Our experts ensure precise calculations and processing.</ListItem>
          <ListItem><strong>Confidentiality:</strong> Secure handling of sensitive employee data.</ListItem>
          <ListItem><strong>Expert Support:</strong> Access to professional advice on all payroll matters.</ListItem>
          <ListItem><strong>Peace of Mind:</strong> Know that your payroll is being managed correctly and efficiently.</ListItem>
        </ul>
      </PageSection>

      <PageSection title="Entrust Your Payroll to ProTaxes" className="bg-brand-gold-light">
        <p className="text-gray-700 leading-relaxed mb-6">
          Focus on growing your business and let ProTaxes take care of your payroll needs. Contact us today for a tailored payroll quote and discover how we can help.
        </p>
        <div className="text-center">
            <a href="#/contact" className="inline-block px-8 py-3 bg-brand-gold text-gray-900 font-semibold rounded-md shadow-md hover:bg-brand-gold-darker hover:text-white transition-colors">
                Get a Payroll Quote
            </a>
        </div>
      </PageSection>
    </div>
  );
};

export default PayrollServicesPage;
