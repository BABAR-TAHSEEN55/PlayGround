import { SiTicktick } from "react-icons/si";
interface PricingProps {
  name: string;
  Servies: string[];
}
const Pricing = ({ name, Servies }: PricingProps) => {
  return (
    <>
      <section className="m-2 md:m-2 grid h-full p-4 rounded-lg text-justify border border-gray bg--100 backdrop-blur-lg max-w-[350px] mx-auto">
        <div className="w-3/4 bgblue-400 flex flex-col justify-between border-b-gray-800">
          <div>
            <div>
              <h2 className="text-3xl">{name}</h2>
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
              {Servies.map((service, index) => (
                <p>{service}</p>
              ))}
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
              <h2 className="text-3xl">{name}</h2>
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
    </>
  );
};

export default Pricing;
