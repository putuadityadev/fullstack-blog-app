import {Routes, Route, HashRouter as Router} from "react-router-dom"
import Landing from "./pages/Landing"
import About from "./pages/About"
import Contact from "./pages/Contact"
import CreateBlog from "./pages/CreateBlog"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import ReadBlog from "./pages/ReadBlog"
import Layout from "./components/Layout"
import { useEffect } from "react"
import axios from "axios"


const App = () => {
  useEffect(() => {
    let token = sessionStorage.getItem("User")

    if(token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route element={<Layout />}>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/createblog" element={<CreateBlog />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/readblog/:id" element={<ReadBlog />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App