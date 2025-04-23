import { useParams , Link } from "react-router"
import data from "../../data";
import Class from './VanDetail.module.css'
export default function VanDetail(){
    const pageParams = useParams();
    
    const mappedVan = data.map(item=>{
        const itemType = item.type;
        const itemTypeStyle = {
            backgroundColor:itemType == "simple"?"#E17654" :itemType ==  "rugged" ? "#115E59" : "#161616",
            width:"5.375rem",
            height:"2.125rem",
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:'0.313rem',
            color:"white"
        }
        return(
            item.id == pageParams.id ?
            <div key={item.id} className={`${Class.mainVanDeatailContainer}`}>
                <img src={item.imageUrl} className={`${Class.mainImage}`}/>
                <div style={itemTypeStyle}>{item.type}</div>
                <h2 style={{margin:'0px'}}>{item.name}</h2>
                <h2 style={{margin:'0px'}}>${item.price}<p style={{margin:'0px'}}>/day</p></h2>
                <p style={{margin:'0px'}}>{item.description}</p>
                <div style={{fontSize:'0.9rem'}}>For rent please contact:<br/><span style={{fontSize:'0.75rem', color:'grey'}}>hakimwael001@hotmail.com</span></div>
               
            </div>
            :null
        )
    })
    return(
        <div style={{backgroundColor:'#FFF7ED'}}>
           <h5><Link to={"/vans" } style={{color:"black",marginLeft:'1rem'}}>{"<-"}Back to all vans</Link></h5>
           {mappedVan}
           
        </div>
    )
}