
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Attributes/Navbar';
import Footer from "./Attributes/Footer";
import TextToSpeech from "./Components/TextToSpeech"
import TextToSign from "./Components/TextToSign"
import Learnmodule from "./Components/Learnmodule";
import Registeration from "./Components/Authentication/Registeration";
import Login from "./Components/Authentication/Login";
function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
         <Route path="/" element={<TextToSpeech />} /> 
         <Route path="/texttosign" element={<TextToSign />} /> 
         <Route path="/learnmodule" element={<Learnmodule />} /> 
         <Route path="/auth/registration" element={<Registeration />} /> 
         <Route path="/auth/login" element={<Login />} /> 
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
