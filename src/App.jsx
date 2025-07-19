import React from "react";
import Header from "./components/Header";
import DefaultScreen from "./components/DefaultScreen";

const App = () => {
  return (
    <div className="app">
      <Header />
      <DefaultScreen/>
      <p className="copyright-text">&copy; 2025 KIRA. All Rights Reserved</p>
    </div>
  );
};

export default App;
