import React, { useState } from 'react';

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.308 1.154a11.034 11.034 0 005.37 5.37l1.154-2.308a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-6 h-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@protaxes.co.uk?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-brand-text sm:text-4xl">
            Get In Touch With ProTaxes
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help you with all your accounting and tax needs. Whether you have a question about our services, 
            want to book a consultation, or need expert advice, our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-brand-text mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm"
                  aria-label="Full Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm"
                  aria-label="Email Address"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm"
                  aria-label="Phone Number"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm"
                  aria-label="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm"
                  aria-label="Your Message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-gold hover:bg-brand-gold-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold-darker transition-colors duration-150 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details & Map Placeholder */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-brand-text mb-6">Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <LocationIcon className="flex-shrink-0 w-6 h-6 text-brand-gold mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Visit Us</h3>
                    <p>ProTaxes Ltd<br />28 Aberconway Road<br />Morden<br />SM4 5LF</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="flex-shrink-0 w-6 h-6 text-brand-gold mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p>07879845669</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <EmailIcon className="flex-shrink-0 w-6 h-6 text-brand-gold mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <a href="mailto:info@protaxes.co.uk" className="hover:text-brand-gold-darker">info@protaxes.co.uk</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-brand-text mb-6">Office Hours</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Monday - Friday:</strong> 9:00 AM - 5:30 PM</li>
                <li><strong>Saturday - Sunday:</strong> Closed</li>
                <li><strong>Public Holidays:</strong> Closed</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-brand-text mb-4">Find Us</h2>
              <p className="text-gray-600 mb-2">Our office is conveniently located in South London.</p>
              <p className="text-gray-700 mb-4">
                28 Aberconway Road<br />
                Morden, London<br />
                SM4 5LF
              </p>
              <div className="aspect-w-16 aspect-h-9 bg-gray-300 rounded-md flex items-center justify-center">
                {/* Consider embedding a map here using an iframe or a mapping library if desired */}
                <p className="text-gray-500">Map Placeholder (e.g., Google Maps Embed)</p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;