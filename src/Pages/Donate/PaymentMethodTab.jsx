import { Tab } from "@headlessui/react";
import ssl from "../../assets/ssl-thumb.png";
import gPlay from "../../assets/G-play-image.png";
import debitCard from "../../assets/debit-icon.png";

const PaymentMethodTab = () => {
  return (
    <div className=" py-5">
      <Tab.Group>
        <Tab.List className="grid gap-3">
          <Tab className="border rounded-xl hover:shadow-xl">
            <div className=" flex items-center gap-10">
              <div className="avatar">
                <div className="w-24 mask mask-hexagon">
                  <img src={ssl} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800">E-Payment</h3>
            </div>
          </Tab>

          <Tab className="border rounded-xl hover:shadow-xl">
            <div className=" flex items-center gap-10">
              <div className="avatar">
                <div className="w-24 mask mask-hexagon">
                  <img src={gPlay} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800">Google Play</h3>
            </div>
          </Tab>
          <Tab className="border rounded-xl hover:shadow-xl">
            <div className=" flex items-center gap-10">
              <div className="avatar">
                <div className="w-24 mask mask-hexagon">
                  <img src={debitCard} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                Credit or debit
              </h3>
            </div>
          </Tab>
        </Tab.List>
        <section className="py-8">
          <Tab.Panels>
            <Tab.Panel>Content 1</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </section>
      </Tab.Group>
    </div>
  );
};

export default PaymentMethodTab;
