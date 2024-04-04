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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />

      <Header />
      <Body />

      <Footer />
    </>
  );
}

export default App;
