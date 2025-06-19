import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Confirmation from "../pages/Confirmation";
import SeatSelection from "../pages/SeatSelection";
import Movie from "../pages/Movie";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sessao/:id/:horario" element={<SeatSelection />} />
      <Route path="/confirmacao" element={<Confirmation />} />
      <Route path="/filme/:id" element={<Movie />} />
    
    </Routes>
  );
}
