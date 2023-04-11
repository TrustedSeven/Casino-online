import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Casino from "./pages/casino";
import ESports from "./pages/eSports";
import Lottery from "./pages/lottery";
import Scratchcards from "./pages/scratchcards";
import Virtual from "./pages/virtual";
import NotFound from "./pages/notfound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Casino />} />
        <Route path="/esports" element={<ESports />} />
        <Route path="/lottery" element={<Lottery />} />
        <Route path="/scratchcards" element={<Scratchcards />} />
        <Route path="/virtual" element={<Virtual />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
