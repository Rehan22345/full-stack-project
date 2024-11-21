import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Components/index"
import Register from "./Components/Register"
import Login from "./Components/Login"
import Blog from "./Components/Blog"
const App = () => {
  return (
<>

<BrowserRouter>
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/add" element={<Blog />} />
</Routes>
</BrowserRouter>

</>
  )
}

export default App

