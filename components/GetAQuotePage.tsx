import React, { useState } from 'react';

interface Service {
  id: string;
  name: string;
  description?: string; // Optional: short description for each service
}

const availableServices: Service[] = [
  { id: 'self-assessment', name: 'Self-Assessment Tax Returns', description: 'Personal tax return preparation and submission.' },
  { id: 'limited-company', name: 'Limited Company Accounts & Tax', description: 'Statutory accounts, corporation tax, and compliance for limited companies.' },
  { id: 'tax-rebates', name: 'Tax Rebate Claims', description: 'Identifying and claiming overpaid tax from HMRC.' },
  { id: 'bookkeeping', name: 'Bookkeeping Services', description: 'Day-to-day financial record keeping and management.' },
  { id: 'vat-returns', name: 'VAT Returns Services', description: 'VAT registration, return preparation, and MTD compliance.' },
  { id: 'payroll', name: 'Payroll Services', description: 'Full payroll administration, RTI submissions, and auto-enrolment.' },
  { id: 'cis-returns', name: 'CIS Tax Returns & Refunds', description: 'Construction Industry Scheme compliance for contractors and subcontractors.' },
  { id: 'business-startup', name: 'Business Start-up Services', description: 'Guidance and support for new businesses, from formation to launch.' },
  { id: 'consultation', name: 'General Consultation', description: 'Expert advice on specific accounting or tax matters.' },
  { id: 'other', name: 'Other Services', description: 'Please specify your needs in the message below.'}
];

const GetAQuotePage: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleService = (serviceName: string) => {
    setSelectedServices(prevSelected =>
      prevSelected.includes(serviceName)
        ? prevSelected.filter(s => s !== serviceName)
        : [...prevSelected, serviceName]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(false); // Reset submission status

    if (selectedServices.length === 0) {
        alert("Please select at least one service.");
        return;
    }

    const servicesList = selectedServices.map(s => `- ${s}`).join('\n');
    const mailtoBody = `
New Quote Request:

Selected Services:
${servicesList}

User Details:
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Company Name: ${formData.companyName || 'N/A'}

Message/Requirements:
${formData.message || 'N/A'}
    `;

    const mailtoLink = `mailto:info@protaxes.co.uk?subject=${encodeURIComponent(
      `Quote Request from ${formData.fullName || 'Prospective Client'}`
    )}&body=${encodeURIComponent(mailtoBody.trim())}`;
    
    window.location.href = mailtoLink;
    setFormSubmitted(true); 
    // Optionally clear form after submission attempt:
    // setSelectedServices([]);
    // setFormData({ fullName: '', email: '', phone: '', companyName: '', message: '' });
  };

  return (
    <div className="py-12 lg:py-20 bg-brand-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-brand-text sm:text-4xl">
            Get a Custom Quote from ProTaxes
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Select the services you're interested in, provide your details, and we'll get back to you with a tailored quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Service Selection */}
          <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-brand-text mb-6">1. Select Services</h2>
            <div className="space-y-4">
              {availableServices.map(service => (
                <div key={service.id} className={`p-4 border rounded-md transition-all duration-200 ease-in-out ${selectedServices.includes(service.name) ? 'border-brand-gold bg-brand-gold-light shadow-md' : 'border-gray-300 hover:border-brand-gold-light'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-brand-text">{service.name}</h3>
                      {service.description && <p className="text-sm text-gray-600 mt-1">{service.description}</p>}
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleService(service.name)}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        selectedServices.includes(service.name)
                          ? 'bg-red-500 hover:bg-red-600 text-white'
                          : 'bg-brand-gold hover:bg-brand-gold-darker text-white'
                      }`}
                      aria-pressed={selectedServices.includes(service.name)}
                      aria-label={`${selectedServices.includes(service.name) ? 'Remove' : 'Add'} ${service.name} to quote`}
                    >
                      {selectedServices.includes(service.name) ? 'Remove' : 'Add to Quote'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Summary & Form */}
          <div className="lg:col-span-1 bg-white p-6 md:p-8 rounded-lg shadow-lg sticky top-24"> {/* Sticky for desktop */}
            <h2 className="text-2xl font-bold text-brand-text mb-6">2. Your Details</h2>
            
            {selectedServices.length > 0 && (
              <div className="mb-6 pb-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-brand-text mb-2">Selected Services:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {selectedServices.map(s => <li key={s}>{s}</li>)}
                </ul>
                <button
                  type="button"
                  onClick={() => setSelectedServices([])}
                  className="mt-3 text-sm text-red-600 hover:text-red-800 font-medium"
                  aria-label="Clear all selected services"
                >
                  Clear All Selections
                </button>
              </div>
            )}
             {selectedServices.length === 0 && (
                <p className="text-gray-500 mb-6" aria-live="polite">Please select one or more services from the list.</p>
             )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
                <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm" aria-label="Full Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm" aria-label="Email Address" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm" aria-label="Phone Number" />
              </div>
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name (Optional)</label>
                <input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm" aria-label="Company Name" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Message/Requirements (Optional)</label>
                <textarea name="message" id="message" rows={3} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm" aria-label="Additional Message or Requirements" />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={selectedServices.length === 0}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-gold hover:bg-brand-gold-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold-darker transition-colors duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Quote Request
                </button>
              </div>
              {formSubmitted && (
                <p className="mt-3 text-sm text-green-600" aria-live="polite">
                  Your quote request is being prepared for your email client. If it doesn't open automatically, please check your pop-up blocker or email client.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuotePage;