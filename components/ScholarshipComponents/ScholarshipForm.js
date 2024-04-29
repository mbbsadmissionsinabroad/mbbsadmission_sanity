/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function Example() {
  return (
    <form>
      <div className="space-y-12 sm:px-32 py-10 px-8">
        <section className="text-gray-600 body-font sm:mt-30">
          <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900">
              PLEASE FILL THIS <span className="text-red-600">FORM</span>
            </h1>
            {/* <p className="lg:w-2/3 mx-auto font-semibold leading-relaxed text-base text-gray-500">
              TAKE YOUR FIRST STEP TOWARDS A BRIGHT FUTURE
            </p> */}
          </div>
        </section>
        <div className="border-b border-gray-900/10 pb-12"></div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          {/* <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p> */}

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required={true}
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  required={true}
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="father-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Father's Name *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required={true}
                  name="father-name"
                  id="father-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="mother-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mother's name *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required={true}
                  name="mother-name"
                  id="mother-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="mobile-number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Student Mobile Number *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required={true}
                  name="mobile-number"
                  id="mobile-number"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="dob"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date of Birth *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required={true}
                  name="dob"
                  id="dob"
                  placeholder="DD/MM/YYYY"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="father-number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Father's Mobile Number *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required={true}
                  name="father-number"
                  id="father-number"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="mother-number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mother's Mobile Number *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required={true}
                  name="mother-number"
                  id="mother-number"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="percentage"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                10th class/ Grade / Percentage *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required={true}
                  name="percentage"
                  id="percentage"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="doctor-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Doctor Dreams representative Name *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="doctor-name"
                  required={true}
                  id="doctor-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address *
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  required={true}
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Complete address *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  required={true}
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required={true}
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State / Province *
              </label>
              <div className="mt-2">
                <input
                  required={true}
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  required={true}
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6 p-20">
        <div className="sm:col-span-2">
          <label
            htmlFor="postal-code"
            className="block text-sm font-medium leading-6 text-gray-900 ml-6"
          >
            * Fee ₹ 250.00
          </label>
        </div>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 px-20"
        >
          PAY NOW
        </button>
      </div>
    </form>
  );
}
