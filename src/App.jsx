import Navbar from "./components/Navbar";
import ChangeName from "./components/ChangeName";


const App = () => {
  return (
    <div className="bg-black min-h-screen">
    <Navbar />
    <center><img src="https://mutantgeckogang.xyz/assets/IMG_4299.PNG" width="512" /></center>
    <div className="container pt-10 mx-auto">
        <div className="flex justify-center">
    <ChangeName />
    <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-300 to-red-400">
            3132 / 4444
          </h1>
        </div>
         <div className="mt-20 flex justify-center" >
          
        </div>
      </div>
    </div>
  );
};

export default App;
