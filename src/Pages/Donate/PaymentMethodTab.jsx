import { Tab } from "@headlessui/react";
import CreditCardForm from "./CreditCardForm";
import MobileBanking from "./MobileBanking";
import mobile from "../../../src/assets/mobile-banking.png";
import atm from "../../../src/assets/atm-card.png";

const PaymentMethodTab = () => {
  return (
    <div className=" py-5">
      <Tab.Group>
        <Tab.List className="grid md:flex items-center justify-center gap-4">
          <Tab className="border rounded-xl hover:shadow-xl px-5 py-2 focus:outline-green-600">
            <div className="flex items-center text-center gap-2 justify-center">
              <h3 className="md:text-xl font-medium md:font-semibold text-slate-800">
                মোবাইল ব্যাংকিং
              </h3>
              <img
                className=" w-12 h-auto mx-auto"
                src={mobile}
                alt="Mobile Banking Icon"
              />
            </div>
          </Tab>
          <Tab className="border rounded-xl hover:shadow-xl px-5 py-2 focus:outline-green-600">
            <div className="flex items-center text-center gap-2 justify-center">
              <h3 className="md:text-xl font-medium md:font-semibold text-slate-800">
                ডেবিট ও ক্রেডিট
              </h3>
              <img
                className=" w-12 h-auto mx-auto"
                src={atm}
                alt="ATM Banking Icon"
              />
            </div>
          </Tab>
        </Tab.List>
        <section className="mt-8">
          <Tab.Panels>
            <Tab.Panel>
              <MobileBanking />
            </Tab.Panel>
            <Tab.Panel>
              <CreditCardForm />
            </Tab.Panel>
          </Tab.Panels>
        </section>
      </Tab.Group>
    </div>
  );
};

export default PaymentMethodTab;
