import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="tab-pane show active" id="billing-information">
        <div className="row">
          <div className="col-lg-8">
            <h4 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">Billing information</h4>

            <p className="text-muted mb-4">Fill the form below in order to send you the order's invoice.</p>

            <form>
              <div className="grid grid-cols-2 gap-4 mb-20">
                <div className="flex flex-col gap-.5">
                  <label htmlFor="billing-first-name" className="font-titleFont text-base font-semibold text-gray-600">First Name</label>
                  <input className="border border-gray-300 rounded p-2 w-full h-8" type="text" placeholder="Enter your first name" id="billing-first-name" />
                </div>
                <div className="flex flex-col gap-.5">
                  <label htmlFor="billing-last-name" className="font-titleFont text-base font-semibold text-gray-600">Last Name</label>
                  <input className="border border-gray-300 rounded p-2 w-full h-8" type="text" placeholder="Enter your last name" id="billing-last-name" />
                </div>
                <div className="flex flex-col gap-.5">
                  <label htmlFor="billing-email-address" className="font-titleFont text-base font-semibold text-gray-600">Email Address <span className="text-danger">*</span></label>
                  <input className="border border-gray-300 rounded p-2 w-full h-8" type="email" placeholder="Enter your email" id="billing-email-address" />
                </div>
                <div className="flex flex-col gap-.5">
                  <label htmlFor="billing-phone" className="font-titleFont text-base font-semibold text-gray-600">Phone <span className="text-danger">*</span></label>
                  <input className="border border-gray-300 rounded p-2 w-full h-8" type="text" placeholder="(xx) xxx xxxx xxx" id="billing-phone" />
                </div>
                <div className="flex flex-col gap-.5">
                  <label htmlFor="billing-address" className="font-titleFont text-base font-semibold text-gray-600">Address</label>
                  <textarea className="border border-gray-300 rounded p-2 w-full h-15 form-control" placeholder="Enter full address" id="billing-address" ></textarea>
                </div>

                <div className="flex flex-row gap-2 items-center">
                  <input className="border border-gray-300 rounded p-2 w-4 h-4" type="checkbox" id="shipping" /> {/* Checkbox */}
                  <label htmlFor="shipping" className="font-titleFont text-base font-semibold text-gray-600">Shipping <span className="text-danger"></span></label> {/* Teks label */}
                </div>

                
                

                {/* <div className="flex flex-col gap-.5">
                  <label htmlFor="billing-town-city" className="font-titleFont text-base font-semibold text-gray-600">Town / City</label>
                  <input className="border border-gray-300 rounded p-2 w-full h-8" type="text" placeholder="Enter your city name" id="billing-town-city" />
                </div>
                <div className="flex flex-col gap-.5">
                  <label htmlFor="billing-state" className="font-titleFont text-base font-semibold text-gray-600">State</label>
                  <input className="border border-gray-300 rounded p-2 w-full h-8" type="text" placeholder="Enter your state" id="billing-state" />
                </div>
                <div className="flex flex-col gap-.5">
                  <label htmlFor="billing-zip-postal" className="font-titleFont text-base font-semibold text-gray-600">Zip / Postal Code</label>
                  <input className="border border-gray-300 rounded p-2 w-full h-8" type="text" placeholder="Enter your zip code" id="billing-zip-postal" />
                </div> */}

              </div>
                <div className="flex flex-col gap-.5 mb-20">
                  <button className="bg-black -500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded w-auto ml-auto">Next</button>
                </div>
            </form>
          </div>
        </div> {/* end row*/}
      </div>
    </div>
  );
};

export default Payment;
