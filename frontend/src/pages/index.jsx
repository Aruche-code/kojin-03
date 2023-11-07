import AppBar from "../components/AppBar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <AppBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 p-4 overflow-auto"></div>
      </div>
    </div>
  );
};

export default Home;
