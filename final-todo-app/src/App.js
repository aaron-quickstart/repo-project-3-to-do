import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./componets/Home";
import ContactUs from "./componets/ContactUs";



function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contactus" element={<ContactUs />}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;