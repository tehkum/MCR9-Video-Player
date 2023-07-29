import "./App.css";
import AllRoutes from "./Routes/routes";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <div className="head-grid">
        <Header />
      </div>
        <div className="nav-bar-grid">
          <Navbar />
        </div>
        <div className="pages-grid">
          <AllRoutes />
        </div>
      </div>
  );
}

export default App;
