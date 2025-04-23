import { useState } from 'react'
import {BrowserRouter  , Routes , Route , Link} from 'react-router'
import Header from './Components/Componetn-Files/header/header'
import Footer from './Components/Componetn-Files/Footer/footer'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Vans from './Components/Vans/Vans'
import VanDetail from './Components/VanDetail/VanDetail'
import Layout from './Components/Componetn-Files/Layout'
import HostLayout from './Components/Componetn-Files/Host-layout'
import Dashboard from './Components/Host/Dashboard'
import Income from './Components/Host/Income/Income'
import Reviews from './Components/Host/Reviews/Reviews'
import HostVans from './Components/Host/HostVans/HostVans'
import HostVanDetails from './Components/Host/HostVanDetails/HostVanDetails'
function App() {
  return (

  
    <BrowserRouter >

        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="vans" element={<Vans/>}/>
            <Route path="vans/:id" element={<VanDetail/>}/>
          </Route>
        </Routes>
    </BrowserRouter >

  )
}

export default App
