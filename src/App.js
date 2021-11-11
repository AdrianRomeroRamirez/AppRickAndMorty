import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import "./App.css";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
