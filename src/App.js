import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Classification from './pages/Classification';
import Library from './pages/Library';
import Ranking from './pages/Ranking';
import Novel from './pages/Novel';
import GenreNovels from './pages/GenreNovels';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/classification" element={<Classification />} />
        <Route path="/library" element={<Library />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/novel" element={<Novel />} />
        <Route path="/genre" element={<GenreNovels />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
