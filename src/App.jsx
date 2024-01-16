// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import PokemonDetails from "./Components/PokemonDetails/PokemonDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PokemonDetails" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
