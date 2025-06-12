
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InfoCardsSection from './components/InfoCardsSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import ContactUsPage from './components/ContactUsPage';
import GetAQuotePage from './components/GetAQuotePage';

// Import 'Our Services' pages
import SelfAssessmentPage from './components/services/SelfAssessmentPage';
import LimitedCompanyAccountsPage from './components/services/LimitedCompanyAccountsPage';
import TaxRebateClaimsPage from './components/services/TaxRebateClaimsPage';
import BookkeepingServicesPage from './components/services/BookkeepingServicesPage';
import VatReturnsPage from './components/services/VatReturnsPage';
import PayrollServicesPage from './components/services/PayrollServicesPage';
import CisTaxReturnsPage from './components/services/CisTaxReturnsPage';
import BusinessStartUpPage from './components/services/BusinessStartUpPage';

// Import 'Who We Help' (Sector) pages
import IndividualsPage from './components/whoWeHelp/IndividualsPage';
import BusinessStartUpsPage from './components/whoWeHelp/BusinessStartUpsPage';
import SmesPage from './components/whoWeHelp/SmesPage';
import LargeCorporatesPage from './components/whoWeHelp/LargeCorporatesPage';
import ContractorsPage from './components/whoWeHelp/ContractorsPage';
import LandlordsPage from './components/whoWeHelp/LandlordsPage';
import CreativeIndustriesPage from './components/whoWeHelp/CreativeIndustriesPage';
import TechnologySectorPage from './components/whoWeHelp/TechnologySectorPage';
import HealthcareProfessionalsPage from './components/whoWeHelp/HealthcareProfessionalsPage';
import RetailEcommercePage from './components/whoWeHelp/RetailEcommercePage';
import CharitiesNotForProfitPage from './components/whoWeHelp/CharitiesNotForProfitPage';

interface PageMetadata {
  title: string;
  description: string;
}

const getPageMetadata = (path: string): PageMetadata => {
  const defaultTitle = "ProTaxes Accountants & Tax Consultants in London | Expert Financial Services";
  const defaultDescription = "ProTaxes offers expert accounting, tax consultation, and financial services for individuals and businesses in London. Contact us for self-assessment, company accounts, and more.";

  switch (path) {
    case '#/':
      return { title: defaultTitle, description: defaultDescription };
    case '#/contact':
      return { title: "Contact ProTaxes | London Accountants & Tax Advisors", description: "Get in touch with ProTaxes in Morden, South London. Call 07879845669 or email info@protaxes.co.uk for expert accounting and tax services." };
    case '#/get-a-quote':
      return { title: "Request a Quote - Accounting & Tax Services | ProTaxes London", description: "Get a custom quote from ProTaxes for services like self-assessment, company accounts, VAT, and more. London-based tax experts at your service." };

    // Services
    case '#/services/self-assessment':
      return { title: "Self-Assessment Tax Returns Services | ProTaxes London", description: "Expert Self-Assessment tax return services in London by ProTaxes. We ensure accuracy, compliance, and help maximise your tax efficiency." };
    case '#/services/limited-company':
      return { title: "Limited Company Accounts & Tax Services | ProTaxes London", description: "Comprehensive accounting and corporation tax services for limited companies in London. ProTaxes ensures compliance and supports business growth." };
    case '#/services/tax-rebates':
      return { title: "Tax Rebate Claims Assistance | ProTaxes London", description: "ProTaxes helps individuals and businesses in London identify and claim overpaid tax from HMRC. Maximise your tax refund with our expert help." };
    case '#/services/bookkeeping':
      return { title: "Professional Bookkeeping Services in London | ProTaxes", description: "Accurate and efficient bookkeeping solutions by ProTaxes for London businesses. Keep your finances organised and compliant. Cloud accounting experts." };
    case '#/services/vat-returns':
      return { title: "VAT Returns Services & MTD Compliance | ProTaxes London", description: "Expert VAT advice, registration, and accurate VAT return preparation in London. ProTaxes ensures MTD compliance for your business." };
    case '#/services/payroll':
      return { title: "Reliable Payroll Services for Businesses in London | ProTaxes", description: "ProTaxes offers compliant and efficient payroll solutions in London. We handle PAYE, NI, auto-enrolment, and RTI submissions for your business." };
    case '#/services/cis-returns':
      return { title: "CIS Tax Returns & Refunds for Construction Industry | ProTaxes London", description: "Specialist CIS services in London by ProTaxes for contractors and subcontractors. Ensure compliance and maximise your CIS tax refunds." };
    case '#/services/business-startup':
      return { title: "Business Start-up Accounting & Tax Support | ProTaxes London", description: "Launch your new venture with confidence. ProTaxes offers expert guidance and support for business start-ups in London, from formation to financial planning." };

    // Who We Help
    case '#/who-we-help/individuals':
      return { title: "Personal Tax Services for Individuals in London | ProTaxes", description: "ProTaxes offers tailored tax advice and compliance services for individuals in London. Manage your Self-Assessment, Capital Gains, and Inheritance Tax effectively." };
    case '#/who-we-help/business-start-ups':
      return { title: "Accounting for Business Start-ups in London | ProTaxes", description: "Comprehensive accounting and tax support for new businesses in London. ProTaxes guides start-ups through formation, financial planning, and compliance." };
    case '#/who-we-help/smes':
      return { title: "SME Accounting & Tax Services in London | ProTaxes", description: "Tailored financial solutions for Small and Medium-sized Enterprises (SMEs) in London. ProTaxes drives growth, ensures compliance, and improves profitability." };
    case '#/who-we-help/large-corporates':
      return { title: "Financial Services for Large Corporates in London | ProTaxes", description: "ProTaxes offers strategic financial, accounting, and tax advisory for large corporations in London, supporting complex needs and strategic objectives." };
    case '#/who-we-help/contractors':
      return { title: "Contractor Accounting & IR35 Advice | ProTaxes London", description: "Specialised financial and tax services for contractors and freelancers in London. ProTaxes helps navigate IR35, optimise earnings, and ensure compliance." };
    case '#/who-we-help/landlords':
      return { title: "Property Tax & Accounting for Landlords in London | ProTaxes", description: "Expert advice for property investors and landlords in London. ProTaxes helps manage your portfolio tax-efficiently and comply with regulations." };
    case '#/who-we-help/creative-industries':
      return { title: "Accounting for Creative Industries in London | ProTaxes", description: "Specialist financial and tax advice by ProTaxes for creative businesses in London (media, design, arts, marketing). Support for tax reliefs and project accounting." };
    case '#/who-we-help/technology':
      return { title: "Tech Sector Accounting & R&D Tax Credits | ProTaxes London", description: "ProTaxes offers specialist financial services for tech start-ups and IT companies in London, including R&D tax credits and SaaS accounting." };
    case '#/who-we-help/healthcare':
      return { title: "Accounting for Healthcare Professionals in London | ProTaxes", description: "Specialist accounting and tax services by ProTaxes for doctors, dentists, and healthcare practitioners in London. NHS pension and private practice expertise." };
    case '#/who-we-help/retail-ecommerce':
      return { title: "Retail & E-commerce Accounting Services | ProTaxes London", description: "ProTaxes provides expert financial and tax services for retailers and online sellers in London. Support for inventory, sales tax, and e-commerce platforms." };
    case '#/who-we-help/charities':
      return { title: "Charity & Not-for-Profit Accounting | ProTaxes London", description: "Specialist financial, governance, and compliance services by ProTaxes for charities and not-for-profit organisations in London. SORP and Gift Aid expertise." };
    
    default:
      // Fallback for any paths not explicitly handled, or for sections like #about-us if they become full pages
      if (path.startsWith('#/services/')) {
        const serviceName = path.split('/').pop()?.replace(/-/g, ' ') || 'Service';
        const capitalizedServiceName = serviceName.charAt(0).toUpperCase() + serviceName.slice(1);
        return { title: `${capitalizedServiceName} | ProTaxes London`, description: `Learn more about ${serviceName} services offered by ProTaxes in London.` };
      }
       if (path.startsWith('#/who-we-help/')) {
        const sectorName = path.split('/').pop()?.replace(/-/g, ' ') || 'Sector';
        const capitalizedSectorName = sectorName.charAt(0).toUpperCase() + sectorName.slice(1);
        return { title: `Accounting for ${capitalizedSectorName} | ProTaxes London`, description: `ProTaxes provides specialized accounting and tax services for the ${sectorName} in London.` };
      }
      return { title: defaultTitle, description: defaultDescription };
  }
};


