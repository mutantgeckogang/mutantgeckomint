import Navbar from "./components/Navbar";
import ChangeName from "./components/ChangeName";

const App = () => {
  return (
    <div className="bg-black min-h-screen">
    <Navbar />
     <button
        onClick={() => {
          changeName(name);
        }}
        className="bg-green-500 px-12 py-4 rounded-sm text-xl font-semibold uppercase text-white cursor-pointer"
      >
        MINT
      </button>
    <center><img src="https://mutantgeckogang.xyz/assets/mint.png" /></center>
 <button
        onClick={() => {
          changeName(name);
        }}
        className="bg-green-500 px-12 py-4 rounded-sm text-xl font-semibold uppercase text-white cursor-pointer"
      >
        MINT
      </button>
    <div className="container pt-10 mx-auto">
        <div className="flex justify-center">
        </div>
        <div className="mt-20 flex justify-center">
          <ChangeName />
        </div>
      </div>
    </div>
  );
};

export default App;
