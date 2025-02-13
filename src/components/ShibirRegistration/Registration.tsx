import React from "react";

const Registration: React.FC = () => {
  return (
    <div className="flex flex-col pl-6 mt-16 w-full">
      <div className="mt-16 text-3xl font-bold leading-none text-center text-rose-500">
        Registration Process
      </div>
      <div className="flex gap-10 justify-between items-center self-stretch mt-8 w-full text-xl whitespace-nowrap">
        <div className="flex gap-3 items-center self-stretch my-auto">
          <div className="self-stretch px-2 my-auto w-9 h-9 font-bold leading-none text-center text-rose-500 bg-white border border-rose-500 border-dashed rounded-[32px]">
            1
          </div>
          <div className="self-stretch my-auto font-medium leading-tight text-black">
            Registration
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5230e4ad1131185e0cc92301f4627c9e2596fd1893f0ca43f00359c2918b15a0?placeholderIfAbsent=true&apiKey=64f1385746784eecb2fade3c39832bd3"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt="Arrow pointing down"
        />
      </div>
      <div className="self-stretch mt-4 text-sm leading-6 text-black">
        Complete the Registration Form using the registration link provided
        above. After your payment is successful, you will receive a Registration
        Confirmation email with a customized link to the On-site Accommodation
        Form, with your details pre-filled.
      </div>
      <div className="flex gap-3 items-center self-start mt-8 text-xl">
        <div className="self-stretch px-2 my-auto w-9 h-9 font-bold leading-none text-center text-rose-500 whitespace-nowrap bg-white border border-rose-500 border-dashed rounded-[32px]">
          2
        </div>
        <div className="self-stretch my-auto font-medium leading-6 text-black w-[273px]">
          On-site Accommodation Request
        </div>
      </div>
      <div className="self-stretch mt-4 text-sm leading-6 text-black">
        Using the link in your Registration Confirmation email, submit your
        On-site Accommodation Form. By default, your request will be set to
        &quot;Under Consideration&quot; status due to limited availability. If
        your accommodation request is approved, you will receive a Payment Link
        to confirm your stay. You must complete the payment within 72 hours (3
        days) to secure your accommodation.
      </div>
      <div className="flex gap-3 items-center self-start mt-8 text-xl">
        <div className="self-stretch px-2 my-auto w-9 h-9 font-bold leading-none text-center text-rose-500 whitespace-nowrap bg-white border border-rose-500 border-dashed rounded-[32px]">
          3
        </div>
        <div className="self-stretch my-auto font-medium leading-6 text-black w-[257px]">
          On-site Accommodation Confirmation
        </div>
      </div>
      <div className="self-stretch mt-4 text-sm leading-6 text-black">
        If approved, you will receive a Payment Link to confirm your stay.
        Complete the payment within 72 hours to secure your accommodation.
        On-site Accommodation priority will be given to participants traveling
        from outside the Northeast U.S (based on availability).
      </div>
      <button className="gap-2.5 self-stretch px-6 py-3 mt-16 text-xl font-bold leading-tight text-center text-white bg-rose-500 rounded-full">
        Register Now
      </button>
    </div>
  );
};

export default Registration;