const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash || '#/';
      setCurrentPath(newPath);
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const { title, description } = getPageMetadata(currentPath);
    document.title = title;
    
    const metaDescriptionTag = document.getElementById('meta-description');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', description);
    }
  }, [currentPath]);

  const renderContent = () => {
    if (currentPath.startsWith('#/services/')) {
      if (currentPath === '#/services/self-assessment') return <SelfAssessmentPage />;
      if (currentPath === '#/services/limited-company') return <LimitedCompanyAccountsPage />;
      if (currentPath === '#/services/tax-rebates') return <TaxRebateClaimsPage />;
      if (currentPath === '#/services/bookkeeping') return <BookkeepingServicesPage />;
      if (currentPath === '#/services/vat-returns') return <VatReturnsPage />;
      if (currentPath === '#/services/payroll') return <PayrollServicesPage />;
      if (currentPath === '#/services/cis-returns') return <CisTaxReturnsPage />;
      if (currentPath === '#/services/business-startup') return <BusinessStartUpPage />;
    }

    if (currentPath.startsWith('#/who-we-help/')) {
      if (currentPath === '#/who-we-help/individuals') return <IndividualsPage />;
      if (currentPath === '#/who-we-help/business-start-ups') return <BusinessStartUpsPage />;
      if (currentPath === '#/who-we-help/smes') return <SmesPage />;
      if (currentPath === '#/who-we-help/large-corporates') return <LargeCorporatesPage />;
      if (currentPath === '#/who-we-help/contractors') return <ContractorsPage />;
      if (currentPath === '#/who-we-help/landlords') return <LandlordsPage />;
      if (currentPath === '#/who-we-help/creative-industries') return <CreativeIndustriesPage />;
      if (currentPath === '#/who-we-help/technology') return <TechnologySectorPage />;
      if (currentPath === '#/who-we-help/healthcare') return <HealthcareProfessionalsPage />;
      if (currentPath === '#/who-we-help/retail-ecommerce') return <RetailEcommercePage />;
      if (currentPath === '#/who-we-help/charities') return <CharitiesNotForProfitPage />;
    }
    
    if (currentPath === '#/contact') {
      return <ContactUsPage />;
    }

    if (currentPath === '#/get-a-quote') { 
      return <GetAQuotePage />;
    }

    // Default to homepage content
    return (
      <>
        <HeroSection />
        <div id="who-we-help-section"> {/* Renamed ID to avoid conflict if any, though header link changed */}
          <InfoCardsSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-text flex flex-col">
      <Header currentPath={currentPath} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;