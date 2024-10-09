import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Dashboard, Home, Recipes, SignIn, SignUp } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/recipes" element={<Recipes />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
