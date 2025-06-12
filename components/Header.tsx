
import React, { useState, useEffect, useRef } from 'react';

const UltraTaxLogo: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2 text-brand-gold-darker">
    <path d="M20 70L35 50L50 65L80 30" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 80H80" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
    <path d="M55 25L80 30" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M70 15L80 30" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
  isExternal?: boolean; 
}

interface HeaderProps {
  currentPath: string;
}

const Header: React.FC<HeaderProps> = ({ currentPath }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const whoWeHelpDropdownRef = useRef<HTMLDivElement>(null);


  const navItems: NavItem[] = [
    { name: 'Home', href: '#/' },
    {
      name: 'Our Services',
      href: '#', 
      children: [
        { name: 'Self-Assessment Tax Returns', href: '#/services/self-assessment' },
        { name: 'Limited Company Accounts', href: '#/services/limited-company' },
        { name: 'Tax Rebate Claims', href: '#/services/tax-rebates' },
        { name: 'Bookkeeping Services', href: '#/services/bookkeeping' },
        { name: 'VAT Returns', href: '#/services/vat-returns' },
        { name: 'Payroll Services', href: '#/services/payroll' },
        { name: 'CIS Tax Returns', href: '#/services/cis-returns' },
        { name: 'Business Start-up', href: '#/services/business-startup' },
      ],
    },
    {
      name: 'Who We Help',
      href: '#', 
      children: [
        { name: 'Individuals', href: '#/who-we-help/individuals' },
        { name: 'Business Start-ups', href: '#/who-we-help/business-start-ups' },
        { name: 'SMEs', href: '#/who-we-help/smes' },
        { name: 'Large Corporates', href: '#/who-we-help/large-corporates' },
        { name: 'Contractors', href: '#/who-we-help/contractors' },
        { name: 'Landlords', href: '#/who-we-help/landlords' },
        { name: 'Creative Industries', href: '#/who-we-help/creative-industries' },
        { name: 'Technology Sector', href: '#/who-we-help/technology' },
        { name: 'Healthcare Professionals', href: '#/who-we-help/healthcare' },
        { name: 'Retail & E-commerce', href: '#/who-we-help/retail-ecommerce' },
        { name: 'Charities & Not-for-Profit', href: '#/who-we-help/charities' },
      ],
    },
    { name: 'About Us', href: '#about-us' }, 
    { name: 'Blog', href: '#blog' },       
    { name: 'Contact Us', href: '#/contact' },
  ];

  const handleMouseEnter = (itemName: string) => {
    if (window.innerWidth >= 768) { 
      setOpenDropdown(itemName);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setOpenDropdown(null);
    }
  };

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isClickOutsideServices = servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node);
      const isClickOutsideWhoWeHelp = whoWeHelpDropdownRef.current && !whoWeHelpDropdownRef.current.contains(event.target as Node);

      // If both refs are defined, click must be outside both
      // If only one is defined (e.g. one dropdown is open), click must be outside that one
      // If none are relevant for the current openDropdown, this logic might need refinement, but usually, we check against the open one.
      
      let clickedOutside = true;
      if (openDropdown === 'Our Services' && servicesDropdownRef.current?.contains(event.target as Node)) {
        clickedOutside = false;
      }
      if (openDropdown === 'Who We Help' && whoWeHelpDropdownRef.current?.contains(event.target as Node)) {
        clickedOutside = false;
      }
      
      // A more robust check: if any dropdown is open, and the click is outside all dropdown refs
      if (openDropdown) {
        if ((!servicesDropdownRef.current?.contains(event.target as Node) && openDropdown === 'Our Services') || 
            (!whoWeHelpDropdownRef.current?.contains(event.target as Node) && openDropdown === 'Who We Help')) {
             // If the click is specifically outside the currently open dropdown's trigger area
             if(openDropdown === 'Our Services' && isClickOutsideServices) setOpenDropdown(null);
             else if(openDropdown === 'Who We Help' && isClickOutsideWhoWeHelp) setOpenDropdown(null);
             // If click is outside both and some dropdown is open, close it.
             else if (isClickOutsideServices && isClickOutsideWhoWeHelp) setOpenDropdown(null);

        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);


  const isLinkActive = (item: NavItem): boolean => {
    if (item.href === '#/' && currentPath === '#/') return true;
    if (item.href !== '#/' && item.href !== '#' && currentPath === item.href) return true;
    
    if (item.children) {
      if ((item.name === "Our Services" && currentPath.startsWith("#/services/")) ||
          (item.name === "Who We Help" && currentPath.startsWith("#/who-we-help/"))) {
        return true;
      }
      if (item.children.some(child => currentPath === child.href)) return true;
    }
    return false;
  };


  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#/" className="flex items-center text-2xl font-bold text-brand-text">
              <UltraTaxLogo />
              ProTaxes
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.name)}
                onMouseLeave={() => item.children && handleMouseLeave()}
                ref={item.name === 'Our Services' ? servicesDropdownRef : (item.name === 'Who We Help' ? whoWeHelpDropdownRef : null)}
              >
                <a
                  href={item.href === '#' && item.children ? (item.children[0]?.href || '#') : item.href}
                  onClick={(e) => {
                    if (item.children && item.href === '#') {
                        e.preventDefault(); 
                        toggleDropdown(item.name);
                    } else { 
                        setIsMobileMenuOpen(false); 
                        setOpenDropdown(null);
                        // Allow navigation for non-hash links or if href is not '#'
                        if(item.href !== '#' && !item.href.startsWith('#')) return;
                         window.location.hash = item.href; // Ensure hash navigation for SPA links
                    }
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-150 ease-in-out flex items-center
                    ${isLinkActive(item)
                      ? 'bg-brand-gold text-white' 
                      : 'text-brand-text hover:bg-brand-gold-light hover:text-brand-gold-darker'
                    }`}
                  aria-haspopup={!!item.children}
                  aria-expanded={openDropdown === item.name}
                >
                  {item.name}
                  {item.children && (
                    <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${openDropdown === item.name ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  )}
                </a>
                {item.children && openDropdown === item.name && (
                  <div className="absolute left-0 top-full w-64 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-200 max-h-96 overflow-y-auto">
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        onClick={() => { 
                            setOpenDropdown(null); 
                            setIsMobileMenuOpen(false); 
                            window.location.hash = child.href; 
                        }}
                        className={`block px-4 py-2 text-sm 
                          ${currentPath === child.href 
                            ? 'bg-brand-gold text-white' 
                            : 'text-brand-text hover:bg-brand-gold-light hover:text-brand-gold-darker'
                          }`}
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#/get-a-quote"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setOpenDropdown(null);
                window.location.hash = "#/get-a-quote";
              }}
              className="px-4 py-2 bg-brand-gold text-white text-sm font-semibold rounded-md shadow-sm hover:bg-brand-gold-darker transition-colors duration-150 ease-in-out"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-text hover:text-brand-gold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-gold"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href === '#' && item.children ? (item.children[0]?.href || '#') : item.href}
                  onClick={(e) => {
                     if (item.children && item.href === '#') {
                        e.preventDefault();
                        toggleDropdown(item.name);
                     } else {
                        setIsMobileMenuOpen(false);
                        setOpenDropdown(null);
                        if(item.href !== '#' && !item.href.startsWith('#')) return;
                         window.location.hash = item.href;
                     }
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium flex justify-between items-center
                    ${isLinkActive(item)
                      ? 'bg-brand-gold text-white' 
                      : 'text-brand-text hover:bg-brand-gold-light hover:text-brand-gold-darker'
                    }`}
                  aria-haspopup={!!item.children}
                  aria-expanded={openDropdown === item.name}
                >
                  {item.name}
                  {item.children && (
                     <svg className={`w-5 h-5 transition-transform duration-200 ${openDropdown === item.name ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  )}
                </a>
                {item.children && openDropdown === item.name && (
                  <div className="pl-3 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        onClick={() => { 
                            setOpenDropdown(null); 
                            setIsMobileMenuOpen(false); 
                            window.location.hash = child.href; 
                        }}
                        className={`block px-3 py-2 rounded-md text-base font-medium
                          ${currentPath === child.href 
                            ? 'bg-brand-gold text-white' 
                            : 'text-brand-text hover:bg-brand-gold-light hover:text-brand-gold-darker'
                          }`}
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#/get-a-quote" 
              onClick={() => {
                setIsMobileMenuOpen(false); 
                setOpenDropdown(null);
                window.location.hash = "#/get-a-quote";
              }}
              className="block w-full text-center mt-3 px-4 py-2 bg-brand-gold text-white text-base font-semibold rounded-md shadow-sm hover:bg-brand-gold-darker"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
