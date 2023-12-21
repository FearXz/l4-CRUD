// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.min.css";
import "./App.css";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MyMain from "./components/MyMain";
import { useState } from "react";

function App() {
  const [valueSearched, setValueSearched] = useState("");

  function handleSearchSubmit(value) {
    setValueSearched(value);
    console.log(value);
  }

  return (
    <>
      <MyHeader callbackSubmit={handleSearchSubmit} />
      <MyMain callbackSubmit={handleSearchSubmit} valueToSearch={valueSearched} />
      <MyFooter />
    </>
  );
}

export default App;
