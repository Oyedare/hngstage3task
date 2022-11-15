import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Footer from './components/Footer/index'
import PlaceToStay from './pages/PlaceToStay'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/placetostay" element={ <PlaceToStay/> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
