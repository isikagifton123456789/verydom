import './App.css'
import { Route,Routes } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import ResetPassword from './components/ResetPassword/ResetPassword'
const App = () => {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />       
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/signup"  element={< SignUp/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="resetpassword" element={<ResetPassword />} />
      </Routes>
     <Footer  /> 
    </>
  )
}

export default App
