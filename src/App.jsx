import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { Detail } from "./pages/detail";
import { Favorites } from "./pages/favorites";
import { Recent } from "./pages/recent";
import { ThemeProvider } from "./context/themeContext";
import { FavoriteProvider } from "./context/favoriteContext";
import { RecentProvider } from "./context/recentContext";
import "./css/app.css";

function App() {
  return (
    <ThemeProvider>
      <FavoriteProvider>
        <RecentProvider>
          <div className="app">
            <Navbar />

            <main className="app-main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/recent" element={<Recent />} />
              </Routes>
            </main>
          </div>
        </RecentProvider>
      </FavoriteProvider>
    </ThemeProvider>
  );
}

export default App;
