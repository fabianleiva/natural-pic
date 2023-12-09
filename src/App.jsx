import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
