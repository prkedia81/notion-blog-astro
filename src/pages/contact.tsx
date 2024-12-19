import LoadingSpinner from "../components/LoadingSpinner.astro";
import SuccessToast from "../components/SuccessToast";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<ContactForm> = async (data: ContactForm) => {
    // TODO: Handle Submit
    // TODO: Add Error messages
    setIsLoading(true);
    console.log(data);
    // try {
    //   setIsLoading(true);
    //   const res = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (res.status == 200) {
    //     setSubmitted(true);
    //   } else {
    //     throw new Error(`${res.status} - ${res.body}`);
    //   }
    // } catch (error) {
    //   if (error instanceof Error) {
    //     console.error(error.message);
    //   }
    // }

    setIsLoading(false);
  };

  return (
    <>
      <section className="relative py-8 overflow-hidden">
        <div className="relative z-10 container mx-auto px-8">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-6">
              <div className="md:max-w-lg mb-6 md:mb-14">
                <h2 className="mb-3 md:mb-7 font-heading font-semibold text-6xl sm:text-7xl">
                  Get in touch
                </h2>
                <p className="text-gray-500 text-lg">
                  Having doubts about Writee? Contact us to get all your queries
                  solved!
                </p>
              </div>
              <div className="flex flex-wrap -m-10">
                <div className="w-full p-10">
                  <div className="md:max-w-xs">
                    <h3 className="mb-2 md:mb-4 font-heading font-medium text-xl">
                      Phone
                    </h3>
                    <p className="text-lg text-gray-500">+91 85840 11454</p>
                  </div>
                </div>
                <div className="w-full p-10">
                  <div className="md:max-w-xs">
                    <h3 className="mb-2 md:mb-4 font-heading font-medium text-xl">
                      Email
                    </h3>
                    <p className="text-lg text-gray-500">hello@writee.in</p>
                    <p className="text-lg text-gray-500">directors@writee.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 pt-7 md:pt-0 md:p-6">
              <div className="md:p-8 max-w-lg mx-auto rounded-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-wrap max-w-xl mx-auto">
                    <div className="w-full mb-5">
                      <input
                        className="w-full px-5 py-4 text-gray-900 text-base bg-transparent border border-gray-700 outline-none focus:ring-1 focus:ring-indigo-500 placeholder-gray-400 rounded"
                        type="text"
                        autoComplete="given-name"
                        placeholder="Your full name*"
                        {...register("name", { required: true })}
                      />
                    </div>
                    <div className="w-full mb-5">
                      <input
                        {...register("email", { required: true })}
                        autoComplete="email"
                        className="w-full px-5 py-4 text-gray-900 text-base bg-transparent border border-gray-700 outline-none focus:ring-1 focus:ring-indigo-500 placeholder-gray-400 rounded"
                        type="email"
                        placeholder="Your email address"
                      />
                    </div>
                    <div className="w-full mb-5">
                      <textarea
                        className="w-full h-40 px-5 py-4 text-gray-900 text-base bg-transparent border border-gray-700 outline-none focus:ring-1 focus:ring-indigo-500 placeholder-gray-400 resize-none rounded"
                        placeholder="Write message"
                        {...register("message", { required: true })}></textarea>
                    </div>
                    <div className="w-full mb-5">
                      <div className="group relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-cyan2 opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300"></div>
                        <button
                          type="submit"
                          className="md:p-1 w-full font-heading font-semibold text-xs text-gray-900 uppercase tracking-px overflow-hidden rounded-md">
                          <div className="relative p-5 px-11 border-2 border-gray-700 hover:bg-gray-50 overflow-hidden rounded-md">
                            <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500"></div>
                            <p className="relative z-10">
                              {isLoading ? (
                                <LoadingSpinner color="text-white" />
                              ) : (
                                "Send Message"
                              )}
                            </p>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="max-w-xs mx-auto text-sm text-gray-400 text-center">
                        By clicking the send button, you agree with our Terms
                        &amp; Conditions
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {submitted && (
        <SuccessToast message="Message sent! We'll get back to you in 1-3 business days" />
      )}
    </>
  );
}

export default ContactForm;
