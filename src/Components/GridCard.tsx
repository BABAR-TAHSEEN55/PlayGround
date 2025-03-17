const GridCard = () => {
  return (
    <>
      <section className="grid m-2 lg:grid-cols-2 place-items-center place-content-center pr-4">
        <div className="lg:bg-blue-500">
          <img
            src="https://imgs.search.brave.com/FtJ0f51iAzqo8bsJVqsJNiiH-LgnTHdYXOomJwCmL9w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w"
            alt="Flowers"
            className="w-full rounded-xl lg:hover:shadow"
          />
        </div>
        <div className="text-white text-center ">
          <h1 className="text-4xl mt-4 font-mono text-rose-200">Flowers</h1>
          <p className="text-lg font-mono tracking-wide py-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex
            quisquam ullam, libero iusto fuga blanditiis animi reprehenderit in
            sunt tenetur tempora laborum, quia, officiis quae eaque
            necessitatibus unde alias?
          </p>
          <button className="bg-blue-200 rounded-full text-purple-700 text-sm p-2 md:text-xl md:p-2 md:hover:bg-pink-700">
            Follow Me
          </button>
        </div>
      </section>
    </>
  );
};

export default GridCard;
