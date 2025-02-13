import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <div className="flex relative flex-col px-6 pb-16 mt-80 w-full text-base leading-6 text-gray-800 aspect-[1.083]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d33b7abf75febd515e00edeb56063dd5dddae92af9206f17f6d0bab76d7a0d5?placeholderIfAbsent=true&apiKey=64f1385746784eecb2fade3c39832bd3"
          className="object-cover absolute inset-0 size-full"
          alt="Footer background"
        />
        <div className="flex relative z-10 flex-col mt-0">
          <div>
            SRMD-USA is a registered public charity in the USA under IRC
            Sections 509(a)(1) and 170(b)(1)(A) (i). All donations are
            tax-deductible to the extent allowed by law. Any unused funds may be
            allocated toward the organization's general operations or other
            mission-driven programs and activities.
          </div>
          <div className="mt-4">
            Payment by Credit card via PayPal: Please use this link to submit
            your sponsorship contribution via Paypal Giving Fund (a 501(c)(3)
            organization) on behalf of SRMD-USA. All major credit cards are
            accepted. The donation receipt will be issued by the PayPal Giving
            Fund.
          </div>
          <div className="mt-4">
            Laabh assigned by the Sponsorship team will be final and
            communicated before the event.
          </div>
          <div className="mt-4">
            For any inquiries regarding laabhs/donations, please contact Mitesh
            Kamdar at 1-847-736-7982.
          </div>
        </div>
      </div>
      <div className="self-center mt-16 text-3xl font-bold leading-none text-center text-rose-500">
        Contact
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-gray-800">
        For any questions regarding Registration and Accomodation, please email{" "}
        <a href="mailto:registration@srmdusa.org" className="underline">
          registration@srmdusa.org
        </a>{" "}
        or contact us on WhatsApp at +1 862-348-9985
      </div>
      <button className="gap-2.5 self-center px-6 py-3 mt-8 text-xl font-bold leading-tight text-center text-white bg-rose-500 rounded-full">
        Register Now
      </button>
      <div className="overflow-hidden px-16 py-6 mt-16 w-full text-xl font-semibold leading-relaxed text-white bg-rose-500">
        Footer Text
      </div>
    </>
  );
};

export default Footer;
