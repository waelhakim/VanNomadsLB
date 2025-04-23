import Footer from "../Componetn-Files/Footer/footer";
import Header from "../Componetn-Files/header/header";
import Class from './About.module.css'
export default function About(){
    return(
        <div style={{backgroundColor:'#FFF7ED', minHeight:'90vh'}}>
            <div className={`${Class.imageDivContainer}`}>
            <div className={`${Class.aboutTopImage}`}></div>
            </div>
            <div className={`${Class.aboutMainDiv}`}>
                <h1 style={{fontSize:'1.5rem'}}>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉) <br/>
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
        </div>
    )
}