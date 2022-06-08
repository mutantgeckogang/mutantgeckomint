import Navbar from "./components/Navbar";
import ChangeName from "./components/ChangeName";

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="container pt-10 mx-auto">
        <img src="https://mutantgeckogang.xyz/assets/index.png" />
        <div className="flex justify-center">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-red-300 to-green-400">
            Hello, Mutant Gecko Gang!
          </h1><br />
          <img src="https://mutantgeckogang.xyz/assets/index.png" />
        </div>
        <div className="mt-20 flex justify-center">
          <ChangeName />
        </div>
      </div>
    </div>
  );
};

export default App;
