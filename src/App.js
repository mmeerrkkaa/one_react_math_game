import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbar from "./components/UI/navbar";
import {Route, Routes} from "react-router-dom";
import SettingsPages from "./pages/SettingsPages";
import GamePages from "./pages/GamePages";

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Navbar />}>
                  <Route path="settings" element={<SettingsPages />} />
                  <Route path='game' element={<GamePages />} />
              </Route>
          </Routes>

      </>
  )
}

export default App;