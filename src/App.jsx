import Navbar from "./components/Navbar";
import ChangeName from "./components/ChangeName";


const App = () => {
  return (
    <div className="bg-black min-h-screen">
    <Navbar />
    <center><img src="https://mutantgeckogang.xyz/assets/sold_out.png" width="512" /></center>
    <div className="container pt-10 mx-auto">
        <div className="flex justify-center">
        </div>
         <div className="mt-20 flex justify-center" >
           <h3 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-300 to-green-500">
            4444/4444 
          </h3>
        </div>
      </div>
    </div>
  );
};

export default App;
