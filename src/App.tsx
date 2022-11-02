import logo from "./assets/logo-big.png";
import { GiHamburgerMenu } from "react-icons/gi";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-200 py-2 px-12 fixed top-0 left-0 right-0 h-24">
      <div className="flex items-center">
        <GiHamburgerMenu className="text-2xl mr-44 cursor-pointer" />
        <img
          src={logo}
          alt="logo"
          className="h-24 cursor-pointer transition-all delay-200 hover:scale-105"
        />
      </div>
      <div className="flex items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Login
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
};

const SideBar = () => {
  return (
    <div className="bg-gray-200 w-64 h-screen fixed top-24 left-0 bottom-0"></div>
  );
};

function App() {
  return (
    <main>
      <TopBar />
      <SideBar />
    </main>
  );
}

export default App;
