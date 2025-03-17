import { SiTicktick } from "react-icons/si";

const Pricing = () => {
  return (
    <section className="md:grid grid-cols-3  m-2 ">
      <section className="m-2 md:m-2 grid h-full p-4 rounded-lg text-justify border border-gray bg--100 backdrop-blur-lg">
        <div className="w-3/4 bgblue-400 flex flex-col justify-between border-b-gray-800">
          <div>
            <div>
              <h2 className="text-3xl">Free</h2>
            </div>
            <div>
              <h1 className="lg:text-7xl py-4">$0</h1>
            </div>
            <div className="m-2 flex flex-row">
              <p className="px-2">
                <SiTicktick />
              </p>
              <p>Upto 3 Public Projects</p>
            </div>

            <div className="m-2 flex flex-row">
              <p className="px-2">
                <SiTicktick />
              </p>
              <p>Upto 3 Public Projects</p>
            </div>
          </div>
          <div className="py-6 mt-auto">
            <button className="w-full border  border-black rounded-lg text-2xl m-4 p-6">
              {" "}
              Try For Free{" "}
            </button>
          </div>
        </div>
      </section>

      <section className="m-2 grid h-full p-4 rounded-lg text-justify border border-gray bg-blue-100 backdrop-blur-lg">
        <div className="w-3/4 bgblue-400 flex flex-col justify-between">
          <div>
            <div>
              <h2 className="text-3xl">Builder</h2>
            </div>
            <div>
              <h1 className="text-7xl py-4">$38</h1>
            </div>
            <div className="m-2 flex flex-row">
              <p className="px-2">
                <SiTicktick />
              </p>
              <p>Upto asdfasdfasdfa sdfa mt-auto3 Public Projects</p>
            </div>

            <div className="m-2 flex flex-row">
              <p className="px-2">
                <SiTicktick />
              </p>
              <p>Upto 3 Public Projects</p>
            </div>
            <div className="m-2 flex flex-row">
              <p className="px-2">
                <SiTicktick />
              </p>
              <p>Upto 3 Public Projects</p>
            </div>
            <div className="m-2 flex flex-row">
              <p className="px-2">
                <SiTicktick />
              </p>
              <p>Upto 3 Public Projects</p>
            </div>
          </div>
          <div className="py-10 mt-auto">
            <button className="w-full border  border-black rounded-lg text-2xl m-4 p-6 hover:bg-blue-700">
              {" "}
              Sign Up
            </button>
          </div>
        </div>
      </section>

      <section className="m-2 md:m-2 grid h-full p-4 rounded-lg text-justify border border-gray bg-amber-100 backdrop-blur-lg">
        <div className="w-3/4 bgblue-400 flex flex-col justify-between">
          <div>
            <div>
              <h2 className="text-3xl">Advanced</h2>
            </div>
            <div>
              <h1 className="text-7xl py-4">$99</h1>
            </div>
            <div className="m-2 flex flex-row">
              <p className="px-2">
                <SiTicktick />
              </p>
              <p>Custom Branding</p>
            </div>

            <div className="m-2 flex flex-row">
              <p className="px-2">
                <SiTicktick />
              </p>
              <p>Unlimited Public and Private Projects</p>
            </div>
            <div className="m-2 flex flex-row">
              <p className="px-2">
                <SiTicktick />
              </p>
              <p>Unlimited Published iOS and Android Apps</p>
            </div>
            <div className="m-2 flex flex-row">
              <p className="px-2">
                <SiTicktick />
              </p>
              <p>In-App Payments and Ads</p>
            </div>
            <div className="m-2 flex flex-row">
              <p className="px-2">
                <SiTicktick />
              </p>
              <p>Collaboration</p>
            </div>
            <div className="m-2 flex flex-row">
              <p className="px-2">
                <SiTicktick />
              </p>
              <p>Priority Support</p>
            </div>
          </div>
          <div className="py-10 mt-auto">
            <button className="w-full border  border-black rounded-lg text-2xl m-4 p-6">
              {" "}
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Pricing;
