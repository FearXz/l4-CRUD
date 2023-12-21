// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.min.css";
import "./App.css";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MyMain from "./components/MyMain";
import { useState } from "react";

function App() {
  const [valueSearched, setValueSearched] = useState("");
  const [actualPage, setActualPage] = useState("main");
  const [bookObj, setBookObj] = useState({});

  function handleSearchSubmit(value) {
    setValueSearched(value);
    console.log(value);
  }
  function handlePage(page) {
    setActualPage(page);
  }
  function handleBook(bookObj) {
    setBookObj(bookObj);
  }

  return (
    <>
      <MyHeader callbackSubmit={handleSearchSubmit} />
      <MyMain
        callbackBook={handleBook}
        callbackDetailPage={handlePage}
        callbackSubmit={handleSearchSubmit}
        valueToSearch={valueSearched}
      />
      <MyFooter />
    </>
  );
}

export default App;
