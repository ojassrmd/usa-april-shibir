import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-24 bg-gradient-to-b from-rose-50 to-rose-100 pt-16 pb-12">
      {/* Contact Section */}
      <div className="max-w-[600px] mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold text-rose-500 text-center mb-8">Contact</h2>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg space-y-8">
          {/* Registration Contact */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Registration & Accommodation</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 mb-2">Email us at</p>
                <a
                  href="mailto:registration@srmdusa.org"
                  className="text-rose-500 hover:text-rose-600 font-semibold text-lg"
                >
                  registration@srmdusa.org
                </a>
              </div>
              <div>
                <p className="text-gray-700 mb-2">WhatsApp</p>
                <a href="https://wa.me/18623489985" className="text-rose-500 hover:text-rose-600 font-semibold text-lg">
                  +1 862-348-9985
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

          {/* Sponsorship Contact */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Laabhs & Donations</h3>
            <p className="text-gray-700 mb-2">Contact Mitesh Kamdar at</p>
            <a href="tel:+18477367982" className="text-rose-500 hover:text-rose-600 font-semibold text-lg">
              1-847-736-7982
            </a>
          </div>
        </div>
      </div>

      {/* Tax Information Section */}
      <div className="max-w-[600px] mx-auto px-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">Terms & Conditions</h3>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              SRMD-USA is a registered public charity in the USA under IRC Sections 509(a)(1) and 170(b)(1)(A) (i). All
              donations are tax-deductible to the extent allowed by law. Any unused funds may be allocated toward the
              organization's general operations or other mission-driven programs and activities.
            </p>
            <div className="border-t border-gray-100 pt-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold">Payment by Credit card via PayPal:</span> Please use this link to submit
                your sponsorship contribution via Paypal Giving Fund (a 501(c)(3) organization) on behalf of SRMD-USA.
                All major credit cards are accepted. The donation receipt will be issued by the PayPal Giving Fund.
              </p>
              <p className="text-gray-700">
                Laabh assigned by the Sponsorship team will be final and communicated before the event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
