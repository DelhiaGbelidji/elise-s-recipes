import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Dashboard, Home, Recipes, SignIn, SignUp } from "./pages";
import { Footer, Header } from "./components";
import { PrivateRoute } from "./components/router/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/recipes" element={<Recipes />}></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
