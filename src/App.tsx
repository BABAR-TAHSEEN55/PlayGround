import Flex from "./Components/Flex";
import GridCard from "./Components/GridCard";
import NavBar from "./Components/NavBar";
import Pricing from "./Components/Pricing";
import { RxHamburgerMenu } from "react-icons/rx";
import Test from "./Components/Test";
import Reff from "./Components/Reff";
import UseTransform from "./Components/Fader";
import Loco from "./Components/Loco";
import ScrollReveal from "./Components/ScrollReveal";
import FloatingCircle from "./Components/FloatingCircle";
import SignUp from "./Components/SignUp";
import EmailVerification from "./Components/EmailVerification.tsx";
import { div } from "framer-motion/client";
import Zustand from "./Components/Zustand.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  // const para =
  //   "It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its chapters compiled in 111 tankōbon volumes as of March 2025. The manga series was licensed for an English language release in North America and the United Kingdom by Viz Media and in Australia by Madman Entertainment. Becoming a media franchise, it has been adapted into a festival film by Production I.G, and an anime series by Toei Animation, which began broadcasting in 1999. Additionally, Toei has developed 14 animated feature films and one original video animation. Several companies have developed various types of merchandising and media, such as a trading card game and video games. Netflix released a live action TV series adaptation in 2023.";
  // const [MenuOpen, setIsMenuOpen] = useState(false);
  // const ToggleMenu = () => {
  //   setIsMenuOpen(!MenuOpen);
  // };
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
    // <nav className="container rounded-full bg-rose-200 w-full">hol</nav>
    // <Test />
    // <Reff />
    // <Fader />
    // <Loco />
    // <ScrollReveal value={para} />
    // ---
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-purple-400 to-pink-300 relative flex items-center justify-center overflow-hidden">
        <FloatingCircle
          color="bg-red-300"
          top="-5%"
          left="10%"
          size="size-64"
          delay={0}
        />
        <FloatingCircle
          color="bg-green-300"
          top="70%"
          left="80%"
          size="size-32"
          delay={0}
        />
        <FloatingCircle
          color="bg-pink-300"
          top="30%"
          left="50%"
          size="size-20"
          delay={0}
        />

        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          {/* <SignUp /> */}
          {/* <EmailVerification /> */}
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
    // <div>
    //   <Zustand />
    // </div>
  );
};

export default App;
