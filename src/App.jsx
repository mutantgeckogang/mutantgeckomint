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
        </div>
         <div className="mt-20 flex justify-center" >
           <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-300 to-green-500">
            
          </h2>
        </div>
      </div>
    </div>
  );
};

export default App;
