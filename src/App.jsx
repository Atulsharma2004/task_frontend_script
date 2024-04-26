import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "auto" });
  // }, [pathname]);

  return (
    <>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
