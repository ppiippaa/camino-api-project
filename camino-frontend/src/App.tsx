import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ApiPage from "./pages/ApiPage";
import NotFountPage from "./pages/NotFountPage";
import MapPage from "./pages/MapPage";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App text-grey text-center">
            <NavBar />
            <Routes>
                <Route path='/about' element={<AboutPage />}/>
                <Route path='/' element={<HomePage />}/>
                <Route path='/map' element={<MapPage />}/>
                <Route path='/api' element={<ApiPage />}/>
                <Route path='*' element={<NotFountPage />}/>
                <Route path='camino-api-project' element={<HomePage />}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
