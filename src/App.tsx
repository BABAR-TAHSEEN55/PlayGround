import Flex from "./Components/Flex";
import GridCard from "./Components/GridCard";
import Pricing from "./Components/Pricing";

const App = () => {
  return (
    <section className="md:grid grid-cols-3  m-2 max-w-[1200px] mx-auto ">
      <Pricing name="Free" Servies={["Super Legend", "Haggue on Potty"]} />
      {/* <GridCard /> */}
      {/* <Flex /> */}
    </section>
  );
};

export default App;
