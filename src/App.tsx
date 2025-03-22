import { useState } from "react";
import Flex from "./Components/Flex";
import GridCard from "./Components/GridCard";
import NavBar from "./Components/NavBar";
import Pricing from "./Components/Pricing";
import { RxHamburgerMenu } from "react-icons/rx";

const App = () => {
  const [MenuOpen, setIsMenuOpen] = useState(false);
  const ToggleMenu = () => {
    setIsMenuOpen(!MenuOpen);
  };
  return (
    // <section className="md:grid grid-cols-3  m-2 max-w-[1200px] mx-auto ">
    //   <Pricing name="Free" Servies={["Super Legend", "Haggue on Potty"]} />
    //   {/* <GridCard /> */}
    //   {/* <Flex /> */}
    // </section>
    // <>
    //   {/* <NavBar /> */}
    //   <div className="container mx-auto max-w-lg bg-rose-300 mt-2 h-20 rounded-full flex items-center justify-between p-2">
    //     My Container{" "}
    //     <div className="flex items-center justify-center">Super</div>
    //     <div>Legeng</div>
    //   </div>
    // </>
    //   <nav className="container mx-auto max-w-md p-2 text-black font-mono">
    //     <div className="flex justify-between max-w-lg mt-2 bg-rose-200 rounded-full items-center p-4">
    //       <div>Logo</div>
    //       <div className={` ${MenuOpen ? "block" : "hidden"}  lg:block `}>
    //         <div className="flex justify-between  items-center gap-24">
    //           <div>Home</div>
    //           <div>Super</div>
    //         </div>
    //       </div>
    //       <div>About</div>

    //       <button
    //         className="flex lg:hidden items-center sm:block bg-red "
    //         onClick={ToggleMenu}
    //       >
    //         <RxHamburgerMenu />
    //       </button>
    //     </div>
    //   </nav>
    <></>
  );
};

export default App;
