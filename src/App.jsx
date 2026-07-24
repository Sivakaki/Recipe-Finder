import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { Detail } from "./pages/detail";
import { Favorites } from "./pages/favorites";
import { Recent } from "./pages/recent";
import "./css/app.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="app-main">
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
        <Home />
        <Detail />
        <Favorites />
        <Recent />
      </main>
    </div>
  );
}

export default App;
