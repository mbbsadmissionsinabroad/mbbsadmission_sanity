import React from "react";
import Image from "next/image";
import { urlFor } from "../../lib/client";

const index = ({ sliderData }) => {
  const data = typeof sliderData === "object" && sliderData.slider;
  return (
    <section className="text-gray-600 body-font relative">
      <div className="mx-auto flex-wrap">
        <div className="lg:w-full md:w-full bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start">
          {typeof sliderData === "object" && sliderData.slider ? (
            <Image
              src={urlFor(data[0].sliderImage).url()}
              className="opacity-30"
              alt="Background Image"
              layout="fill"
              objectFit="fill"
              quality={100}
            />
          ) : null}
          <div class="mx-auto flex flex-wrap items-center">
            <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-opacity-100">
              <h1 class="title-font sm:text-5xl text-2xl font-bold text-blue-900">
                Embark on Your Medical Journey with Our Advisory by Your Side
              </h1>
              <p class="leading-relaxed mt-4 text-black">
                No more confusion about your career prospects will haunt you!
                Our advisors are here to lend you effective counsel on the
                career path you want to embark on. You are to have a clearer
                vision with our advisors. We ensure guaranteed success.
              </p>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 py-4 mt-8 md:mt-0 z-10 px-4 rounded-lg">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-4">
                Request Free Consultation
              </h2>
              <div className="relative mb-4">
                <input
                  placeholder="Enter your Name"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <input
                  placeholder="Enter your Email"
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <input
                  placeholder="Enter your Phone"
                  type="phone"
                  id="phone"
                  name="phone"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <textarea
                  placeholder="Enter your Message"
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border- v focus:ring-2 focus:ring-blue-400 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">
                SEND REQUEST
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
