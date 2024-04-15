import React from "react";
import Image from "next/image";
import { urlFor } from "../../lib/client";

const index = ({ sliderData }) => {
  const data = typeof sliderData === "object" && sliderData.slider;
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
  //       <div className="relative w-full h-full flex">
  //         <div className="w-1/2">
  //           {typeof sliderData === "object" && sliderData.slider ? (
  //             <Image
  //               src={urlFor(sliderData[0].sliderImage).url()}
  //               alt="Background Image"
  //               layout="fill"
  //               objectFit="cover"
  //               quality={100}
  //             />
  //           ) : null}
  //         </div>
  //         <div className="w-1/2 flex items-center justify-center">
  //           <div className="bg-white p-8 rounded-lg shadow-md">
  //             <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
  //             <form action="#" method="POST">
  //               <div className="mb-4">
  //                 <label
  //                   htmlFor="name"
  //                   className="block text-gray-700 font-semibold mb-2"
  //                 >
  //                   Name
  //                 </label>
  //                 <input
  //                   type="text"
  //                   id="name"
  //                   name="name"
  //                   className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
  //                 />
  //               </div>
  //               <div className="mb-4">
  //                 <label
  //                   htmlFor="email"
  //                   className="block text-gray-700 font-semibold mb-2"
  //                 >
  //                   Email
  //                 </label>
  //                 <input
  //                   type="email"
  //                   id="email"
  //                   name="email"
  //                   className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
  //                 />
  //               </div>
  //               <div className="mb-4">
  //                 <label
  //                   htmlFor="message"
  //                   className="block text-gray-700 font-semibold mb-2"
  //                 >
  //                   Message
  //                 </label>
  //                 <textarea
  //                   id="message"
  //                   name="message"
  //                   rows="4"
  //                   className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
  //                 ></textarea>
  //               </div>
  //               <button
  //                 type="submit"
  //                 className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
  //               >
  //                 Submit
  //               </button>
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );

  return (
    <section className="text-gray-600 body-font relative">
      <div className="mx-auto flex-wrap">
        <div className="lg:w-full md:w-full bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
          {/* <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe> */}
          {typeof sliderData === "object" && sliderData.slider ? (
            <Image
              src={urlFor(data[0].sliderImage).url()}
              className="opacity-70"
              alt="Background Image"
              layout="fill"
              objectFit="fill"
              quality={100}
            />
          ) : null}
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
    </section>
  );
};

export default index;
