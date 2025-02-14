import { useState } from "react";

interface NavProps {
  websiteContent: {
    about: {
      websiteName: string;
      homepageLink?: string;
    };
    contact?: {
      contactPageLink?: string;
    };
    ctaLinks: {
      signInText?: string;
      signInLink?: string;
      signUpText?: string;
      signUpLink?: string;
    };
  };
}

export default function Nav({ websiteContent }: NavProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationLinks = [{ href: "/blog", label: "All Blogs" }];

  const ctaLinks = [];
  if (
    websiteContent.ctaLinks.signInText &&
    websiteContent.ctaLinks.signInLink
  ) {
    ctaLinks.push({
      text: websiteContent.ctaLinks.signInText,
      href: websiteContent.ctaLinks.signInLink,
      isPrimary: false,
    });
  }

  if (
    websiteContent.ctaLinks.signUpText &&
    websiteContent.ctaLinks.signUpLink
  ) {
    ctaLinks.push({
      text: websiteContent.ctaLinks.signUpText,
      href: websiteContent.ctaLinks.signUpLink,
      isPrimary: true,
    });
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Nav */}
      <nav className="sticky top-0 z-50 w-full bg-white">
        <div className="flex items-center justify-between pl-4 pr-6 md:px-8 pb-2.5 pt-4">
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-24 md:w-24 md:mr-14">
                <a href={websiteContent.about.homepageLink || "/"}>
                  <h1 className="text-2xl font-bold">
                    {websiteContent.about.websiteName}
                  </h1>
                </a>
              </div>
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center mr-10">
                  {navigationLinks.map((link) => (
                    <li
                      key={link.href}
                      className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg">
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <div className="flex flex-wrap">
                  {ctaLinks.map((link, index) => (
                    <div key={index} className="w-auto">
                      <a href={link.href}>
                        {link.isPrimary ? (
                          <button className="group relative font-heading block py-2 px-5 text-lg text-gray-900 border-2 border-gray-900 overflow-hidden rounded-lg">
                            <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gray-900 transition ease-in-out duration-500"></div>
                            <p className="relative z-10 group-hover:text-white">
                              {link.text}
                            </p>
                          </button>
                        ) : (
                          <span className="font-heading block py-2 px-5 mr-5 text-lg text-gray-900 hover:text-indigo-800 rounded-lg">
                            {link.text}
                          </span>
                        )}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-auto lg:hidden">
                <button onClick={toggleMobileMenu}>
                  <svg
                    className="navbar-burger text-gray-800"
                    width="51"
                    height="51"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect
                      width="56"
                      height="56"
                      rx="28"
                      fill="currentColor"></rect>
                    <path
                      d="M37 32H19M37 24H19"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
            <div className="fixed inset-0 bg-gray-800 opacity-80"></div>
            <nav className="relative z-10 px-9 py-8 bg-white h-full">
              <div className="flex flex-wrap justify-between h-full">
                <div className="w-full">
                  <div className="flex items-center justify-between -mx-8">
                    <a href="/">
                      <h1 className="text-2xl font-bold">
                        {websiteContent.about.websiteName}
                      </h1>
                    </a>
                    <div className="w-auto p-2">
                      <button
                        onClick={toggleMobileMenu}
                        className="navbar-burger">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6 18L18 6M6 6L18 18"
                            stroke="#111827"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col py-8 w-full">
                  <ul>
                    {navigationLinks.map((link) => (
                      <li key={link.href} className="mb-8">
                        <a
                          className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                          href={link.href}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-end w-full">
                  <div className="flex flex-wrap">
                    {ctaLinks.map((link, index) => (
                      <div key={index} className="w-full">
                        <a
                          href={link.href}
                          className={`p-0.5 font-heading block w-full text-lg text-gray-900 font-medium rounded-lg ${
                            link.isPrimary
                              ? "group relative bg-gradient-cyan overflow-hidden"
                              : ""
                          }`}>
                          {link.isPrimary ? (
                            <>
                              <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500"></div>
                              <div className="py-2 px-5 bg-white rounded-lg">
                                <p className="relative z-10">{link.text}</p>
                              </div>
                            </>
                          ) : (
                            <div className="py-2 px-5 rounded-10">
                              <p>{link.text}</p>
                            </div>
                          )}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </nav>
    </>
  );
}
