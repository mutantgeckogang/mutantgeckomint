import Navbar from "./components/Navbar";
import ChangeName from "./components/ChangeName";

const App = ()extends Component {
  render() {
    const myStyle={
        backgroundImage: 
 "url('/mint.png')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return (
    <div className="bg-black min-h-screen" style={myStyle} >
      <Navbar />
      <div className="container pt-10 mx-auto" style={myStyle} >
        <div className="flex justify-center" style={myStyle} >
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-red-300 to-green-400">
            Hello, Mutant Gecko Gang!
          </h1>
        </div>
        <div className="mt-20 flex justify-center" style={myStyle} >
          <ChangeName />
        </div>
      </div>
    </div>
  );
};

export default App;
