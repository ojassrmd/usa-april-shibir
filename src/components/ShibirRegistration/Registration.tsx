import React from "react";

const Registration: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-[#FFF0F0] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Title Section */}
      <h2 className="text-4xl sm:text-5xl font-frank font-bold text-[#F43F5E] text-center mb-12">
        Registration Process
      </h2>

      {/* Registration Steps */}
      <div className="w-full max-w-3xl mx-auto space-y-12">
        {/* Step 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#F43F5E] border-dashed flex items-center justify-center">
              <span className="text-[#F43F5E] font-frank font-bold">1</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-frank font-medium">Registration</h3>
          </div>
          <div className="relative pl-14">
            <div className="text-gray-700 font-poppins text-base sm:text-lg leading-relaxed">
              Complete the Registration Form using the registration link provided above. After your payment is
              successful, you will receive a Registration Confirmation email with a customized link to the On-site
              Accommodation Form, with your details pre-filled.
            </div>
            <div className="absolute left-6 top-full h-8 w-px bg-[#F43F5E] opacity-50"></div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#F43F5E] border-dashed flex items-center justify-center">
              <span className="text-[#F43F5E] font-frank font-bold">2</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-frank font-medium">On-site Accommodation Request</h3>
          </div>
          <div className="relative pl-14">
            <div className="text-gray-700 font-poppins text-base sm:text-lg leading-relaxed">
              Using the link in your Registration Confirmation email, submit your On-site Accommodation Form. By
              default, your request will be set to "Under Consideration" status due to limited availability. If your
              accommodation request is approved, you will receive a Payment Link to confirm your stay. You must complete
              the payment within 72 hours (3 days) to secure your accommodation.
            </div>
            <div className="absolute left-6 top-full h-8 w-px bg-[#F43F5E] opacity-50"></div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#F43F5E] border-dashed flex items-center justify-center">
              <span className="text-[#F43F5E] font-frank font-bold">3</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-frank font-medium">On-site Accommodation Confirmation</h3>
          </div>
          <div className="pl-14">
            <div className="text-gray-700 font-poppins text-base sm:text-lg leading-relaxed">
              If approved, you will receive a Payment Link to confirm your stay. Complete the payment within 72 hours to
              secure your accommodation. On-site Accommodation priority will be given to participants traveling from
              outside the Northeast U.S (based on availability).
            </div>
          </div>
        </div>
      </div>

      {/* Register Button */}
      <button className="mt-16 px-12 py-4 bg-[#F43F5E] text-white rounded-full font-frank text-xl font-bold hover:bg-rose-600 transition-colors">
        Register Now
      </button>
    </div>
  );
};

export default Registration;
