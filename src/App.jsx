
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart'
import { ToastContainer } from 'react-toastify'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
function App() {

  return (
    <>


<BrowserRouter>

      <Navbar/>

        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/register' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
<ToastContainer/>

</BrowserRouter>
    </>
  )
}

export default App
