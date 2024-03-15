// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";

const NavigateToExternalUrl = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return null; // or any other content you want to render
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Header />
            <Main />
            <Footer />
          </>
        } />
        <Route
          path="/login"
          element={<NavigateToExternalUrl url="https://www.irrecordings.com/SourceCode" />}
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
