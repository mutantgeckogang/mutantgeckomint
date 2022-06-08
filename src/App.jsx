import Navbar from "./components/Navbar";
import ChangeName from "./components/ChangeName";

const App = () => {
  return (
    <div className="bg-black min-h-screen">
    <Navbar />
    <img src="https://mutantgeckogang.xyz/assets/index.png" />
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
