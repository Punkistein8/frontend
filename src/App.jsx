import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from './layout/Landing.jsx'
import Login from "./pages/login/Login.jsx"
import OlvidePass from "./pages/olvide-pass/OlvidePass.jsx"
import Registrarse from "./pages/registrarse/Registrarse.jsx"

const App = () => {

  const script1 = document.createElement("script");
  const script2 = document.createElement("script");
  script1.src = '/src/pages/login/assets/bootstrap/js/bootstrap.min.js';
  script2.src = '/src/pages/login/assets/js/bs-init.js';
  script1.async = true;
  script2.async = true;
  document.body.appendChild(script1);
  document.body.appendChild(script2);

  return (
    // <BrowserRouter basename="/frontend">
      <Routes>
        <Route index exact element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/olvidepass" element={<OlvidePass />} />
        <Route exact path="/registrarme" element={<Registrarse />} />
      </Routes>
    // </BrowserRouter>
  )
}

export default App