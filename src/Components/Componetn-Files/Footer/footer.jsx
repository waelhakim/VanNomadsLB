import Class from './footer.module.css'
export default function Footer(){
    
    return(

        <div className={`${Class.mainFooterDiv}`}>
            <p>&copy;{(new Date().getFullYear())} #VanNomads </p>
            <p className={`${Class.bottomInfo}`}>hakimwael001@hotmail.com</p>
        </div>
    )
}