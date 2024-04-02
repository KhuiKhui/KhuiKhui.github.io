import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Sponsors from "./components/Sponsors/Sponsors";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "TEDxYouth PTNK";
  }, []);
  return (
    <>
      <Header />
      <Body />

      <Footer />
    </>
  );
}

export default App;
