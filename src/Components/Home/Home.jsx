import Header from "../Componetn-Files/header/header"
import Class from "./home.module.css"
import Footer from "../Componetn-Files/Footer/footer"
import { Link } from "react-router"
export default function Home(){
    return(
        <div>
            <div className={`${Class.bodyMainDiv}`}>
                <h1>You got the travel plans, we got the travel vans.</h1>

                <p > Add adventures to your life by joining the #VanNomad life.
                    <br/>
                    Rent the perfect van to make your perfect road trip.
                  </p>
                <br/>
                <Link className={`${Class.findVan}`} to={"/vans"}>Find Your Van</Link>
            </div>
        </div>
        
    )
}