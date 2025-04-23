import { Outlet } from "react-router"
import Header from "./header/header"
import Footer from "./Footer/footer"
import Class from './Layout.module.css'
export default function Layout(){
    return(
      <div className={`${Class.mainAppContainer}`}>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    )
}